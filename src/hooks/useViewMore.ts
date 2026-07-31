import { useMemo, useState } from 'react';

interface UseViewMoreOptions {
  /** Number of full rows to show when collapsed. Default: 2 */
  initialRows?: number;
}

/**
 * Hides items that would sit in an incomplete grid row, or beyond initialRows.
 * Returns a View More toggle when more content exists.
 */
export function useViewMore<T>(
  items: T[],
  columns: number,
  options: UseViewMoreOptions = {}
) {
  const initialRows = options.initialRows ?? 2;
  const [expanded, setExpanded] = useState(false);

  const result = useMemo(() => {
    if (items.length === 0) {
      return { visibleItems: [] as T[], hiddenCount: 0, shouldShowButton: false, collapsedCount: 0 };
    }

    const maxInitial = columns * initialRows;
    const remainder = items.length % columns;
    const hasIncompleteRow = remainder !== 0;
    const completeRowCount = Math.floor(items.length / columns) * columns;

    let collapsedCount: number;

    if (items.length <= columns) {
      // Single row or less — show all
      collapsedCount = items.length;
    } else if (hasIncompleteRow) {
      // Hide the partial last row when collapsed
      collapsedCount = Math.min(maxInitial, completeRowCount || columns);
      if (collapsedCount === 0) collapsedCount = columns;
    } else {
      collapsedCount = Math.min(maxInitial, items.length);
    }

    const shouldShowButton = items.length > collapsedCount;
    const visibleItems = expanded ? items : items.slice(0, collapsedCount);
    const hiddenCount = items.length - collapsedCount;

    return { visibleItems, hiddenCount, shouldShowButton, collapsedCount };
  }, [items, columns, initialRows, expanded]);

  return {
    ...result,
    expanded,
    setExpanded,
    toggle: () => setExpanded((prev) => !prev),
  };
}
