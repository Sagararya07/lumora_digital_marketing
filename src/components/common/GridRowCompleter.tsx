import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface GridRowCompleterProps {
  itemCount: number;
  colsMd: number;
  colsLg: number;
  onClick: () => void;
  label?: string;
}

/**
 * Ensures grid rows are always perfectly complete by rendering 
 * responsive placeholder "View More" cards in empty slots.
 */
export const GridRowCompleter: React.FC<GridRowCompleterProps> = ({
  itemCount,
  colsMd,
  colsLg,
  onClick,
  label = "View More Options"
}) => {
  if (itemCount === 0) return null;

  // Calculate remainders for each breakpoint
  const mdRemainder = itemCount % colsMd;
  const mdEmpty = mdRemainder === 0 ? 0 : colsMd - mdRemainder;

  const lgRemainder = itemCount % colsLg;
  const lgEmpty = lgRemainder === 0 ? 0 : colsLg - lgRemainder;

  // Base card design
  const cardClass = "premium-card p-6 rounded-2xl flex flex-col items-center justify-center cursor-pointer group border-2 border-dashed border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-blue-300 transition-all min-h-[200px]";

  const renderCard = (key: string, visibilityClass: string) => (
    <div key={key} onClick={onClick} className={`${cardClass} ${visibilityClass}`}>
      <div className="w-12 h-12 rounded-full bg-[#F2F6FC] border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
        <ArrowRight className="w-5 h-5 text-[#5B8EE2] group-hover:translate-x-1 transition-transform" />
      </div>
      <h3 className="text-sm font-bold text-slate-700 group-hover:text-[#5B8EE2] transition-colors text-center">{label}</h3>
      <div className="flex items-center gap-1.5 mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        <Sparkles className="w-3 h-3 text-amber-400" />
        <span>Explore All</span>
      </div>
    </div>
  );

  return (
    <>
      {/* Fillers for LG (Visible only on LG screens and up) */}
      {Array.from({ length: lgEmpty }).map((_, i) => 
        renderCard(`lg-${i}`, "hidden lg:flex")
      )}

      {/* Fillers for MD (Visible only on MD screens, hidden on LG) */}
      {Array.from({ length: mdEmpty }).map((_, i) => 
        renderCard(`md-${i}`, "hidden md:flex lg:hidden")
      )}
    </>
  );
};
