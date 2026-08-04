import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ViewMoreButtonProps {
  expanded: boolean;
  onToggle: () => void;
  hiddenCount: number;
  label?: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({
  expanded,
  onToggle,
  hiddenCount,
  label,
  variant = 'light',
  className = '',
}) => {
  if (hiddenCount <= 0) return null;

  const isDark = variant === 'dark';

  return (
    <div className={`flex justify-center pt-10 ${className}`}>
      <button
        onClick={onToggle}
        className={`group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl text-sm font-bold transition-all border ${
          isDark
            ? 'bg-white/5 hover:bg-white/10 text-white border-white/15 hover:border-[#729EE6]/40'
            : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md'
        }`}
      >
        {expanded ? (
          <>
            <ChevronUp className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-[#5B8EE2]'}`} />
            <span>Show Less</span>
          </>
        ) : (
          <>
            <ChevronDown className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-[#5B8EE2]'} group-hover:translate-y-0.5 transition-transform`} />
            <span>{label || `View More`}</span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isDark ? 'bg-[#729EE6]/20 text-[#AEC7F0]' : 'bg-[#F2F6FC] text-[#5B8EE2]'}`}>
              +{hiddenCount}
            </span>
          </>
        )}
      </button>
    </div>
  );
};
