import React from 'react';
import { Users, TrendingUp, Target, Trophy } from 'lucide-react';

const stats = [
  { 
    value: '250+', 
    title: 'Happy Clients', 
    desc: 'Across 15+ Countries Worldwide', 
    icon: <Users className="w-6 h-6 text-white" />, 
    iconGradient: 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/25' 
  },
  { 
    value: '450%', 
    title: 'Average ROI Growth', 
    desc: 'Delivered For Client Campaigns', 
    icon: <TrendingUp className="w-6 h-6 text-white" />, 
    iconGradient: 'bg-gradient-to-br from-purple-500 to-indigo-600 shadow-purple-500/25' 
  },
  { 
    value: '8.5M+', 
    title: 'Leads Generated', 
    desc: 'Through Targeted Sales Funnels', 
    icon: <Target className="w-6 h-6 text-white" />, 
    iconGradient: 'bg-gradient-to-br from-pink-500 to-rose-600 shadow-pink-500/25' 
  },
  { 
    value: '98%', 
    title: 'Client Retention', 
    desc: 'Long-term Growth Partnerships', 
    icon: <Trophy className="w-6 h-6 text-white" />, 
    iconGradient: 'bg-gradient-to-br from-amber-500 to-orange-600 shadow-amber-500/25' 
  },
];

export const StatsBar: React.FC = () => (
  <section className="py-16 sm:py-20 bg-white border-b border-[#E5E7EB]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className="p-6 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-5 group"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${stat.iconGradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm font-extrabold text-[#111827] mt-0.5 font-['Plus_Jakarta_Sans',sans-serif]">
                {stat.title}
              </p>
              <p className="text-xs text-[#6B7280] font-normal mt-0.5">
                {stat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
