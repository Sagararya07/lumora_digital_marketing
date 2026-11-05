// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  ArrowRight, 
  CheckCircle2,
  XCircle,
  AlertCircle,
  MapPin, 
  ShieldCheck, 
  Globe2, 
  TrendingUp, 
  Target, 
  Building2, 
  Rocket, 
  Headphones, 
  FileText, 
  Search, 
  Sparkles, 
  Clock, 
  Lock, 
  Plus, 
  Minus, 
  Calendar,
  Briefcase,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  RefreshCw,
  Sliders,
  Handshake,
  Layers,
  Award,
  BarChart3,
  Check,
  Megaphone,
  ArrowUpRight
} from 'lucide-react';
import { SiteContent } from '../../types';
import { ConsultationSection } from '../Home/ConsultationSection';

interface ManpowerOutsourcingPageProps {
  siteContent?: SiteContent;
  onGoHome: () => void;
  openConsultationModal: (source?: string) => void;
}

export const ManpowerOutsourcingPage: React.FC<ManpowerOutsourcingPageProps> = ({
  siteContent,
  onGoHome,
  openConsultationModal,
}) => {
  // Active FAQ Accordion state
  // Active FAQ Accordion state: by default ONLY 1 open (0), clicking another closes previous
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => (prev === index ? null : index));
  };
  const [selectedPillar, setSelectedPillar] = useState<number>(0);
  const [activeRoleIndex, setActiveRoleIndex] = useState<number>(0);
  const [roleSlideDirection, setRoleSlideDirection] = useState<'left' | 'right'>('left');
  const [scrollDir, setScrollDir] = useState<number>(1); // 1 = forward, -1 = backward
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [selectedChallengeIndex, setSelectedChallengeIndex] = useState<number>(0);
  const [selectedBeneficiaryIndex, setSelectedBeneficiaryIndex] = useState<number>(0);
  const [isStepPaused, setIsStepPaused] = useState<boolean>(false);

  // Continuous lottery machine running animation: rolls through steps 0 -> 1 -> 2 -> 3 -> 4 -> 0
  useEffect(() => {
    if (isStepPaused) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % 5);
    }, 2800);
    return () => clearInterval(interval);
  }, [isStepPaused]);
  const roleSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleRoleScroll = () => {
      if (!roleSectionRef.current) return;
      const rect = roleSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      const scrolled = -rect.top;

      if (scrolled >= 0 && scrolled <= totalScrollable && totalScrollable > 0) {
        const progress = scrolled / totalScrollable;
        const newIndex = Math.min(Math.floor(progress * 4), 3);
        setActiveRoleIndex((prev) => {
          if (prev !== newIndex) {
            setScrollDir(newIndex > prev ? 1 : -1);
            setRoleSlideDirection(newIndex % 2 === 0 ? 'left' : 'right');
            return newIndex;
          }
          return prev;
        });
      }
    };

    window.addEventListener('scroll', handleRoleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleRoleScroll);
  }, []);

  const selectRole = (index: number) => {
    const newIdx = Math.max(0, Math.min(3, index));
    setScrollDir(newIdx >= activeRoleIndex ? 1 : -1);
    setRoleSlideDirection(newIdx % 2 === 0 ? 'left' : 'right');
    setActiveRoleIndex(newIdx);
    if (roleSectionRef.current) {
      const rect = roleSectionRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const sectionTop = rect.top + scrollTop;
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable > 0) {
        const targetScroll = sectionTop + (newIdx / 3.1) * totalScrollable + 20;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    }
  };

  // Dynamic SEO Title & Meta Description
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Sales & Customer Acquisition Manpower Outsourcing Partner | Lumora';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Lumora is your B2B sales and customer acquisition manpower outsourcing partner. Access 1,000+ verified professionals across business development, sales management, and marketing leadership with backup support.'
    );

    const updateOrCreateMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOrCreateMeta('og:title', 'Sales & Customer Acquisition Manpower Outsourcing Partner | Lumora');
    updateOrCreateMeta('og:description', 'Access 1,000+ verified, trained B2B sales, customer acquisition, and marketing professionals.');
    updateOrCreateMeta('og:url', window.location.href);
    updateOrCreateMeta('og:type', 'website');
  }, []);


  // 4 Core Roles with Creative Competencies
  const roles = [
    {
      num: '01',
      title: 'Business Development',
      tabLabel: 'Business Development',
      badge: 'B2B Pipeline',
      badgeColor: 'text-[#2563EB] bg-blue-50 border-blue-200/80',
      cardTheme: 'from-blue-50/50 via-white to-white border-blue-100/90 hover:border-[#5B8EE2]',
      accentColor: '#5B8EE2',
      icon: Handshake,
      iconGradient: 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/25',
      desc: 'Proactive professionals specialized in pipeline generation, strategic market mapping, outbound prospecting, and enterprise sales pitching.',
      profiles: [
        { title: 'Business Development Executive (BDE)', level: 'Mid / Senior' },
        { title: 'Business Development Manager (BDM)', level: 'Team Lead' }
      ],
      points: [
        { label: 'Outbound Prospecting', detail: 'Multi-touch cold email & outreach cadences' },
        { label: 'Strategic TAM Mapping', detail: 'Target account lists & ICP market discovery' },
        { label: 'Discovery Calls', detail: 'High-intent sales pipeline demo booking' },
        { label: 'Enterprise Pitching', detail: 'Executive stakeholder product walkthroughs' }
      ],
      speed: 'Deploy in 5 Days'
    },
    {
      num: '02',
      title: 'Customer & Client Acquisition',
      tabLabel: 'Client Acquisition',
      badge: 'High Conversion',
      badgeColor: 'text-[#7C3AED] bg-purple-50 border-purple-200/80',
      cardTheme: 'from-purple-50/50 via-white to-white border-purple-100/90 hover:border-purple-400',
      accentColor: '#7C3AED',
      icon: Users,
      iconGradient: 'bg-gradient-to-br from-purple-500 to-indigo-600 shadow-purple-500/25',
      desc: 'Experienced specialists focused on engaging high-intent prospects, managing multi-touch consultative negotiations, and securing long-term enterprise commitments.',
      profiles: [
        { title: 'Client Acquisition Executive', level: 'Mid / Senior' },
        { title: 'Client Acquisition Manager', level: 'Team Lead' }
      ],
      points: [
        { label: 'Consultative Closing', detail: 'Navigating procurement & stakeholder committees' },
        { label: 'Pipeline Acceleration', detail: 'Shortening demo-to-contract velocity' },
        { label: 'Objection Handling', detail: 'Value-based differentiation against competitors' },
        { label: 'Contract Execution', detail: 'MSA agreements, commercial terms & sign-off' }
      ],
      speed: 'Deploy in 5 Days'
    },
    {
      num: '03',
      title: 'Sales Management',
      tabLabel: 'Sales Management',
      badge: 'Revenue Velocity',
      badgeColor: 'text-[#DB2777] bg-pink-50 border-pink-200/80',
      cardTheme: 'from-pink-50/50 via-white to-white border-pink-100/90 hover:border-pink-400',
      accentColor: '#DB2777',
      icon: TrendingUp,
      iconGradient: 'bg-gradient-to-br from-pink-500 to-rose-600 shadow-pink-500/25',
      desc: 'Proven sales drivers capable of accelerating pipeline velocity, meeting quotas, orchestrating deal cycles, and driving predictable top-line revenue.',
      profiles: [
        { title: 'Sales Executive', level: 'Mid / Senior' },
        { title: 'Sales Manager', level: 'Manager' },
        { title: 'Head of Sales', level: 'Director' }
      ],
      points: [
        { label: 'Quota Forecasting', detail: 'Predictable top-line monthly ARR & revenue metrics' },
        { label: 'Sales Pod Leadership', detail: 'Performance coaching, cadence & pipeline hygiene' },
        { label: 'Deal Orchestration', detail: 'Stage-by-stage multi-threaded enterprise cycles' },
        { label: 'Account Expansion', detail: 'Upselling, retention & contract lifetime value' }
      ],
      speed: 'Deploy in 5 Days'
    },
    {
      num: '04',
      title: 'Marketing Management',
      tabLabel: 'Marketing Leadership',
      badge: 'Brand & Demand',
      badgeColor: 'text-[#EA580C] bg-amber-50 border-amber-200/80',
      cardTheme: 'from-amber-50/50 via-white to-white border-amber-100/90 hover:border-amber-400',
      accentColor: '#EA580C',
      icon: Megaphone,
      iconGradient: 'bg-gradient-to-br from-amber-500 to-orange-600 shadow-amber-500/25',
      desc: 'Strategic marketing leaders who orchestrate multi-channel demand generation, campaign performance, brand authority, and qualified sales lead funnels.',
      profiles: [
        { title: 'Marketing Executive', level: 'Mid / Senior' },
        { title: 'Marketing Manager', level: 'Manager' },
        { title: 'Head & Director of Marketing', level: 'Director' }
      ],
      points: [
        { label: 'Demand Generation', detail: 'Omni-channel paid ads, SEO & inbound funnels' },
        { label: 'Brand Positioning', detail: 'Executive authority collateral & sales enablement' },
        { label: 'Attribution & Analytics', detail: 'CAC optimization, ROI tracking & conversion data' },
        { label: 'CRM Automation', detail: 'Automated lead scoring, nurturing & routing' }
      ],
      speed: 'Deploy in 5 Days'
    }
  ];

  // 7 Pillars with Process-Style Metadata & Detailed Explanation
  const pillars = [
    {
      id: '01',
      title: 'Trained & Eligible Manpower',
      badge: '1,000+ Profiles',
      icon: Award,
      gradient: 'from-[#5B8EE2] to-[#818CF8]',
      shortDesc: 'Curated bench of 1,000+ verified professionals with cross-industry and global client experience.',
      fullDesc: 'We have built an exclusive network of over 1,000 verified sales and customer acquisition professionals. Every candidate is evaluated on past quota attainment, communication proficiency, executive negotiation, and international client adaptability. You gain immediate access to enterprise-cleared talent without the months-long bottleneck of recruitment agencies.',
      guarantees: [
        'Verified historical B2B track records and deal-closing proficiency',
        'Interview-cleared candidates aligned with your sales complexity',
        'Immediate onboarding without hiring friction or talent search delays'
      ]
    },
    {
      id: '02',
      title: 'We Are Not a Consulting Broker',
      badge: 'Active Tech & Agency',
      icon: Layers,
      gradient: 'from-[#8B5CF6] to-[#A855F7]',
      shortDesc: 'An active technology & digital marketing powerhouse, living in revenue pipelines daily.',
      fullDesc: 'Unlike traditional staffing agencies that merely forward unvetted resumes from job boards, Lumora is an active digital marketing and technology powerhouse under Cypher Swift InfoTech. We understand demand generation, customer acquisition cost (CAC), deal velocity, and conversion economics firsthand. We support your outsourced reps with real strategic marketing playbooks.',
      guarantees: [
        'Zero recruitment broker markups or hidden placement commissions',
        'Direct strategic guidance and modern sales playbook enablement',
        'Full alignment with your CRM, conversion funnels & performance KPIs'
      ]
    },
    {
      id: '03',
      title: 'Guaranteed Backup Support',
      badge: 'Zero Downtime',
      icon: RefreshCw,
      gradient: 'from-[#EC4899] to-[#F43F5E]',
      shortDesc: 'Built-in standby talent to safeguard your operations from unexpected workforce attrition or gaps.',
      fullDesc: 'Workforce continuity is essential for sales momentum. If any outsourced rep is unexpectedly absent, on leave, or requires replacement, Lumora deploys pre-briefed standby talent immediately to ensure your sales outreach, buyer meetings, and revenue generation continue without a single day of interruption.',
      guarantees: [
        'Dedicated standby backup talent bench on immediate standby',
        'Pre-briefed on your campaign parameters for seamless knowledge transfer',
        'Protects revenue velocity from unexpected attrition and gaps'
      ]
    },
    {
      id: '04',
      title: 'Flexible & Long-Term Engagements',
      badge: 'Elastic Scale',
      icon: Sliders,
      gradient: 'from-[#F59E0B] to-[#F97316]',
      shortDesc: 'Scale single specialists, multi-tier pods, or complete sales departments on-demand.',
      fullDesc: 'Scale your workforce dynamically based on your commercial roadmap. Whether you need a single specialized Business Development Executive for a 3-month launch sprint or a 15-person multi-tier enterprise acquisition pod on an ongoing multi-year engagement, we configure flexible on-site or off-site arrangements tailored to your goals.',
      guarantees: [
        'Elastic team scaling from individual reps to complete multi-tier departments',
        'Flexible on-site or remote international deployment configurations',
        'Zero permanent severance liabilities, payroll overhead, or hiring lock-in'
      ]
    },
    {
      id: '05',
      title: 'Structured Security & NDA Standards',
      badge: 'Enterprise Security',
      icon: Lock,
      gradient: 'from-[#10B981] to-[#059669]',
      shortDesc: 'Binding NDAs, international confidentiality, IP governance, and secure data handling.',
      fullDesc: 'Your proprietary sales materials, customer databases, pipeline intelligence, and intellectual property are protected under binding Non-Disclosure Agreements. Our outsourced personnel are formally trained in enterprise data handling, GDPR compliance, SOC-2 protocols, and strict confidentiality governance.',
      guarantees: [
        'Binding Non-Disclosure Agreements signed prior to kickoff',
        'Formal training in enterprise confidentiality and secure CRM management',
        'Full client ownership of all pipeline data, notes, and strategic deliverables'
      ]
    },
    {
      id: '06',
      title: 'Result-Oriented Commercial Focus',
      badge: 'Revenue Driven',
      icon: TrendingUp,
      gradient: 'from-[#0EA5E9] to-[#3B82F6]',
      shortDesc: 'Commercial focus on meeting discovery, active follow-ups, and business closing.',
      fullDesc: 'Our professionals do not simply log hours or make mechanical cold calls. They operate with an active commercial mindset—qualifying buyer intent, navigating objections, maintaining persistent multi-touch follow-ups, and actively driving prospects toward closed contracts and verified commercial commitments.',
      guarantees: [
        'Measurable KPIs focused on qualified pipeline meetings and bookings',
        'Multi-touch consultative outreach cadences via email, phone, and LinkedIn',
        'Continuous performance tracking and operational quality assurance'
      ]
    },
    {
      id: '07',
      title: 'Multi-Language & Global Adaptability',
      badge: 'Global Protocol',
      icon: Globe2,
      gradient: 'from-[#6366F1] to-[#A855F7]',
      shortDesc: 'Native and bilingual capabilities to effortlessly navigate international market protocols.',
      fullDesc: 'Expanding into North America, Europe, APAC, or the Middle East? We deploy professionals with fluent English and regional language proficiencies who understand international business etiquette, executive protocol, and cross-border commercial communication across diverse cultural landscapes.',
      guarantees: [
        'Fluent bilingual talent for international corporate outreach',
        'Nuanced comprehension of cross-border procurement & purchasing cycles',
        'Verified experience interfacing with US, UK, European, and APAC C-suite leads'
      ]
    }
  ];

  // 4 Challenges vs Lumora Solutions
  // Senior SaaS Benchmark: 4 Real-World Challenges vs Lumora Solutions
  const challenges = [
    {
      num: '01',
      id: 'sourcing',
      title: 'Finding Experienced & Reliable Manpower',
      subtitle: 'Talent Sourcing & Retention Bottlenecks',
      icon: Users,
      badge: 'Talent Sourcing',
      legacy: {
        timeToHire: '45 - 60+ Days',
        cost: '20-30% Upfront Agency Fee',
        risk: '45%+ First-Year Attrition',
        method: 'Generic unvetted job board scraping',
        frustrations: [
          'Sifting through unvetted resumes from candidates who fabricate sales experience',
          'Candidates ghosting interviews or quitting after 2-3 months of expensive onboarding',
          'Zero replacement guarantee when rep leaves, forcing you to restart the search from zero'
        ]
      },
      lumora: {
        timeToDeploy: '5 Business Days',
        cost: 'Zero Placement Markup Fees',
        risk: '99% Match SLA & Standby Guarantee',
        method: 'Curated 1,000+ pre-vetted B2B deal-closing bench',
        resolutions: [
          'Historical quota attainment and executive presentation verified prior to matching',
          'Instant onboarding from an established network of seasoned B2B specialists',
          'Guaranteed standby backup talent on immediate call to ensure zero sales downtime'
        ]
      }
    },
    {
      num: '02',
      id: 'communication',
      title: 'Communication & International Barriers',
      subtitle: 'Global Executive Etiquette & Polish',
      icon: Globe2,
      badge: 'International Protocol',
      legacy: {
        timeToHire: 'Variable & Inconsistent',
        cost: 'Lost Enterprise Brand Equity',
        risk: 'High Deal Rejection Rate',
        method: 'Junior reps lacking boardroom poise',
        frustrations: [
          'Reps lacking confidence when interfacing with VP and C-level decision-makers',
          'Struggling with cultural nuances, international business etiquette, and compliance',
          'Broken written and verbal communication causing multi-stakeholder deals to stall'
        ]
      },
      lumora: {
        timeToDeploy: 'Immediate Sourcing',
        cost: 'Included in Flat Deployment Model',
        risk: 'Tested Cross-Border Protocols',
        method: 'Tenured professionals with North America, Europe & APAC experience',
        resolutions: [
          'Fluent business English and regional language proficiencies tested for C-suite calls',
          'Nuanced comprehension of cross-border procurement, legal MSAs, and corporate culture',
          'Consistent professional documentation, CRM hygiene, and executive follow-ups'
        ]
      }
    },
    {
      num: '03',
      id: 'closing',
      title: 'Concerns About Output & Business Closing',
      subtitle: 'Revenue Velocity vs Mechanical Activity',
      icon: TrendingUp,
      badge: 'Deal Velocity',
      legacy: {
        timeToHire: 'Low Yield / High Burn',
        cost: 'Vanity Metrics with Zero Signed ARR',
        risk: 'Unpredictable Pipeline Dry-Spells',
        method: 'Mechanical script readers & robotic callers',
        frustrations: [
          'Agencies providing junior telemarketers who merely dial numbers without intent discovery',
          'Zero ability to handle complex objections, competitor differentiation, or price pushback',
          'High call volume that damages brand reputation with zero qualified meetings booked'
        ]
      },
      lumora: {
        timeToDeploy: 'Revenue-Ready Pods',
        cost: 'Aligned with Business Outcomes',
        risk: 'KPI & Meeting Attainment Cadence',
        method: 'Consultative B2B deal drivers trained in modern sales psychology',
        resolutions: [
          'Focus on buyer intent qualification, multi-touch discovery, and consultative closing',
          'Proven objection-handling playbooks tailored to your industry and competitor landscape',
          'Active deal velocity that accelerates prospects from first touch to closed contract'
        ]
      }
    },
    {
      num: '04',
      id: 'onboarding',
      title: 'Knowledge Transfer (KT) & Workflow Friction',
      subtitle: 'Seamless Agile Adaptation to Your SOPs',
      icon: Layers,
      badge: 'Agile Integration',
      legacy: {
        timeToHire: '3-4 Months to Produce Results',
        cost: 'Exhaustive Internal Management Drag',
        risk: 'Workflow Clash & Tool Incompatibility',
        method: 'Expecting your company to overhaul its systems',
        frustrations: [
          'Outsourced personnel demanding constant hand-holding, slowing down internal founders',
          'Resisting your CRM, tracking tools, and existing sales cadences',
          'Months of unproductive onboarding before a single sales meeting is delivered'
        ]
      },
      lumora: {
        timeToDeploy: 'Full Product Sync in 48h',
        cost: 'Zero Overhead or Management Drag',
        risk: '100% SOP & Tool Alignment',
        method: 'We adapt to YOUR company workflow—you never change for us',
        resolutions: [
          'Fast structured KT covering your products, target TAM, ICPs, and sales playbooks',
          'Seamless integration into your existing CRM (HubSpot, Salesforce, Zoho, etc.) and communication stack',
          'Operating under binding NDAs and enterprise confidentiality from day one'
        ]
      }
    }
  ];

  // 5-Step Process (Exact Titles from Pratibha Image: Share Your Requirements, Get Expert Assessment, Receive Manpower Options, Deploy Your Team, Get Ongoing Support)
  const steps = [
    {
      id: '01',
      num: '1',
      icon: FileText,
      title: 'Share Your Requirements',
      badge: 'Day 1 • Intake',
      turnaround: 'Scoping Within 24h',
      desc: 'Define your desired sales roles, target geographies, quota expectations, required experience level, and deployment timeline.'
    },
    {
      id: '02',
      num: '2',
      icon: Search,
      title: 'Get Expert Assessment',
      badge: 'Day 2 • Sourcing',
      turnaround: '48h Pipeline Mapping',
      desc: 'Our strategists evaluate your conversion funnels, mapping exact commercial competencies across our pre-vetted 1,000+ talent pool.'
    },
    {
      id: '03',
      num: '3',
      icon: Users,
      title: 'Receive Manpower Options',
      badge: 'Day 3 • Matching',
      turnaround: 'Curated Candidate Shortlist',
      desc: 'Interview and select professionals with verified B2B deal-closing track records, CRM proficiency, and industry domain experience.'
    },
    {
      id: '04',
      num: '4',
      icon: Handshake,
      title: 'Deploy Your Team',
      badge: 'Day 4 • Onboarding',
      turnaround: 'KT & Systems Orientation',
      desc: 'Rapid Knowledge Transfer (KT), systems integration, sales playbooks orientation, and active commercial campaign kickoff.'
    },
    {
      id: '05',
      num: '5',
      icon: Headphones,
      title: 'Get Ongoing Support',
      badge: 'Day 5 • Velocity',
      turnaround: '24/7 Standby SLAs',
      desc: 'Continuous quota tracking, regular QA check-ins, performance optimization, and guaranteed standby backup talent for zero interruptions.'
    }
  ];

  // Who Can Benefit
  // Who Can Benefit: 5 Strategic Deployment Archetypes (Alignd with Pratibha Docx Image)
  const beneficiaries = [
    {
      id: 'startups',
      num: '01',
      icon: Rocket,
      badge: 'Seed & Series A/B',
      title: 'Startups & Growing Businesses',
      subtitle: 'Rapid Go-To-Market Without Payroll Overhead',
      desc: 'Accelerate your go-to-market and booking pipeline rapidly without long-term recruitment liabilities, severance overhead, or equity dilution.',
      podConfig: '1x Senior BDM + 2x Outbound Reps',
      rampTime: '5 Business Days',
      impact: 'Accelerate GTM Velocity • Founder Calendar Filled with Demos',
      deliverables: [
        'Total Addressable Market (TAM) mapping and high-intent ICP list building',
        'Direct multi-touch outbound cadences booked straight into founder calendars',
        'Zero permanent severance liabilities—elastic scaling on demand'
      ]
    },
    {
      id: 'enterprises',
      num: '02',
      icon: Building2,
      badge: 'Mid-Market & Corporate',
      title: 'Enterprises & Corporates',
      subtitle: 'Elastic Multi-Tier Sales Pods Across Divisions',
      desc: 'Instantly scale multi-tier sales pods, regional acquisition units, and enterprise business development divisions with pre-cleared governance.',
      podConfig: 'Multi-Tier Pod: 1x Sales Lead + 4x Senior BDEs',
      rampTime: '5-7 Business Days',
      impact: 'Divisional Pipeline Expansion • Enterprise Security & NDAs',
      deliverables: [
        'Multi-stakeholder consultative closing for complex corporate procurement cycles',
        'Strict adherence to enterprise data security, GDPR, and binding confidentiality NDAs',
        'Seamless integration into enterprise CRM architectures (Salesforce, HubSpot, etc.)'
      ]
    },
    {
      id: 'b2b-b2c',
      num: '03',
      icon: Globe2,
      badge: 'High-Volume Marketplaces',
      title: 'B2B & B2C Companies',
      subtitle: 'High-Velocity Customer Acquisition Units',
      desc: 'Expand commercial touchpoints with dedicated outbound and inbound deal specialists who handle high-volume lead qualification, follow-ups, and conversions.',
      podConfig: 'High-Velocity Pod: 2x Account Execs + 3x SDRs',
      rampTime: '3-5 Business Days',
      impact: 'Higher Demo Show-Rates • Accelerated Sales Funnel Velocity',
      deliverables: [
        'Persistent multi-channel cadences across email, phone, and LinkedIn outreach',
        'Rapid qualification of inbound signups and outbound strategic prospecting',
        'Continuous pipeline hygiene and objection handling to minimize lead fallout'
      ]
    },
    {
      id: 'global',
      num: '04',
      icon: Target,
      badge: 'Cross-Border Expansion',
      title: 'Companies Expanding Globally',
      subtitle: 'Cross-Border Territory Penetration (US, EU, APAC)',
      desc: 'Enter new overseas territories confidently with English-proficient and multilingual reps who understand regional business etiquette, protocols, and timezones.',
      podConfig: 'International Pod: 2x Regional Market Specialists',
      rampTime: '5 Business Days',
      impact: 'US / UK / APAC Timezone Coverage • International Executive Poise',
      deliverables: [
        'Native-level English communication tested with international corporate leadership',
        'Nuanced comprehension of cross-border procurement and purchasing cycles',
        'Timezone-aligned outreach cadences for North America, EMEA, and APAC markets'
      ]
    },
    {
      id: 'continuity',
      num: '05',
      icon: Users,
      badge: 'Business Continuity',
      title: 'Organizations Facing Workforce Gaps',
      subtitle: 'Instant Vacancy Coverage & Zero Attrition Risk',
      desc: 'Plug immediate personnel vacancies, cover sudden rep turnover or seasonal spikes, and maintain uninterrupted revenue momentum without months of searching.',
      podConfig: 'Rapid Standby Pod: 1x to 3x Plug-and-Play Closers',
      rampTime: '24 - 48 Hours',
      impact: 'Zero Revenue Interruption • Built-In Standby Backup Talent',
      deliverables: [
        'Immediate deployment of pre-briefed talent to plug sales pipeline gaps',
        'Guaranteed continuity backup—pre-vetted replacements ready within 24 hours',
        'Preserves deal momentum so prospective buyers never experience radio silence'
      ]
    }
  ];

  // FAQs
  const faqs = [
    {
      q: 'What types of manpower can be outsourced through Lumora?',
      a: 'Lumora provides access to verified professionals across Business Development (BDE, BDM), Customer & Client Acquisition (Executives and Managers), Sales Management (Executives, Managers, Heads of Sales), and Marketing Management (Executives, Managers, Directors). You can hire individual resources or complete multi-tier sales pods.'
    },
    {
      q: 'How do you ensure manpower quality and relevance?',
      a: 'We evaluate candidates based on proven historical track records, role responsibilities, communication proficiency, and past experience with international clients. We align our talent selection specifically with your industry, target deal size, and sales cycle complexity.'
    },
    {
      q: 'Can we hire manpower for specific niche roles or vacancies?',
      a: 'Absolutely. You can request manpower for single positions, multiple vacancies, specialized project phases, or full-scale sales departments. Beyond our core 1,000+ sales and BD network, customized role requirements can also be discussed.'
    },
    {
      q: 'What is the engagement and commercial model?',
      a: 'We offer requirement-based, flexible outsourcing models depending on your required roles, team size, and duration (short-term sprint or long-term growth). On-site and remote/off-site deployment terms are agreed upon transparently before engagement.'
    },
    {
      q: 'Do you provide backup support if a team member is unavailable?',
      a: 'Yes. Business continuity is one of our defining pillars. We maintain standby talent within our network to provide seamless replacement options whenever unexpected workforce gaps or transitions occur.'
    },
    {
      q: 'Why did Lumora start Manpower Outsourcing?',
      a: 'We originally started as a technology and digital marketing provider. As we scaled across diverse B2B industries, we noticed that many companies already had good products and internal systems, but desperately lacked the dedicated, high-caliber sales manpower to execute outreach and close deals. We recognized that our existing network of 1,000+ vetted sales profiles could solve this critical gap directly for our partners.'
    },
    {
      q: 'Why do you communicate 99% accuracy rather than promising 100%?',
      a: 'We believe in transparency and real-world honesty. Because manpower involves people, distinct company cultures, evolving expectations, and varied working styles, there is always a natural adjustment window. Acknowledging a 1% space for flexibility ensures realistic onboarding, mutual accountability, and honest partnership rather than empty promises.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111827] font-['Inter',sans-serif] selection:bg-[#5B8EE2] selection:text-white">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (PREMIUM LUMORA DESIGN SYSTEM)
          ========================================================================= */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-18 lg:pb-24 bg-white border-b border-[#E5E7EB]">
        {/* Lumora's Signature Ambient Radiance Orbs */}
        <div className="absolute top-0 right-1/4 w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-[#8CB4F5]/15 via-[#D6A67B]/15 to-transparent blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 left-6 w-[550px] h-[550px] rounded-full bg-[#729EE6]/10 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12 sm:space-y-16">
          
          {/* TOP SPLIT ROW: Content + Visual Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 text-[#D6A67B] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-purple-200 bg-purple-50/80 backdrop-blur-md shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
                <Sparkles className="w-3.5 h-3.5 text-[#D6A67B]" />
                <span>LUMORA’S ENTERPRISE WORKFORCE SOLUTIONS</span>
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-slate-950 leading-[1.14] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                <span className="hidden sm:inline text-slate-300">•</span>
                  Manpower Outsourcing <br />
                  <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
                    Partner
                  </span>
                </h1>
              </div>

              {/* Subheadline */}
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
                Build Your Sales Team. Expand Your Business. Keep Growing.{' '}
                <span className="font-semibold text-slate-900">
                  Access 1,000+ verified professionals trained to accelerate customer acquisition and predictable deal closing.
                </span>
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                <button
                  onClick={() => openConsultationModal('Manpower Outsourcing: Hero Primary')}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-sm font-extrabold flex items-center justify-center gap-2.5 shadow-xl shadow-blue-500/20 transition-all hover:scale-105 font-['Plus_Jakarta_Sans',sans-serif] cursor-pointer"
                >
                  <span>Request Manpower</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <button
                  onClick={() => openConsultationModal('Manpower Outsourcing: Hero Talk')}
                  className="px-8 py-4 rounded-full border-2 border-[#5B8EE2] bg-white hover:bg-[#5B8EE2] text-[#5B8EE2] hover:text-white text-sm font-extrabold flex items-center justify-center gap-2.5 transition-all group font-['Plus_Jakarta_Sans',sans-serif] shadow-xs cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#5B8EE2] group-hover:text-white transition-colors" />
                  <span className="group-hover:text-white transition-colors">Talk to Our Team</span>
                </button>
              </div>

              {/* Social Proof & Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5B8EE2]" />
                  <span>1,000+ Verified Talent</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D6A67B]" />
                  <span>99% Deployment Match</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#EC4899]" />
                  <span>Rapid 5-Day Launch</span>
                </div>
              </div>

            </div>

            {/* Right Visual Showcase (Seamless Feathered Executive Team Graphic) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[500px]">
                
                {/* Atmospheric Glow Aura behind the graphic */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#8CB4F5]/25 via-[#D6A67B]/20 to-[#EC4899]/20 blur-3xl pointer-events-none" />
                
                {/* Floating Glassmorphic Pill: Top Left */}
                <div className="absolute -top-3 -left-3 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-blue-50 text-[#5B8EE2] flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">TALENT POOL</div>
                    <div className="text-xs font-extrabold text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">1,000+ Profiles</div>
                  </div>
                </div>

                {/* Floating Glassmorphic Pill: Bottom Right */}
                <div className="absolute -bottom-3 -right-3 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">DEPLOYMENT</div>
                    <div className="text-xs font-extrabold text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">4.2x Faster Velocity</div>
                  </div>
                </div>

                {/* Graphic Image Canvas with 4-side feathering and mix-blend */}
                <div className="relative z-10 overflow-hidden rounded-3xl p-1 bg-gradient-to-b from-white/60 to-transparent">
                  <img
                    src="/images/manpower_hero_team_feathered_all.png"
                    alt="Lumora Sales & Customer Acquisition Manpower Outsourcing Team"
                    className="w-full h-auto object-contain select-none"
                  />
                </div>

              </div>
            </div>

          </div>

          {/* =================================================================
          {/* =================================================================
              MIDDLE CARD: WHO WE ARE & WHAT WE OUTSOURCE (PREMIUM BENTO DESIGN)
              ================================================================= */}
          <div className="relative rounded-[32px] p-7 sm:p-9 lg:p-12 bg-white border border-slate-200/90 shadow-xl shadow-slate-200/40 overflow-hidden">
            {/* Top Hairline Brand Accent Gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5B8EE2]/60 to-transparent" />
            
            {/* Soft Ambient Radiance Orbs */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br from-[#8CB4F5]/15 via-[#D6A67B]/10 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-blue-100/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              
              {/* Left Column: Who We Are (Lumora Authority) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide bg-blue-50 text-[#5B8EE2] border border-blue-200/80 font-['Plus_Jakarta_Sans',sans-serif]">
                    <span className="w-2 h-2 rounded-full bg-[#5B8EE2] animate-pulse" />
                    <span>WHO WE ARE</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-950 leading-[1.18] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                <span className="hidden sm:inline text-slate-300">•</span>
                    <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
                      Sales Growth
                    </span>
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    Lumora operates under <strong>Cypher Swift InfoTech Pvt. Ltd.</strong> Alongside our core marketing powerhouse, we provide end-to-end B2B Sales &amp; Customer Acquisition manpower so companies scale rapidly without permanent hiring liabilities.
                  </p>
                </div>

                {/* Key Bullet Feature Chips */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100/80 text-xs font-semibold text-slate-800 shadow-2xs hover:bg-slate-100/80 transition-colors">
                    <div className="w-6 h-6 rounded-lg bg-blue-100/80 text-[#5B8EE2] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Trained &amp; Eligible B2B Deal Closers</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100/80 text-xs font-semibold text-slate-800 shadow-2xs hover:bg-slate-100/80 transition-colors">
                    <div className="w-6 h-6 rounded-lg bg-amber-100/80 text-[#D6A67B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Dedicated On-Site &amp; Remote Pods</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100/80 text-xs font-semibold text-slate-800 shadow-2xs hover:bg-slate-100/80 transition-colors">
                    <div className="w-6 h-6 rounded-lg bg-pink-100/80 text-[#EC4899] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Guaranteed Standby Backup Continuity</span>
                  </div>
                </div>
              </div>

              {/* Clean Vertical Divider */}
              <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent self-stretch my-2" />

              {/* Right Column: What We Outsource (2x2 Balanced Bento Grid) */}
              <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-between space-y-5">
                
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide bg-amber-50 text-[#D6A67B] border border-amber-200/80 font-['Plus_Jakarta_Sans',sans-serif]">
                    <span className="w-2 h-2 rounded-full bg-[#D6A67B]" />
                    <span>WHAT WE OUTSOURCE</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight font-['Plus_Jakarta_Sans',sans-serif] mt-2">
                    Our Sales &amp; Customer Acquisition Solutions
                  </h3>
                </div>

                {/* 4 Bento Role Cards in a Balanced 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Card 1: Business Development */}
                  <div 
                    onClick={() => {
                      const el = document.getElementById('role-profiles-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-4 sm:p-5 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200/80 hover:border-[#5B8EE2] shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/25 shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Handshake className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#5B8EE2] transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                            Business Development
                          </h4>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#5B8EE2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                          Pipeline prospecting, mapping &amp; enterprise pitching
                        </p>
                      </div>
                    </div>
                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[10px]">
                      <span className="font-bold text-slate-400">Deployable:</span>
                      <span className="font-extrabold text-[#5B8EE2] bg-blue-50 px-2 py-0.5 rounded-md">BDE &amp; BDM</span>
                    </div>
                  </div>

                  {/* Card 2: Customer & Client Acquisition */}
                  <div 
                    onClick={() => {
                      const el = document.getElementById('role-profiles-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-4 sm:p-5 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200/80 hover:border-[#5B8EE2] shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/25 shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#5B8EE2] transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                            Client Acquisition
                          </h4>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#5B8EE2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                          Consultative closing &amp; enterprise customer conversion
                        </p>
                      </div>
                    </div>
                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[10px]">
                      <span className="font-bold text-slate-400">Deployable:</span>
                      <span className="font-extrabold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md">Exec &amp; Manager</span>
                    </div>
                  </div>

                  {/* Card 3: Sales Management */}
                  <div 
                    onClick={() => {
                      const el = document.getElementById('role-profiles-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-4 sm:p-5 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200/80 hover:border-[#5B8EE2] shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-md shadow-pink-500/25 shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#5B8EE2] transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                            Sales Management
                          </h4>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#5B8EE2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                          Quota acceleration, revenue tracking &amp; sales leads
                        </p>
                      </div>
                    </div>
                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[10px]">
                      <span className="font-bold text-slate-400">Deployable:</span>
                      <span className="font-extrabold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-md">Sales Head &amp; Exec</span>
                    </div>
                  </div>

                  {/* Card 4: Marketing Management */}
                  <div 
                    onClick={() => {
                      const el = document.getElementById('role-profiles-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-4 sm:p-5 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200/80 hover:border-[#5B8EE2] shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/25 shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Megaphone className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#5B8EE2] transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                            Marketing Leadership
                          </h4>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#5B8EE2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                          Demand generation, omni-channel campaigns &amp; funnels
                        </p>
                      </div>
                    </div>
                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[10px]">
                      <span className="font-bold text-slate-400">Deployable:</span>
                      <span className="font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">Director &amp; Head</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

                    {/* =================================================================
              BOTTOM STRIP: 1,000+ ELIGIBLE MANPOWER PROFILES (EXECUTIVE SHOWCASE)
              ================================================================= */}
          <div className="relative overflow-hidden rounded-[32px] p-7 sm:p-9 lg:p-11 bg-gradient-to-br from-white via-blue-50/40 to-purple-50/20 border border-blue-200/90 shadow-xl shadow-blue-500/5">
            {/* Top Hairline Brand Accent Gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5B8EE2]/60 to-transparent" />
            
            {/* Ambient Radiance Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#8CB4F5]/20 via-[#D6A67B]/10 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />

            {/* Crisp Vector SVG World Dot-Matrix Watermark (100% Clean, No Ghost Text) */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none hidden lg:block">
              <svg width="320" height="130" viewBox="0 0 320 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="#5B8EE2">
                  {/* Americas */}
                  <circle cx="20" cy="30" r="1.5"/><circle cx="30" cy="30" r="1.5"/><circle cx="40" cy="30" r="1.5"/><circle cx="50" cy="30" r="1.5"/>
                  <circle cx="25" cy="42" r="1.5"/><circle cx="35" cy="42" r="1.5"/><circle cx="45" cy="42" r="1.5"/><circle cx="55" cy="42" r="1.5"/><circle cx="65" cy="42" r="1.5"/>
                  <circle cx="30" cy="54" r="1.5"/><circle cx="40" cy="54" r="1.5"/><circle cx="50" cy="54" r="1.5"/><circle cx="60" cy="54" r="1.5"/><circle cx="70" cy="54" r="1.5"/>
                  <circle cx="45" cy="66" r="1.5"/><circle cx="55" cy="66" r="1.5"/><circle cx="65" cy="66" r="1.5"/>
                  <circle cx="50" cy="78" r="1.5"/><circle cx="60" cy="78" r="1.5"/><circle cx="70" cy="78" r="1.5"/>
                  <circle cx="55" cy="90" r="1.5"/><circle cx="65" cy="90" r="1.5"/>
                  <circle cx="60" cy="102" r="1.5"/>

                  {/* Europe & Africa */}
                  <circle cx="140" cy="25" r="1.5"/><circle cx="150" cy="25" r="1.5"/><circle cx="160" cy="25" r="1.5"/>
                  <circle cx="135" cy="37" r="1.5"/><circle cx="145" cy="37" r="1.5"/><circle cx="155" cy="37" r="1.5"/><circle cx="165" cy="37" r="1.5"/>
                  <circle cx="140" cy="49" r="1.5"/><circle cx="150" cy="49" r="1.5"/><circle cx="160" cy="49" r="1.5"/><circle cx="170" cy="49" r="1.5"/>
                  <circle cx="145" cy="61" r="1.5"/><circle cx="155" cy="61" r="1.5"/><circle cx="165" cy="61" r="1.5"/><circle cx="175" cy="61" r="1.5"/>
                  <circle cx="150" cy="73" r="1.5"/><circle cx="160" cy="73" r="1.5"/><circle cx="170" cy="73" r="1.5"/>
                  <circle cx="155" cy="85" r="1.5"/><circle cx="165" cy="85" r="1.5"/><circle cx="175" cy="85" r="1.5"/>
                  <circle cx="160" cy="97" r="1.5"/><circle cx="170" cy="97" r="1.5"/>
                  <circle cx="165" cy="109" r="1.5"/>

                  {/* Asia & APAC */}
                  <circle cx="200" cy="22" r="1.5"/><circle cx="210" cy="22" r="1.5"/><circle cx="220" cy="22" r="1.5"/><circle cx="230" cy="22" r="1.5"/><circle cx="240" cy="22" r="1.5"/>
                  <circle cx="195" cy="34" r="1.5"/><circle cx="205" cy="34" r="1.5"/><circle cx="215" cy="34" r="1.5"/><circle cx="225" cy="34" r="1.5"/><circle cx="235" cy="34" r="1.5"/><circle cx="245" cy="34" r="1.5"/><circle cx="255" cy="34" r="1.5"/>
                  <circle cx="200" cy="46" r="1.5"/><circle cx="210" cy="46" r="1.5"/><circle cx="220" cy="46" r="1.5"/><circle cx="230" cy="46" r="1.5"/><circle cx="240" cy="46" r="1.5"/><circle cx="250" cy="46" r="1.5"/><circle cx="260" cy="46" r="1.5"/>
                  <circle cx="210" cy="58" r="1.5"/><circle cx="220" cy="58" r="1.5"/><circle cx="230" cy="58" r="1.5"/><circle cx="240" cy="58" r="1.5"/><circle cx="250" cy="58" r="1.5"/>
                  <circle cx="220" cy="70" r="1.5"/><circle cx="230" cy="70" r="1.5"/><circle cx="240" cy="70" r="1.5"/>
                  <circle cx="260" cy="88" r="1.5"/><circle cx="270" cy="88" r="1.5"/><circle cx="280" cy="88" r="1.5"/>
                  <circle cx="255" cy="100" r="1.5"/><circle cx="265" cy="100" r="1.5"/><circle cx="275" cy="100" r="1.5"/><circle cx="285" cy="100" r="1.5"/>
                  <circle cx="260" cy="112" r="1.5"/><circle cx="270" cy="112" r="1.5"/>
                </g>
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Part 1: Metric & Icon */}
              <div className="lg:col-span-4 flex items-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-[#5B8EE2] to-[#4676C2] text-white flex items-center justify-center shadow-lg shadow-blue-500/25 shrink-0">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-none">
                    1,000+
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-2 font-['Plus_Jakarta_Sans',sans-serif]">
                    Eligible &amp; Vetted Manpower Profiles
                  </div>
                </div>
              </div>

              {/* Part 2: Middle Description */}
              <div className="lg:col-span-5 lg:border-l lg:border-slate-200/90 lg:pl-8 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                  Access a curated, battle-tested talent bench of experienced sales executives, account managers, and marketing specialists ready for deployment.
                </p>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5 text-[#5B8EE2]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Interview Cleared</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Instant KT Ready</span>
                  </span>
                </div>
              </div>

              {/* Part 3: Trust Badges */}
              <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-center">
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#5B8EE2] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#5B8EE2]" />
                  </div>
                  <div className="text-xs">
                    <div className="font-extrabold text-slate-900">99% Secure Match</div>
                    <div className="text-[10px] text-slate-500">1% Space for Flexibility</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow">
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-xs">
                    <div className="font-extrabold text-slate-900">Standby Backup</div>
                    <div className="text-[10px] text-slate-500">Zero Interruption Guarantee</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

            {/* =========================================================================
          SECTION 2: DETAILED ROLE PROFILES & RESPONSIBILITIES (ULTRA-SMOOTH FRAMER MOTION SHOWCASE)
          ========================================================================= */}
      <section 
        id="role-profiles-section" 
        ref={roleSectionRef}
        className="relative bg-[#F8FAFC] border-b border-[#E5E7EB] min-h-[300vh]"
      >
        {/* Soft Ambient Radiance Orbs */}
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full bg-blue-100/35 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] rounded-full bg-pink-100/25 blur-[140px] pointer-events-none" />

        {/* Sticky Stage Container: Optimized height so full card fits comfortably without cutting off on laptop screens */}
        <div className="sticky top-14 lg:top-16 min-h-[calc(100vh-3.5rem)] max-h-[820px] flex flex-col justify-between py-4 sm:py-5 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-4 sm:space-y-5">
            
            {/* 1. Header with Compact Brand Gradient Accent */}
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#5B8EE2] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/80 shadow-2xs font-['Plus_Jakarta_Sans',sans-serif]">
                <Sparkles className="w-3.5 h-3.5 text-[#D6A67B]" />
                <span>COMPREHENSIVE SPECIALIZATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
                Detailed Role Profiles &amp;{' '}
                <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
                  Deployment Scope
                </span>
              </h2>
              <p className="text-xs text-slate-500 max-w-xl mx-auto font-normal hidden sm:block">
                Scroll down to witness each profile glide smoothly from alternating sides with verified deliverables.
              </p>
            </div>

            {/* 2. Interactive Role Switcher Pills with Framer Motion Sliding Indicator */}
            <div className="max-w-4xl mx-auto w-full space-y-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 bg-white/90 p-1.5 rounded-2xl border border-slate-200/90 shadow-sm backdrop-blur-md relative">
                {roles.map((r, idx) => {
                  const isActive = activeRoleIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => selectRole(idx)}
                      className="relative px-3 py-2 rounded-xl text-xs font-bold font-['Plus_Jakarta_Sans',sans-serif] transition-colors flex items-center justify-center gap-2 cursor-pointer text-center z-10"
                    >
                      {/* Smooth Gliding Active Pill via layoutId */}
                      {isActive && (
                        <motion.div
                          layoutId="activeRoleTabPill"
                          className="absolute inset-0 bg-gradient-to-r from-[#5B8EE2] via-[#4676C2] to-[#818CF8] rounded-xl shadow-md shadow-blue-500/25 -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      
                      <span className={`text-[10px] font-black px-1.5 py-0.5 rounded transition-colors ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {r.num}
                      </span>
                      <span className={`transition-colors whitespace-nowrap text-xs ${
                        isActive ? 'text-white font-extrabold' : 'text-slate-600 hover:text-slate-900'
                      }`}>
                        {r.tabLabel || r.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Animated Scroll Progress Bar */}
              <div className="w-full h-1 bg-slate-200/70 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899]"
                  initial={false}
                  animate={{ width: `${((activeRoleIndex + 1) / 4) * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                />
              </div>
            </div>

            {/* 3. The Ultra-Smooth Animated Stage with AnimatePresence */}
            <div className="relative w-full min-h-[380px] sm:min-h-[410px]">
              <AnimatePresence mode="wait" initial={false}>
                {(() => {
                  const currentRole = roles[activeRoleIndex];
                  const Icon = currentRole.icon;
                  const isEven = activeRoleIndex % 2 === 1; // 01 is odd (0), 02 is even (1), etc.

                  // Directional offset: alternate opposite sides
                  const enterX = isEven ? 70 : -70;
                  const exitX = isEven ? -70 : 70;

                  // Panel 1: Role Overview & Available Titles (Properly fitted padding)
                  const RoleOverviewCard = (
                    <div className={`p-5 sm:p-6 lg:p-7 rounded-[28px] bg-white border border-slate-200/90 shadow-xl relative overflow-hidden flex flex-col justify-between h-full ${currentRole.cardTheme}`}>
                      {/* Watermark in corner */}
                      <span className="absolute -top-3 right-3 text-7xl sm:text-8xl font-black text-slate-100/90 pointer-events-none select-none font-['Plus_Jakarta_Sans',sans-serif]">
                        {currentRole.num}
                      </span>

                      <div className="space-y-4 relative z-10">
                        {/* Badge row */}
                        <div className="flex items-center justify-between">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${currentRole.iconGradient} shadow-md`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border shadow-2xs font-['Plus_Jakarta_Sans',sans-serif] ${currentRole.badgeColor}`}>
                            {currentRole.badge}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <div>
                          <div className="text-[10px] font-black tracking-widest uppercase text-[#5B8EE2] mb-0.5">
                            TALENT PROFILE #{currentRole.num}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
                            {currentRole.title}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed mt-1.5 font-normal">
                            {currentRole.desc}
                          </p>
                        </div>

                        {/* Verified Titles Capsules */}
                        <div className="space-y-1.5 pt-1">
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif]">
                            <Briefcase className="w-3.5 h-3.5 text-[#5B8EE2]" />
                            <span>Available Verified Titles:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {currentRole.profiles.map((p, pIdx) => (
                              <div 
                                key={pIdx}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50/90 hover:bg-slate-100/90 border border-slate-200 text-slate-800 text-xs font-bold shadow-2xs transition-all"
                              >
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span>{p.title}</span>
                                <span className="text-[10px] font-extrabold text-[#5B8EE2] bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                                  {p.level}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Speed indicator */}
                      <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
                          <Clock className="w-3.5 h-3.5 text-[#EC4899]" />
                          <span>{currentRole.speed}</span>
                        </span>
                        <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          ● Pre-Vetted &amp; Ready
                        </span>
                      </div>
                    </div>
                  );

                  // Panel 2: Deliverables Grid Bento & Action
                  const DeliverablesBentoCard = (
                    <div className="p-5 sm:p-6 lg:p-7 rounded-[28px] bg-white border border-slate-200/90 shadow-xl flex flex-col justify-between space-y-4 h-full">
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif]">
                            <Award className="w-4 h-4 text-[#D6A67B]" />
                            <span>Core Execution Deliverables:</span>
                          </div>
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#5B8EE2] bg-blue-50 px-2 py-0.5 rounded-md">
                            Enterprise KPIs
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {currentRole.points.map((pt, ptIdx) => (
                            <div 
                              key={ptIdx}
                              className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-blue-200 hover:bg-blue-50/20 shadow-2xs transition-all flex items-start gap-2.5"
                            >
                              <div className="w-5 h-5 rounded-md bg-blue-100/70 text-[#5B8EE2] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-xs font-bold text-slate-900 leading-tight">
                                  {pt.label}
                                </div>
                                <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                                  {pt.detail}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action */}
                      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <div className="text-xs text-slate-500 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#5B8EE2]" />
                          <span className="font-semibold text-slate-700">99% Secure Deployment Match</span>
                        </div>
                        <button
                          onClick={() => openConsultationModal(`Role Scope: ${currentRole.title}`)}
                          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-xs font-extrabold inline-flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-all hover:scale-105 font-['Plus_Jakarta_Sans',sans-serif] cursor-pointer"
                        >
                          <span>Request Manpower</span>
                          <ArrowRight className="w-3.5 h-3.5 text-white" />
                        </button>
                      </div>
                    </div>
                  );

                  return (
                    <motion.div 
                      key={activeRoleIndex}
                      initial={{ 
                        opacity: 0, 
                        x: enterX, 
                        scale: 0.98,
                        filter: "blur(4px)" 
                      }}
                      animate={{ 
                        opacity: 1, 
                        x: 0, 
                        scale: 1,
                        filter: "blur(0px)",
                        transition: { 
                          duration: 0.45, 
                          ease: [0.16, 1, 0.3, 1] 
                        } 
                      }}
                      exit={{ 
                        opacity: 0, 
                        x: exitX, 
                        scale: 0.98,
                        filter: "blur(4px)",
                        transition: { 
                          duration: 0.28, 
                          ease: [0.16, 1, 0.3, 1] 
                        } 
                      }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch w-full"
                    >
                      {/* When Even (Roles 02 and 04): Swapped layout from opposite side! */}
                      {isEven ? (
                        <>
                          <div className="lg:col-span-7 flex flex-col">{DeliverablesBentoCard}</div>
                          <div className="lg:col-span-5 flex flex-col">{RoleOverviewCard}</div>
                        </>
                      ) : (
                        <>
                          <div className="lg:col-span-5 flex flex-col">{RoleOverviewCard}</div>
                          <div className="lg:col-span-7 flex flex-col">{DeliverablesBentoCard}</div>
                        </>
                      )}
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

            {/* 4. Controls & Navigation Bar */}
            <div className="flex items-center justify-between border-t border-slate-200/80 pt-3">
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <span className="text-[#5B8EE2] font-black">ROLE 0{activeRoleIndex + 1} OF 04</span>
                <span className="hidden sm:inline text-slate-300">{'•'}</span>
                <span className="hidden sm:inline text-slate-600">{roles[activeRoleIndex].title}</span>
              </div>

              {/* Manual Prev/Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => selectRole(activeRoleIndex - 1)}
                  disabled={activeRoleIndex === 0}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 hover:border-[#5B8EE2] hover:text-[#5B8EE2] text-xs font-bold text-slate-600 transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-30 disabled:pointer-events-none shadow-2xs bg-white"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>
                <button
                  onClick={() => selectRole(activeRoleIndex + 1)}
                  disabled={activeRoleIndex === 3}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 hover:border-[#5B8EE2] hover:text-[#5B8EE2] text-xs font-bold text-slate-600 transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-30 disabled:pointer-events-none shadow-2xs bg-white"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 5. Luxury Trust Callout Dock at End of Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-6 relative z-20">
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md shadow-slate-200/40 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#5B8EE2] flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-950 font-['Plus_Jakarta_Sans',sans-serif]">99% Secure Deployment</div>
                <div className="text-[11px] text-slate-500">1% space for natural onboarding adjustments</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-[#D6A67B] flex items-center justify-center shrink-0 shadow-2xs">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-950 font-['Plus_Jakarta_Sans',sans-serif]">Trained &amp; Eligible Bench</div>
                <div className="text-[11px] text-slate-500">Tested with international executive protocols</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-2xl bg-pink-50 text-[#EC4899] flex items-center justify-center shrink-0 shadow-2xs">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-950 font-['Plus_Jakarta_Sans',sans-serif]">Standby Continuity</div>
                <div className="text-[11px] text-slate-500">Guaranteed backup talent on instant standby</div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 3: WHY CHOOSE LUMORA (INTERACTIVE CONNECTED PROCESS DESIGN)
          ========================================================================= */}
      <section id="why-partner-section" className="py-20 lg:py-28 bg-white border-b border-[#E5E7EB] relative overflow-hidden">
        {/* Soft Ambient Radiance */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#8CB4F5] rounded-full mix-blend-screen filter blur-[150px] opacity-15 pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#EC4899] rounded-full mix-blend-screen filter blur-[150px] opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div>
              <span className="inline-flex items-center gap-2 text-[#5B8EE2] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-[#F2F6FC]/80 shadow-xs backdrop-blur-md font-['Plus_Jakarta_Sans',sans-serif]">
                <Sparkles className="w-3.5 h-3.5 text-[#5B8EE2] animate-spin-slow" />
                <span>THE LUMORA ADVANTAGE</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
              Why Choose Lumora ––{' '}
              <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
                Why Partner With Us?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              We combine enterprise-grade workforce reliability with the execution power of a proven digital marketing and technology powerhouse. Click any pillar to explore full details.
            </p>
          </div>

          {/* Interactive Connected Cards Flow (Exact Pattern from Reference) */}
          <div className="space-y-8 relative">
            
            {/* ROW 1: Pillars 1 to 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-between w-full relative">
              {pillars.slice(0, 4).map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = selectedPillar === idx;
                return (
                  <div 
                    key={idx}
                    onClick={() => setSelectedPillar(idx)}
                    className={`relative p-7 sm:p-8 rounded-3xl bg-white backdrop-blur-lg border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-40 group cursor-pointer flex flex-col items-center justify-center text-center
                    ${isSelected 
                      ? 'ring-4 ring-[#5B8EE2]/30 border-[#5B8EE2] shadow-xl scale-105 z-30 bg-blue-50/20' 
                      : 'border-slate-200 shadow-sm hover:border-slate-300'
                    }`}
                  >
                    {/* Glowing Number Badge on Top Right */}
                    <div className={`absolute -top-3.5 -right-3.5 w-11 h-11 rounded-full bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white font-black text-sm shadow-md group-hover:rotate-12 transition-transform duration-300 z-20`}>
                      {pillar.id}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-blue-50 text-[#5B8EE2] flex items-center justify-center transition-all duration-300 shadow-2xs mb-3 group-hover:scale-110">
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#5B8EE2] transition-colors font-['Plus_Jakarta_Sans',sans-serif] leading-snug">
                      {pillar.title}
                    </h3>

                    {/* Mini Badge */}
                    <span className="mt-2 text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {pillar.badge}
                    </span>

                    {/* Desktop Connector Dashed Line */}
                    {idx < 3 && (
                      <div className="hidden lg:block absolute top-1/2 right-[-2rem] w-8 border-t-2 border-dashed border-slate-300 z-0 pointer-events-none" />
                    )}

                    {/* Active Selected Downward Indicator */}
                    {isSelected && (
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#5B8EE2] text-white flex items-center justify-center shadow-md z-30">
                        <div className="w-2 h-2 border-b-2 border-r-2 border-white transform rotate-45 -mt-0.5" />
                      </div>
                    )}

                    {/* Hover Popover Tooltip (Matches Reference Design) */}
                    <div className="absolute bottom-[92%] left-1/2 -translate-x-1/2 w-[280px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2 transition-all duration-300 z-50 pointer-events-none">
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-slate-100 transform rotate-45 shadow-[2px_2px_4px_rgba(0,0,0,0.02)]" />
                      <h4 className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-[#5B8EE2] to-[#EC4899] uppercase tracking-wider mb-2 text-center leading-tight">
                        {pillar.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed font-medium text-center">
                        {pillar.shortDesc}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* ROW 2: Pillars 5 to 7 (Centered 3-Column Layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center max-w-5xl mx-auto relative pt-2">
              {pillars.slice(4, 7).map((pillar, relIdx) => {
                const idx = relIdx + 4;
                const Icon = pillar.icon;
                const isSelected = selectedPillar === idx;
                return (
                  <div 
                    key={idx}
                    onClick={() => setSelectedPillar(idx)}
                    className={`relative p-7 sm:p-8 rounded-3xl bg-white backdrop-blur-lg border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-40 group cursor-pointer flex flex-col items-center justify-center text-center
                    ${isSelected 
                      ? 'ring-4 ring-[#5B8EE2]/30 border-[#5B8EE2] shadow-xl scale-105 z-30 bg-blue-50/20' 
                      : 'border-slate-200 shadow-sm hover:border-slate-300'
                    }`}
                  >
                    {/* Glowing Number Badge on Top Right */}
                    <div className={`absolute -top-3.5 -right-3.5 w-11 h-11 rounded-full bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white font-black text-sm shadow-md group-hover:rotate-12 transition-transform duration-300 z-20`}>
                      {pillar.id}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-blue-50 text-[#5B8EE2] flex items-center justify-center transition-all duration-300 shadow-2xs mb-3 group-hover:scale-110">
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#5B8EE2] transition-colors font-['Plus_Jakarta_Sans',sans-serif] leading-snug">
                      {pillar.title}
                    </h3>

                    {/* Mini Badge */}
                    <span className="mt-2 text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {pillar.badge}
                    </span>

                    {/* Desktop Connector Dashed Line */}
                    {relIdx < 2 && (
                      <div className="hidden lg:block absolute top-1/2 right-[-2rem] w-8 border-t-2 border-dashed border-slate-300 z-0 pointer-events-none" />
                    )}

                    {/* Active Selected Downward Indicator */}
                    {isSelected && (
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#5B8EE2] text-white flex items-center justify-center shadow-md z-30">
                        <div className="w-2 h-2 border-b-2 border-r-2 border-white transform rotate-45 -mt-0.5" />
                      </div>
                    )}

                    {/* Hover Popover Tooltip */}
                    <div className="absolute bottom-[92%] left-1/2 -translate-x-1/2 w-[280px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2 transition-all duration-300 z-50 pointer-events-none">
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-slate-100 transform rotate-45 shadow-[2px_2px_4px_rgba(0,0,0,0.02)]" />
                      <h4 className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-[#5B8EE2] to-[#EC4899] uppercase tracking-wider mb-2 text-center leading-tight">
                        {pillar.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed font-medium text-center">
                        {pillar.shortDesc}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* =================================================================
              ACTIVE PILLAR DETAILED EXPLANATION SHOWCASE ("THEN AFTER IT")
              ================================================================= */}
          <div className="relative rounded-[32px] p-8 sm:p-10 lg:p-12 bg-white border border-slate-200/90 shadow-2xl shadow-slate-200/50 mt-16 overflow-hidden">
            {/* Top Hairline Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899]" />
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#8CB4F5]/15 via-[#D6A67B]/10 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              
              {/* Top Bar with Pillar Index & Step Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B8EE2] to-[#4676C2] text-white flex items-center justify-center font-black text-sm shadow-md">
                    {pillars[selectedPillar].id}
                  </span>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#5B8EE2]">
                      PILLAR EXPLANATION • 0{selectedPillar + 1} OF 07
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
                      {pillars[selectedPillar].title}
                    </h3>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPillar((selectedPillar - 1 + pillars.length) % pillars.length)}
                    className="px-4 py-2 rounded-xl border border-slate-200 hover:border-[#5B8EE2] hover:text-[#5B8EE2] text-xs font-bold text-slate-600 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous Pillar</span>
                  </button>
                  <button
                    onClick={() => setSelectedPillar((selectedPillar + 1) % pillars.length)}
                    className="px-4 py-2 rounded-xl border border-slate-200 hover:border-[#5B8EE2] hover:text-[#5B8EE2] text-xs font-bold text-slate-600 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Next Pillar</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Interior Split: Full Story + Key Guarantees */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left 60%: Full Narrative Explanation */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#5B8EE2] border border-blue-200/70">
                    <span>{pillars[selectedPillar].badge}</span>
                  </div>
                  
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
                    How This Delivers Measurable Commercial Impact
                  </h4>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {pillars[selectedPillar].fullDesc}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => openConsultationModal(`Pillar Inquiry: ${pillars[selectedPillar].title}`)}
                      className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-xs font-extrabold inline-flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:scale-105 font-['Plus_Jakarta_Sans',sans-serif] cursor-pointer"
                    >
                      <span>Inquire About This Pillar</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Right 40%: Key Operational Proof Points */}
                <div className="lg:col-span-5 bg-slate-50/80 p-6 sm:p-7 rounded-2xl border border-slate-200/80 space-y-4">
                  <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#5B8EE2]" />
                    <span>Operational Safeguards &amp; Guarantees:</span>
                  </div>

                  <div className="space-y-3">
                    {pillars[selectedPillar].guarantees.map((g, gIdx) => (
                      <div key={gIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                        <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                          {g}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500 font-medium flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-[#D6A67B]" />
                    <span>Backed by Lumora &amp; Cypher Swift InfoTech SLAs</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: 4 CHALLENGES VS LUMORA SOLUTIONS (SENIOR SAAS BENCHMARK ENGINE)
          ========================================================================= */}
            {/* =========================================================================
          SECTION 4: 4 CHALLENGES VS LUMORA SOLUTIONS (ELITE OUTGROWTH SAAS BENCHMARK)
          ========================================================================= */}
      <section id="challenges-solutions-section" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E5E7EB] relative overflow-hidden">
        {/* Soft Ambient Radiance Orbs */}
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full bg-blue-100/35 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] rounded-full bg-pink-100/25 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#5B8EE2] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200/80 shadow-2xs font-['Plus_Jakarta_Sans',sans-serif]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5B8EE2]" />
              <span>COMMERCIAL BENCHMARK &amp; RISK MITIGATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Real-World Manpower Challenges &amp;{' '}
              <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
                How Lumora Solves Them
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Traditional recruitment is slow, expensive, and riddled with attrition. Select a commercial bottleneck below to compare the traditional agency model directly against Lumora&apos;s managed sales pods.
            </p>

            {/* 4 Interactive Dimension Pills with Active Motion Pill */}
            <div className="pt-3 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white/90 p-1.5 rounded-2xl border border-slate-200/90 shadow-sm backdrop-blur-md relative">
                {challenges.map((c, idx) => {
                  const isActive = selectedChallengeIndex === idx;
                  const CIcon = c.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedChallengeIndex(idx)}
                      className={`relative px-3.5 py-2.5 rounded-xl text-xs font-bold font-['Plus_Jakarta_Sans',sans-serif] transition-colors flex items-center justify-center gap-2 cursor-pointer text-center z-10 ${
                        isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeChallengePill"
                          className="absolute inset-0 bg-slate-950 rounded-xl shadow-md -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {idx + 1}
                      </span>
                      <CIcon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#5B8EE2]' : 'text-slate-400'}`} />
                      <span className="whitespace-nowrap text-xs">
                        {c.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Master Animated Dimension Transformer Deck */}
          {(() => {
            const current = challenges[selectedChallengeIndex];
            const CIcon = current.icon;
            return (
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedChallengeIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="space-y-8"
                >
                  {/* Unified Bento Container */}
                  <div className="rounded-[32px] bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden relative">
                    
                    {/* Top Decorative Gradient Accent */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899]" />

                    {/* Bento Header Bar */}
                    <div className="px-6 sm:px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#5B8EE2] shrink-0 shadow-2xs">
                          <CIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#5B8EE2]">
                              DIMENSION 0{selectedChallengeIndex + 1} OF 04
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-[11px] font-bold text-slate-500">
                              {current.subtitle}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 font-['Plus_Jakarta_Sans',sans-serif]">
                            {current.title}
                          </h3>
                        </div>
                      </div>

                      {/* Speed Multiplier Pill */}
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#5B8EE2] text-xs font-black shadow-2xs">
                        <Sparkles className="w-3.5 h-3.5 text-[#5B8EE2]" />
                        <span>⚡ Deployment SLA: {current.lumora.timeToDeploy}</span>
                      </div>
                    </div>

                    {/* Side-by-Side Bento Columns */}
                    <div className="p-6 sm:p-8 lg:p-9 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                      
                      {/* Left Column (5 Cols): The Traditional Staffing Trap */}
                      <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-rose-50/50 to-slate-50/80 border border-rose-200/70 p-6 flex flex-col justify-between space-y-6">
                        <div className="space-y-4">
                          
                          {/* Subheading Badge */}
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-rose-100/80 text-rose-700 border border-rose-200/80 font-['Plus_Jakarta_Sans',sans-serif]">
                              <XCircle className="w-3.5 h-3.5 text-rose-600" />
                              <span>Traditional Agency Trap</span>
                            </span>
                            <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">
                              Legacy Model
                            </span>
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed font-normal">
                            Unvetted resumes, months of recruiter coordination, and high upfront commission fees with zero retention guarantee.
                          </p>

                          {/* Friction Metrics Strip */}
                          <div className="grid grid-cols-2 gap-2 pt-1">
                            <div className="p-3 rounded-xl bg-white/90 border border-rose-100 shadow-2xs">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 block">Typical Lag</span>
                              <span className="text-sm font-black text-rose-950 font-['Plus_Jakarta_Sans',sans-serif] mt-0.5 block">{current.legacy.timeToHire}</span>
                            </div>
                            <div className="p-3 rounded-xl bg-white/90 border border-rose-100 shadow-2xs">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 block">Broker Fee</span>
                              <span className="text-sm font-black text-rose-950 font-['Plus_Jakarta_Sans',sans-serif] mt-0.5 block">{current.legacy.cost}</span>
                            </div>
                          </div>

                          {/* Failure Points List */}
                          <div className="space-y-2 pt-2">
                            <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 block">
                              Operational Failure Points:
                            </span>
                            {current.legacy.frustrations.map((fItem, fIdx) => (
                              <div key={fIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-rose-100/80 text-xs text-slate-700 leading-relaxed">
                                <span className="w-4 h-4 rounded-md bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-black">
                                  ✕
                                </span>
                                <span className="font-medium">{fItem}</span>
                              </div>
                            ))}
                          </div>

                        </div>

                        {/* Friction Callout */}
                        <div className="pt-3 border-t border-rose-200/50 flex items-center gap-2 text-[11px] font-semibold text-rose-600">
                          <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                          <span>Result: Months of lost quota and stalled pipeline momentum</span>
                        </div>
                      </div>

                      {/* Right Column (7 Cols): The Lumora Solution Engine */}
                      <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/20 border-2 border-[#5B8EE2]/60 p-6 sm:p-7 shadow-lg shadow-blue-500/5 flex flex-col justify-between space-y-6 relative overflow-hidden">
                        
                        <div className="space-y-4">
                          
                          {/* Lumora Header Tag */}
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-['Plus_Jakarta_Sans',sans-serif] shadow-2xs">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>The Lumora Solution Engine</span>
                            </span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-blue-100/80 text-[#5B8EE2]">
                              ⚡ 5-Day Fast Track
                            </span>
                          </div>

                          {/* Lumora Title & Description */}
                          <div>
                            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-950 font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
                              {current.lumora.method}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
                              We do not pass unvetted resumes or charge recruitment placement markups. We deploy interview-cleared professionals who adapt seamlessly to your tools, playbooks, and revenue targets.
                            </p>
                          </div>

                          {/* 3 High-Impact Lumora SLA Metric Tiles */}
                          <div className="grid grid-cols-3 gap-2 pt-1">
                            <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Deployment SLA</span>
                              <span className="text-sm font-black text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] mt-0.5 block">{current.lumora.timeToDeploy}</span>
                            </div>
                            <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Placement Markup</span>
                              <span className="text-sm font-black text-emerald-600 font-['Plus_Jakarta_Sans',sans-serif] mt-0.5 block">0% Commission</span>
                            </div>
                            <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Continuity</span>
                              <span className="text-sm font-black text-[#5B8EE2] font-['Plus_Jakarta_Sans',sans-serif] mt-0.5 block">Standby Backup</span>
                            </div>
                          </div>

                          {/* Verified Commercial Guarantees */}
                          <div className="space-y-2 pt-2">
                            <span className="text-[10px] font-black uppercase tracking-wider text-[#5B8EE2] block">
                              Verified Commercial Guarantees:
                            </span>
                            {current.lumora.resolutions.map((rItem, rIdx) => (
                              <div key={rIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-blue-100 shadow-2xs text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                                <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                                </div>
                                <span>{rItem}</span>
                              </div>
                            ))}
                          </div>

                        </div>

                        {/* Lumora Action Row */}
                        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                            <ShieldCheck className="w-4 h-4 text-[#5B8EE2] shrink-0" />
                            <span>Binding NDA Governance &amp; IP Protection Included</span>
                          </div>
                          <button
                            onClick={() => openConsultationModal(`Challenge Solution: ${current.title}`)}
                            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-xs font-extrabold inline-flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-all hover:scale-105 font-['Plus_Jakarta_Sans',sans-serif] cursor-pointer"
                          >
                            <span>Deploy Talent for This Need</span>
                            <ArrowRight className="w-3.5 h-3.5 text-white" />
                          </button>
                        </div>

                      </div>

                    </div>

                  </div>

                  </motion.div>
              </AnimatePresence>
            );
          })()}

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: 5-STEP OUTSOURCING PROCESS (CIRCULAR LOTTERY MACHINE CONTINUOUS ANIMATION)
          ========================================================================= */}
      <section 
        id="how-it-works-section" 
        className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB] relative overflow-hidden"
      >
        {/* Soft Ambient Radiance Orbs */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-100/40 rounded-full filter blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-pink-100/35 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Container Card: Exact Layout from Pratibha's docx design (pratibha_image3.png) */}
          <div 
            onMouseEnter={() => setIsStepPaused(true)}
            onMouseLeave={() => setIsStepPaused(false)}
            className="p-8 sm:p-10 lg:p-12 rounded-[36px] bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 relative overflow-hidden"
          >
            
            {/* Top Chasing Laser Rail (Continuous Lottery Machine Energy) */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] overflow-hidden">
              <div className="w-56 h-full bg-white/70 filter blur-xs animate-lottery-chaser" />
            </div>

            {/* Split Grid: Left Heading Column with Vertical Divider + Right 5 Circular Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column (3.5 cols): Heading & Branding with Vertical Divider (from Pratibha doc) */}
              <div className="lg:col-span-4 space-y-4 lg:pr-8 lg:border-r lg:border-slate-200/80">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#EC4899] bg-pink-50 px-3.5 py-1 rounded-full border border-pink-200 font-['Plus_Jakarta_Sans',sans-serif]">
                  <Sparkles className="w-3.5 h-3.5 text-[#EC4899] animate-spin-slow" />
                  <span>RAPID ONBOARDING ENGINE</span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
                    <span className="bg-gradient-to-r from-[#EC4899] via-[#D6A67B] to-[#5B8EE2] bg-clip-text text-transparent">
                      How Our Outsourcing
                    </span>
                    <br />
                    <span className="text-slate-950">Process Works</span>
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-2 font-['Plus_Jakarta_Sans',sans-serif]">
                    A Simple 5-Step Journey
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  From initial requirement scoping to live revenue outreach in as fast as 5 business days. Our continuous cycle guarantees zero onboarding bottlenecks.
                </p>

                {/* Live Continuous Lottery Machine Cycle Indicator */}
                <div className="pt-2 flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 font-['Plus_Jakarta_Sans',sans-serif]">
                    Step 0{activeStepIndex + 1} of 05 Active • Running
                  </span>
                </div>
              </div>

              {/* Right Column (8 cols): 5 Connected Circular Steps (Pratibha's "make it in circle") */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* 5 Circular Nodes with Arrows: ALL 5 STEPS VISIBLE AT ONCE */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 lg:gap-2 items-center justify-between relative">
                  {steps.map((s, idx) => {
                    const StepIcon = s.icon;
                    const isActive = activeStepIndex === idx;
                    return (
                      <React.Fragment key={idx}>
                        <div 
                          onClick={() => {
                            setActiveStepIndex(idx);
                            setIsStepPaused(true);
                          }}
                          className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-300 relative ${
                            isActive ? 'scale-105 z-20' : 'hover:scale-105 opacity-80 hover:opacity-100'
                          }`}
                        >
                          {/* 3D Glossy Acrylic Lottery Ball Badge on Top */}
                          <div className={`relative -mb-3 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br ${
                            isActive 
                              ? 'from-[#EC4899] via-[#DB2777] to-[#9D174D] shadow-[0_0_15px_rgba(236,72,153,0.6)] scale-110' 
                              : 'from-[#5B8EE2] via-[#4676C2] to-[#1E3A8A] shadow-md'
                          } flex items-center justify-center text-white font-black text-xs transition-all duration-300 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.4)]`}>
                            {/* Specular White Gloss Sheen Dot */}
                            <div className="absolute top-1 left-1.5 w-1.5 h-1 rounded-full bg-white/80 filter blur-[0.2px] -rotate-45" />
                            <span className="relative z-10 font-['Plus_Jakarta_Sans',sans-serif]">{s.num}</span>
                          </div>

                          {/* Big Circular Icon Container ("make it in circle") */}
                          <div className={`w-18 h-18 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                            isActive 
                              ? 'bg-gradient-to-br from-blue-50 to-pink-50/50 border-[#EC4899] shadow-xl shadow-pink-500/20 ring-4 ring-pink-500/15' 
                              : 'bg-slate-50/80 hover:bg-white border-slate-200/90 shadow-xs hover:border-blue-300'
                          }`}>
                            <StepIcon className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 ${
                              isActive ? 'text-[#EC4899] scale-110' : 'text-[#5B8EE2] group-hover:scale-110'
                            }`} />
                          </div>

                          {/* Step Title (Exact from Pratibha Image) */}
                          <div className="mt-3 text-center px-1">
                            <h3 className={`text-xs sm:text-[13px] font-extrabold leading-tight font-['Plus_Jakarta_Sans',sans-serif] transition-colors ${
                              isActive ? 'text-[#EC4899]' : 'text-slate-800 group-hover:text-[#5B8EE2]'
                            }`}>
                              {s.title}
                            </h3>
                            <span className="text-[10px] font-bold text-slate-400 mt-0.5 block">
                              {s.badge}
                            </span>
                          </div>

                        </div>

                        {/* Connecting Arrow between steps (hidden on last step & mobile) */}
                        {idx < 4 && (
                          <div className="hidden sm:flex items-center justify-center text-slate-300 -mt-6">
                            <ArrowRight className={`w-4 h-4 lg:w-5 lg:h-5 transition-colors duration-300 ${
                              activeStepIndex === idx ? 'text-[#EC4899] animate-pulse' : 'text-slate-300'
                            }`} />
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Active Step Detailed Explanation Drawer with Smooth Content Transitions */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative overflow-hidden">
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#EC4899] text-white flex items-center justify-center text-[10px] font-black">
                        {steps[activeStepIndex].num}
                      </span>
                      <h4 className="text-sm sm:text-base font-extrabold text-slate-950 font-['Plus_Jakarta_Sans',sans-serif]">
                        {steps[activeStepIndex].title} • <span className="text-[#5B8EE2]">{steps[activeStepIndex].turnaround}</span>
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {steps[activeStepIndex].desc}
                    </p>
                  </div>

                  <button
                    onClick={() => openConsultationModal(`Process Step 0${activeStepIndex + 1}: ${steps[activeStepIndex].title}`)}
                    className="shrink-0 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-xs font-extrabold inline-flex items-center gap-2 shadow-md shadow-blue-500/20 transition-all hover:scale-105 font-['Plus_Jakarta_Sans',sans-serif] cursor-pointer"
                  >
                    <span>Launch 5-Day Deployment</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHO CAN BENEFIT (PRATIBHA-ALIGNED 5 STRATEGIC DEPLOYMENT ARCHETYPES)
          ========================================================================= */}
      <section id="who-can-benefit-section" className="py-20 lg:py-28 bg-white border-b border-[#E5E7EB] relative overflow-hidden">
        {/* Soft Ambient Radiance Orbs */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#8CB4F5] rounded-full mix-blend-screen filter blur-[150px] opacity-15 pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#EC4899] rounded-full mix-blend-screen filter blur-[150px] opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
          
          {/* Main Card Container: Aligned with Pratibha Image (pratibha_image4.png) */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-[36px] bg-slate-50/60 border border-slate-200/90 shadow-xl shadow-slate-200/40 relative overflow-hidden space-y-10">
            
            {/* Top Header Row (from Pratibha doc: Who Can Benefit From Our Services? Businesses That Need a Stronger Sales Team) */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#5B8EE2] bg-blue-50 px-4 py-1 rounded-full border border-blue-200/80 font-['Plus_Jakarta_Sans',sans-serif]">
                  <Target className="w-3.5 h-3.5 text-[#5B8EE2]" />
                  <span>TARGET ORGANIZATIONS • STRATEGIC FIT</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
                  Who Can Benefit From Our{' '}
                  <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
                    Manpower Services?
                  </span>
                </h2>
                <p className="text-base sm:text-lg font-bold text-slate-700 font-['Plus_Jakarta_Sans',sans-serif]">
                  Businesses That Need a Stronger Sales Team.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Whether you are scaling an early-stage startup, entering international territories, or filling critical sales vacancies, we configure deployable pods tailored to your milestones.
                </p>
              </div>

              {/* Archetype Quick Filter Selector (5 Archetypes from Pratibha Doc) */}
              <div className="flex flex-wrap gap-2">
                {beneficiaries.map((b, idx) => {
                  const isActive = selectedBeneficiaryIndex === idx;
                  const BIcon = b.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedBeneficiaryIndex(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold font-['Plus_Jakarta_Sans',sans-serif] transition-all flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? 'bg-[#5B8EE2] text-white shadow-md shadow-blue-500/25 scale-105'
                          : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <BIcon className="w-3.5 h-3.5" />
                      <span>{b.title.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Archetype Master Showcase Card (Senior SaaS Pod Configurator) */}
            {(() => {
              const activeArch = beneficiaries[selectedBeneficiaryIndex];
              const ArchIcon = activeArch.icon;
              return (
                <div className="p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/90 shadow-lg relative overflow-hidden space-y-8">
                  {/* Watermark in corner */}
                  <span className="absolute top-2 right-6 text-7xl sm:text-8xl font-black text-slate-100/90 pointer-events-none select-none font-['Plus_Jakarta_Sans',sans-serif]">
                    {activeArch.num}
                  </span>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                    
                    {/* Left 60%: Persona Identity, Pod Architecture & Strategy */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="w-13 h-13 rounded-2xl bg-blue-50 text-[#5B8EE2] flex items-center justify-center shadow-2xs">
                          <ArchIcon className="w-7 h-7 text-[#5B8EE2]" />
                        </div>
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#5B8EE2] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/80">
                            {activeArch.badge}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-['Plus_Jakarta_Sans',sans-serif] mt-1">
                            {activeArch.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {activeArch.desc}
                      </p>

                      {/* Recommended Pod Architecture Blueprint */}
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">Recommended Pod Setup</span>
                          <span className="font-extrabold text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] mt-0.5 block">{activeArch.podConfig}</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">Typical Ramp Velocity</span>
                          <span className="font-extrabold text-[#5B8EE2] font-['Plus_Jakarta_Sans',sans-serif] mt-0.5 block">⚡ {activeArch.rampTime}</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => openConsultationModal(`Archetype Pod: ${activeArch.title}`)}
                          className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-xs font-extrabold inline-flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:scale-105 font-['Plus_Jakarta_Sans',sans-serif] cursor-pointer"
                        >
                          <span>Deploy Pod for {activeArch.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-white" />
                        </button>
                      </div>
                    </div>

                    {/* Right 40%: Key Operational Deliverables */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-4">
                      <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#D6A67B]" />
                        <span>Core Strategic Deliverables:</span>
                      </div>

                      <div className="space-y-3">
                        {activeArch.deliverables.map((deliv, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                            <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                            </div>
                            <span className="text-xs text-slate-800 font-semibold leading-relaxed">
                              {deliv}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 text-[11px] text-slate-500 font-medium flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#5B8EE2]" />
                        <span>Backed by Lumora 99% SLA &amp; Standby Continuity</span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })()}

            {/* 5-Card Overview Grid Below (Complete Coverage of All 5 Archetypes) */}
            <div className="space-y-4">
              <div className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                ALL 5 SUPPORTED ORGANIZATIONAL MODELS:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {beneficiaries.map((b, idx) => {
                  const BIcon = b.icon;
                  const isSelected = selectedBeneficiaryIndex === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedBeneficiaryIndex(idx)}
                      className={`p-5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                        isSelected 
                          ? 'border-[#5B8EE2] ring-2 ring-[#5B8EE2]/30 shadow-md scale-[1.02]' 
                          : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                            isSelected ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#5B8EE2]'
                          }`}>
                            <BIcon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-black text-slate-400">
                            {b.num}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#5B8EE2] transition-colors font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
                            {b.title}
                          </h4>
                          <span className="text-[10px] font-bold text-slate-500 block mt-1">
                            {b.podConfig}
                          </span>
                        </div>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100 text-[10px] font-extrabold text-[#5B8EE2] flex items-center justify-between">
                        <span>Configure Pod</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: FREQUENTLY ASKED QUESTIONS (2-COLUMN GRID WITH BRAND GRADIENT)
          ========================================================================= */}
      <section id="faq-section" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E5E7EB] relative overflow-hidden">
        {/* Soft Ambient Radiance Orbs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/40 rounded-full filter blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-100/35 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
          
          {/* Section Header with Lumora Brand Color Combination */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#5B8EE2] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200/80 shadow-2xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#5B8EE2] animate-spin-slow" />
              <span>GOT QUESTIONS?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Find straightforward answers about our manpower vetting, backup coverage, SLAs, and flexible engagement terms.
            </p>
          </div>

          {/* 2-Column FAQ Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            
            {/* COLUMN 1: Questions 01, 02, 03, 04 */}
            <div className="space-y-4">
              {faqs.slice(0, 4).map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-2xs ${
                      isOpen 
                        ? 'border-[#5B8EE2]/60 ring-2 ring-blue-500/10 shadow-md' 
                        : 'border-slate-200/90 hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-6 flex items-start justify-between gap-4 font-bold text-slate-900 hover:text-[#5B8EE2] transition-colors font-['Plus_Jakarta_Sans',sans-serif] cursor-pointer group"
                    >
                      <div className="flex items-start gap-3.5">
                        <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isOpen ? 'bg-[#5B8EE2] text-white shadow-xs' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#5B8EE2]'
                        }`}>
                          0{idx + 1}
                        </span>
                        <span className="text-base font-extrabold leading-snug">{faq.q}</span>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isOpen ? 'bg-[#5B8EE2] text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#5B8EE2]'
                      }`}>
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-2 pl-16 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100/80 font-normal">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* COLUMN 2: Questions 05, 06, 07 + Support Card */}
            <div className="space-y-4">
              {faqs.slice(4).map((faq, relIdx) => {
                const idx = relIdx + 4;
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-2xs ${
                      isOpen 
                        ? 'border-[#5B8EE2]/60 ring-2 ring-blue-500/10 shadow-md' 
                        : 'border-slate-200/90 hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-6 flex items-start justify-between gap-4 font-bold text-slate-900 hover:text-[#5B8EE2] transition-colors font-['Plus_Jakarta_Sans',sans-serif] cursor-pointer group"
                    >
                      <div className="flex items-start gap-3.5">
                        <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isOpen ? 'bg-[#5B8EE2] text-white shadow-xs' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#5B8EE2]'
                        }`}>
                          0{idx + 1}
                        </span>
                        <span className="text-base font-extrabold leading-snug">{faq.q}</span>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isOpen ? 'bg-[#5B8EE2] text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#5B8EE2]'
                      }`}>
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-2 pl-16 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100/80 font-normal">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Direct Support Question Card in Column 2 */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-purple-50/50 border border-blue-200/80 shadow-xs flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-extrabold text-[#5B8EE2] uppercase tracking-wider font-['Plus_Jakarta_Sans',sans-serif]">
                    Have a Custom Question?
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    Speak directly with our manpower strategist.
                  </div>
                </div>
                <button
                  onClick={() => openConsultationModal('FAQ General Inquiry')}
                  className="shrink-0 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-xs font-extrabold inline-flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-all hover:scale-105 font-['Plus_Jakarta_Sans',sans-serif] cursor-pointer"
                >
                  <span>Ask a Question</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: BOTTOM CONSULTATION & REQUIREMENTS FORM
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConsultationSection
            defaultService="Manpower Outsourcing"
            onGoHome={onGoHome}
            openConsultationModal={openConsultationModal}
          />
        </div>
      </section>

    </div>
  );
};
