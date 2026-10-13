import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  GraduationCap, 
  ArrowRight, 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  Compass, 
  Bot, 
  BookOpen, 
  Briefcase, 
  TrendingUp, 
  Award,
  Zap,
  Globe2,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/coursesData';
import { institutesData } from '../data/institutesData';
import { CourseCard } from '../components/CourseCard';
import { Course, Category } from '../types';

interface HomePageProps {
  onSearchSubmit: (query: string, category?: string) => void;
  onNavigateTab: (tab: string) => void;
  onSelectCourse: (course: Course) => void;
  savedCourseIds: string[];
  onToggleBookmark: (courseId: string) => void;
  comparedCourseIds: string[];
  onToggleCompare: (course: Course) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSearchSubmit,
  onNavigateTab,
  onSelectCourse,
  savedCourseIds,
  onToggleBookmark,
  comparedCourseIds,
  onToggleCompare
}) => {
  const { language, t } = useLanguage();
  const [searchInput, setSearchInput] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t('cat_all'), count: coursesData.length },
    { id: 'it', label: t('cat_it'), count: coursesData.filter(c => c.category === 'it').length },
    { id: 'engineering', label: t('cat_engineering'), count: coursesData.filter(c => c.category === 'engineering').length },
    { id: 'business', label: t('cat_business'), count: coursesData.filter(c => c.category === 'business').length },
    { id: 'healthcare', label: t('cat_healthcare'), count: coursesData.filter(c => c.category === 'healthcare').length },
    { id: 'vocational', label: t('cat_vocational'), count: coursesData.filter(c => c.category === 'vocational' || c.nvqLevel).length },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(searchInput, activeCategory === 'all' ? undefined : activeCategory);
  };

  const handlePillClick = (catId: string) => {
    setActiveCategory(catId);
    onSearchSubmit(searchInput, catId === 'all' ? undefined : catId);
  };

  const featuredCourses = coursesData.filter(c => c.featured).slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-16 sm:pb-20">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-cyan-500/15 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-600/10 blur-[90px] pointer-events-none rounded-full"></div>

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
          {/* Government / TVEC Accreditation Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 shadow-lg shadow-emerald-500/10 backdrop-blur-md mb-6 animate-pulse">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>{t('hero_badge')}</span>
            <span className="h-1 w-1 rounded-full bg-emerald-400"></span>
            <span className="text-[11px] text-emerald-400/90 font-mono">UGC & TVEC ALIGNED</span>
          </div>

          {/* Hero Headlines */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            {t('hero_title_1')}{' '}
            <span className="block mt-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              {t('hero_title_2')}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            {t('hero_description')}
          </p>

          {/* Smart Course Search Input Bar */}
          <form onSubmit={handleSearch} className="mx-auto mt-10 max-w-3xl">
            <div className="relative flex flex-col sm:flex-row items-center rounded-2xl border border-slate-700/80 bg-slate-900/90 p-2 shadow-2xl shadow-emerald-950/40 backdrop-blur-xl focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
              <div className="relative flex flex-1 items-center w-full px-3 py-2 sm:py-0">
                <Search className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder={t('search_placeholder')}
                  className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto mt-2 sm:mt-0 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 hover:brightness-110 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <span>{t('search_btn')}</span>
                <ArrowRight className="h-4 w-4 text-slate-950" />
              </button>
            </div>

            {/* Quick search suggestions */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
              <span className="text-slate-500">Popular:</span>
              {[
                'Software Engineering',
                'NVQ Level 4 Electrician',
                'BIT External',
                'German Tech Automobile',
                'MoHE Student Loans'
              ].map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => {
                    setSearchInput(term);
                    onSearchSubmit(term);
                  }}
                  className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-slate-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors border border-slate-700/50"
                >
                  {term}
                </button>
              ))}
            </div>
          </form>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handlePillClick(cat.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all border ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-850'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* AI Advisor Teaser Banner */}
          <div className="mt-12 mx-auto max-w-3xl rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900/70 to-teal-950/40 p-4 sm:p-5 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-lg">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Bot className="h-6 w-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    Need Guidance for A/L or O/L Results?
                  </h4>
                  <span className="rounded-full bg-emerald-400 text-slate-950 px-2 py-0.5 text-[10px] font-extrabold uppercase">
                    AI Powered
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  Input your Z-Score, stream, or dream career for instant UGC cutoffs & NVQ pathways.
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigateTab('advisor')}
              className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/20"
            >
              <span>Consult AI Advisor</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Partner Institutes Showcase */}
      <section className="border-y border-slate-800/80 bg-slate-900/40 py-10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Recognized Higher Education & Vocational Partners
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {t('partners_title')}
            </h2>
          </div>

          {/* Institute Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {institutesData.slice(0, 10).map((inst) => (
              <div
                key={inst.id}
                onClick={() => onSearchSubmit(inst.shortName)}
                className="group flex flex-col items-center justify-center rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 text-center hover:border-emerald-500/40 hover:bg-slate-900 transition-all cursor-pointer"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-700/60 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Building2 className="h-5 w-5" />
                </div>
                <span className="mt-2.5 font-bold text-sm text-slate-100 group-hover:text-emerald-300 transition-colors">
                  {inst.shortName}
                </span>
                <span className="text-[10px] text-slate-400 truncate max-w-[140px] mt-0.5">
                  {inst.name}
                </span>
                <span className="mt-1 text-[9px] font-semibold text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 truncate max-w-[150px]">
                  {inst.badgeText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Core Educational Pathways Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Strategic Educational Pathways
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            {t('pathways_title')}
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Sri Lanka provides diverse, accredited routes to high-earning careers whether through state merit, hands-on vocational craftsmanship, or supported non-state degrees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: UGC State Universities */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md hover:border-emerald-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                100% Free Tuition
              </span>
              <h3 className="text-xl font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                {t('pathway_ugc_title')}
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {t('pathway_ugc_desc')}
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>17 National State Universities (UoM, UoC, etc.)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Z-Score District & Merit allocation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Mahapola & Bursary support schemes</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onSearchSubmit('State University')}
              className="mt-6 flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-all"
            >
              <span>Explore State Programs</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Card 2: TVEC NVQ Vocational Route */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md hover:border-amber-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                Skills & Industry Pathway
              </span>
              <h3 className="text-xl font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                {t('pathway_nvq_title')}
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {t('pathway_nvq_desc')}
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />
                  <span>German Tech (CGTTI), NAITA & VTA networks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />
                  <span>Progress from NVQ 3-4 up to NVQ 7 B.Tech Degree</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />
                  <span>RPL (Recognition of Prior Learning) available</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onSearchSubmit('NVQ')}
              className="mt-6 flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-all"
            >
              <span>Explore NVQ Vocational Courses</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Card 3: MoHE Interest-Free Student Loans */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md hover:border-cyan-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                Ministry Loan Financed
              </span>
              <h3 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                {t('pathway_nonstate_title')}
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {t('pathway_nonstate_desc')}
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                  <span>0% Interest (Government pays all interest)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Approved institutes: SLIIT, CINEC, NSBM, SLTC</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Repayment starts only after degree completion</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onSearchSubmit('Student Loan')}
              className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
            >
              <span>Explore Loan-Eligible Programs</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Accredited Programs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Handpicked National Programs
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Featured Degree & Diploma Qualifications
            </h2>
          </div>
          <button
            onClick={() => onNavigateTab('courses')}
            className="flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
          >
            <span>View All {coursesData.length} Courses</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={onSelectCourse}
              onToggleBookmark={onToggleBookmark}
              isBookmarked={savedCourseIds.includes(course.id)}
              onToggleCompare={onToggleCompare}
              isCompared={comparedCourseIds.includes(course.id)}
            />
          ))}
        </div>
      </section>

      {/* Islandwide Stats Bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400">
                850+
              </span>
              <p className="mt-1 text-xs text-slate-400 font-medium">
                {t('stat_courses')}
              </p>
            </div>
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-teal-300">
                45+
              </span>
              <p className="mt-1 text-xs text-slate-400 font-medium">
                {t('stat_institutes')}
              </p>
            </div>
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400">
                25
              </span>
              <p className="mt-1 text-xs text-slate-400 font-medium">
                {t('stat_districts')}
              </p>
            </div>
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-300">
                100%
              </span>
              <p className="mt-1 text-xs text-slate-400 font-medium">
                {t('stat_tvec')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
