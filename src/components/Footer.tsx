import React from 'react';
import { 
  GraduationCap, 
  ExternalLink, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award,
  Globe2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const { language, t } = useLanguage();

  return (
    <footer className="relative mt-20 border-t border-slate-800/80 bg-slate-950 text-slate-400">
      {/* Decorative gradient glow at top of footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-4xl bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      {/* Main Footer Container */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & National Purpose */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
                  <GraduationCap className="h-5 w-5 text-emerald-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                LankaEdu
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sri Lanka's centralized open-access national directory for higher education, vocational NVQ credentials, UGC university cutoffs, and government interest-free student financing.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-semibold text-slate-300">
                TVEC & UGC Standards Aligned
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Explore Portal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t('nav_home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('advisor'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-emerald-400">✦</span>
                  {t('nav_ai_advisor')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t('nav_courses')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('notices'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t('nav_notices')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('helpdesk'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t('nav_helpdesk')}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Government Educational Portals */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Official Sri Lanka Portals
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://ugc.ac.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group hover:text-emerald-400 transition-colors"
                >
                  <span>University Grants Commission (UGC)</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="https://tvec.gov.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group hover:text-emerald-400 transition-colors"
                >
                  <span>TVEC Vocational Commission</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="https://mohe.gov.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group hover:text-emerald-400 transition-colors"
                >
                  <span>Ministry of Education (Higher Edu)</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="https://naita.gov.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group hover:text-emerald-400 transition-colors"
                >
                  <span>NAITA Apprenticeship Authority</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="https://vtasl.gov.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group hover:text-emerald-400 transition-colors"
                >
                  <span>VTA Vocational Training Authority</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: National Student Helplines */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Student Guidance Hotlines
            </h3>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 space-y-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                <div>
                  <span className="font-semibold text-white">1919</span>
                  <span className="text-slate-400 ml-1.5">(Government Information Center)</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Phone className="h-3.5 w-3.5 text-cyan-400" />
                <div>
                  <span className="font-semibold text-white">011 276 8284</span>
                  <span className="text-slate-400 ml-1.5">(TVEC Guidance Desk)</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Mail className="h-3.5 w-3.5 text-teal-400" />
                <span className="text-slate-300">info@lankaedu.gov.lk</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-500">
              Operating hours: Mon - Fri (8:30 AM - 4:30 PM Sri Lanka Time)
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} LankaEdu Portal. Dedicated to empowering every Sri Lankan student with equal access to knowledge and career opportunities.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-slate-400">
              <Globe2 className="h-3.5 w-3.5 text-emerald-400" />
              Bilingual & Trilingual Access (EN / SI / TA)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
