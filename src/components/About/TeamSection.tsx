import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { TeamMember } from '../../types';

interface TeamSectionProps {
  teamMembers?: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-slide every 5 seconds (optional, but good for carousels)
  useEffect(() => {
    if (teamMembers.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  if (!teamMembers || teamMembers.length === 0) {
    return null;
  }

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
      setIsAnimating(false);
    }, 300);
  };

  const activeMember = teamMembers[activeIndex];

  // Split name for styling (e.g. "Dr." and "Emily Peterson")
  // We'll assume the first word is the title if it contains a dot, or just style the name
  const nameParts = activeMember.name.split(' ');
  const title = nameParts[0].includes('.') ? nameParts[0] : '';
  const mainName = title ? nameParts.slice(1).join(' ') : activeMember.name;

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Top Heading */}
        <div className="mb-12 md:mb-20 max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          <span className="inline-flex items-center gap-2 font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border shadow-xs font-['Plus_Jakarta_Sans',sans-serif] text-[#5B8EE2] border-blue-200 bg-[#F2F6FC]/80">
            TEAM
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#111827] leading-snug md:leading-tight font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Our team of <span className="text-[#5B8EE2]">skilled professionals</span> is committed to providing you with <span className="text-[#5B8EE2]">personalized, high-quality</span> digital marketing.
          </h2>
        </div>

        {/* Carousel Content */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-center transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          
          {/* Left Column: Name & Details */}
          <div className="flex flex-col h-full justify-between order-2 lg:order-1 pt-6 lg:pt-10">
            <div>
              {title && <span className="text-2xl md:text-3xl lg:text-5xl italic text-[#5B8EE2] block mb-2">{title}</span>}
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-4 md:mb-6 bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
                {mainName}
              </h3>
              <p className="text-xl font-bold text-[#5B8EE2] uppercase tracking-wider">{activeMember.role}</p>
            </div>

            <div className="mt-16 lg:mt-auto">
              <p className="text-sm text-[#9CA3AF] mb-3">(Specialization)</p>
              <div className="flex flex-wrap gap-4 text-sm font-semibold text-[#4B5563]">
                {activeMember.specializations.map((spec, i) => (
                  <span key={i}>{spec}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column: Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden bg-[#F3F4F6]">
              {activeMember.imageUrl ? (
                <img 
                  src={activeMember.imageUrl} 
                  alt={activeMember.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
              )}
            </div>
          </div>

          {/* Right Column: Description & Controls */}
          <div className="flex flex-col h-full justify-between order-3 pt-10 lg:pl-10">
            <p className="text-[#4B5563] text-lg leading-relaxed">
              {activeMember.description}
            </p>

            <div className="flex items-end justify-between mt-12 lg:mt-auto">
              <span className="text-sm font-medium text-[#6B7280]">
                {activeIndex + 1}/{teamMembers.length}
              </span>
              <button 
                onClick={handleNext}
                className="w-16 h-16 rounded-full border border-[#E5E7EB] flex items-center justify-center hover:border-[#5B8EE2] hover:bg-gradient-to-r hover:from-[#5B8EE2] hover:to-[#4373c2] transition-all group shadow-sm"
                aria-label="Next team member"
              >
                <ArrowRight className="w-6 h-6 text-[#111827] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
