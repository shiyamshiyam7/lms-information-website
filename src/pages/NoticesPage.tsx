import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Calendar, 
  Clock, 
  ExternalLink, 
  AlertCircle, 
  FileText, 
  Award, 
  GraduationCap, 
  CheckCircle,
  Share2,
  Filter
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { noticesData } from '../data/noticesData';
import { Notice } from '../types';

export const NoticesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [noticeSearch, setNoticeSearch] = useState('');

  const filteredNotices = noticesData.filter((n) => {
    if (activeCategory !== 'all' && n.category !== activeCategory) {
      return false;
    }
    if (noticeSearch.trim()) {
      const q = noticeSearch.toLowerCase();
      const match = 
        n.title.en.toLowerCase().includes(q) ||
        n.title.si.toLowerCase().includes(q) ||
        n.title.ta.toLowerCase().includes(q) ||
        n.issuingAuthority.toLowerCase().includes(q) ||
        (n.gazetteNumber && n.gazetteNumber.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  const categories = [
    { id: 'all', label: 'All Updates', icon: Bell },
    { id: 'ugc', label: 'UGC University Admissions', icon: GraduationCap },
    { id: 'nvq', label: 'TVEC & NVQ Schedules', icon: Award },
    { id: 'scholarship', label: 'Scholarships & Loans', icon: FileText },
    { id: 'exam', label: 'Entrance Exams', icon: Calendar },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          <Bell className="h-3.5 w-3.5 text-cyan-400" />
          <span>Verified Government Bulletins</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t('notices_headline')}
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          {t('notices_sub')}
        </p>
      </div>

      {/* Search and Tabs */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all border ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Notice Search Bar */}
        <div className="relative min-w-[260px]">
          <Search className="h-4 w-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            value={noticeSearch}
            onChange={(e) => setNoticeSearch(e.target.value)}
            placeholder="Search gazette or notice..."
            className="w-full rounded-xl border border-slate-800 bg-slate-900 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Notices Feed */}
      <div className="space-y-4">
        {filteredNotices.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-12 text-center text-slate-400">
            <Bell className="h-10 w-10 mx-auto text-slate-600 mb-2" />
            <p className="font-semibold text-white">No notices found</p>
            <p className="text-xs text-slate-500 mt-1">Try switching categories or clearing search keywords.</p>
          </div>
        ) : (
          filteredNotices.map((notice) => {
            const noticeTitle = notice.title[language] || notice.title.en;
            const noticeSummary = notice.summary[language] || notice.summary.en;

            return (
              <div
                key={notice.id}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6 backdrop-blur-md hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all space-y-4 shadow-lg"
              >
                {/* Notice Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {notice.isUrgent && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/20 px-2.5 py-0.5 text-[11px] font-bold text-rose-300 border border-rose-500/30 animate-pulse">
                        <AlertCircle className="h-3 w-3" />
                        URGENT / ACTIVE WINDOW
                      </span>
                    )}

                    <span className="rounded-md bg-slate-800 px-2.5 py-0.5 text-[11px] font-semibold text-slate-300">
                      {notice.issuingAuthority}
                    </span>

                    {notice.gazetteNumber && (
                      <span className="rounded-md bg-slate-950 font-mono text-[10px] text-emerald-400 px-2 py-0.5 border border-slate-800">
                        {notice.gazetteNumber}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-slate-500" />
                      {notice.date}
                    </span>
                  </div>
                </div>

                {/* Title and Summary */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white hover:text-emerald-300 transition-colors">
                    {noticeTitle}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {noticeSummary}
                  </p>
                </div>

                {/* Deadlines and CTA */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {notice.deadline && (
                      <div className="flex items-center gap-1.5 rounded-lg bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-300 border border-amber-500/20">
                        <Clock className="h-3.5 w-3.5" />
                        <span>Deadline: {notice.deadline}</span>
                      </div>
                    )}
                  </div>

                  <a
                    href={notice.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2 text-xs font-bold text-slate-950 transition-colors shadow-sm"
                  >
                    <span>View Official Circular & Portal</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
