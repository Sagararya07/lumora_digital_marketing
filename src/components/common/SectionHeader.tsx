import React from 'react';
import { Sparkles } from 'lucide-react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) => {
  // Format title to add gradient text to the final word(s)
  const words = title.trim().split(' ');
  let leadingText = '';
  let highlightText = title;

  if (words.length > 1) {
    highlightText = words.pop() || '';
    leadingText = words.join(' ');
  }

  return (
    <div className={`max-w-3xl mb-14 ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest px-4 py-2 rounded-full border shadow-sm mb-4 ${
          dark 
            ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' 
            : 'bg-blue-50 border-blue-100 text-blue-600'
        }`}>
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>{eyebrow}</span>
        </span>
      )}

      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mt-2 ${
        dark ? 'text-white' : 'text-slate-900'
      }`}>
        {leadingText ? `${leadingText} ` : ''}
        <span className="gradient-text">{highlightText}</span>
      </h2>

      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed font-medium max-w-2xl ${
          align === 'center' ? 'mx-auto' : ''
        } ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
