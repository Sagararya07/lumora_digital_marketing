import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ConsultationSectionProps {
  contactInfo?: any;
  heading?: string;
  subheading?: string;
  sourcePage?: string;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  heading,
  subheading,
  sourcePage = 'Home Page Section',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Consultation Inquiry',
          email,
          companyName: 'Website Visitor',
          servicesRequired: ['Free Consultation'],
          sourcePage,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to send consultation lead:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultation-section" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rounded Gradient Banner Card */}
        <div className="relative rounded-[32px] p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#FBBF24] text-white shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Seamless Star Radiant Background Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-96 opacity-30 pointer-events-none flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 200 200" className="w-full h-full transform scale-150" fill="none">
              <g transform="translate(100, 100)">
                <polygon points="0,-4 92,0 0,4 -92,0" fill="#FFFFFF" opacity="0.8" />
                <polygon points="-4,0 0,-78 4,0 0,78" fill="#FFFFFF" opacity="0.8" />
                <g transform="rotate(45)">
                  <polygon points="-3,0 0,-58 3,0 0,58" fill="#FFF3C4" opacity="0.7" />
                </g>
                <g transform="rotate(135)">
                  <polygon points="-3,0 0,-58 3,0 0,58" fill="#FFF3C4" opacity="0.7" />
                </g>
                <circle cx="0" cy="0" r="22" fill="#FFFFFF" opacity="0.9" />
              </g>
            </svg>
          </div>

          {/* Left Text Content */}
          <div className="max-w-xl relative z-10 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              {heading || 'Ready to Build Your Growth Engine?'}
            </h2>
            <p className="text-purple-100 text-sm sm:text-base font-normal leading-relaxed">
              {subheading || "Let's create an intelligent growth system that delivers real results for your business."}
            </p>
          </div>

          {/* Right Input Form & White Pill Button */}
          <div className="relative z-10 shrink-0 w-full lg:w-auto">
            {submitted ? (
              <div className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-xs shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you! We will reach out to cypherswiftinfotech@gmail.com shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-6 py-4 rounded-full bg-white/20 backdrop-blur-md placeholder-white/80 text-white text-xs font-semibold focus:outline-none border border-white/30 w-full sm:w-64"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-[#2563EB] text-xs font-extrabold flex items-center justify-center gap-2.5 shadow-xl transition-all hover:scale-105 shrink-0 font-['Plus_Jakarta_Sans',sans-serif] disabled:opacity-50"
                >
                  <span>{loading ? 'Submitting...' : 'Get a Free Consultation'}</span>
                  <ArrowRight className="w-4 h-4 text-[#2563EB]" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
