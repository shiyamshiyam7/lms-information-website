import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  X, 
  RotateCcw, 
  Grid, 
  List, 
  SlidersHorizontal, 
  Building2, 
  MapPin, 
  Globe, 
  Clock, 
  Award, 
  CheckCircle2, 
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/coursesData';
import { CourseCard } from '../components/CourseCard';
import { Course, Category, InstituteType, Medium, StudyMode } from '../types';

interface CourseDirectoryPageProps {
  initialSearch?: string;
  initialCategory?: string;
  onSelectCourse: (course: Course) => void;
  savedCourseIds: string[];
  onToggleBookmark: (courseId: string) => void;
  comparedCourseIds: string[];
  onToggleCompare: (course: Course) => void;
}

export const CourseDirectoryPage: React.FC<CourseDirectoryPageProps> = ({
  initialSearch = '',
  initialCategory = 'all',
  onSelectCourse,
  savedCourseIds,
  onToggleBookmark,
  comparedCourseIds,
  onToggleCompare
}) => {
  const { language, t } = useLanguage();

  // Search & Filters state
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedInstituteType, setSelectedInstituteType] = useState<string>('all');
  const [selectedMedium, setSelectedMedium] = useState<string>('all');
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [selectedStudyMode, setSelectedStudyMode] = useState<string>('all');
  const [onlyFreeGovt, setOnlyFreeGovt] = useState(false);
  const [onlyLoanEligible, setOnlyLoanEligible] = useState(false);
  const [sortBy, setSortBy] = useState<'relevance' | 'rating' | 'duration'>('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filtered courses memo
  const filteredCourses = useMemo(() => {
    return coursesData.filter((c) => {
      // Keyword search
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const titleMatch = 
          c.title.en.toLowerCase().includes(q) ||
          c.title.si.toLowerCase().includes(q) ||
          c.title.ta.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q) ||
          c.instituteName.toLowerCase().includes(q) ||
          c.locations.some(l => l.toLowerCase().includes(q));

        if (!titleMatch) return false;
      }

      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'vocational') {
          if (c.category !== 'vocational' && !c.nvqLevel) return false;
        } else if (c.category !== selectedCategory) {
          return false;
        }
      }

      // Institute Type
      if (selectedInstituteType !== 'all') {
        if (c.instituteType !== selectedInstituteType) return false;
      }

      // Medium
      if (selectedMedium !== 'all') {
        if (!c.medium.includes(selectedMedium as Medium)) return false;
      }

      // Province / Location
      if (selectedProvince !== 'all') {
        if (c.province !== selectedProvince && c.province !== 'Islandwide') return false;
      }

      // Study Mode
      if (selectedStudyMode !== 'all') {
        if (c.studyMode !== selectedStudyMode) return false;
      }

      // Funding toggles
      if (onlyFreeGovt && !c.fees.isFreeGovernment) return false;
      if (onlyLoanEligible && !c.fees.isLoanEligible) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'duration') return a.duration.localeCompare(b.duration);
      return 0; // relevance preserves original curated rank
    });
  }, [
    searchTerm,
    selectedCategory,
    selectedInstituteType,
    selectedMedium,
    selectedProvince,
    selectedStudyMode,
    onlyFreeGovt,
    onlyLoanEligible,
    sortBy
  ]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedInstituteType('all');
    setSelectedMedium('all');
    setSelectedProvince('all');
    setSelectedStudyMode('all');
    setOnlyFreeGovt(false);
    setOnlyLoanEligible(false);
  };

  const hasActiveFilters = 
    searchTerm ||
    selectedCategory !== 'all' ||
    selectedInstituteType !== 'all' ||
    selectedMedium !== 'all' ||
    selectedProvince !== 'all' ||
    selectedStudyMode !== 'all' ||
    onlyFreeGovt ||
    onlyLoanEligible;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Verified National Directory
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            {t('nav_courses')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Showing {filteredCourses.length} of {coursesData.length} accredited degree & NVQ programs across Sri Lanka
          </p>
        </div>

        {/* View mode toggle and mobile filter trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="md:hidden flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-200"
          >
            <SlidersHorizontal className="h-4 w-4 text-emerald-400" />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            )}
          </button>

          <div className="flex items-center rounded-xl bg-slate-900 border border-slate-800 p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                viewMode === 'grid' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-white'
              }`}
              title="Grid view"
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                viewMode === 'list' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-white'
              }`}
              title="List view"
            >
              <List className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-200 focus:border-emerald-500 focus:outline-none"
            >
              <option value="relevance">Curated Relevance</option>
              <option value="rating">Highest Rated</option>
              <option value="duration">Duration</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Filter Sidebar (Desktop: 4 cols, Mobile: Drawer/Sheet) */}
        <aside className={`md:col-span-4 lg:col-span-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 backdrop-blur-xl space-y-6 ${
          mobileFilterOpen ? 'block' : 'hidden md:block'
        }`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-emerald-400" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                {t('filter_title')}
              </h2>
            </div>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Keyword Search */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
              Keyword or Code
            </label>
            <div className="relative">
              <Search className="h-3.5 w-3.5 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g. Software, NVQ 4, UoM..."
                className="w-full rounded-xl border border-slate-800 bg-slate-950 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Discipline / Category */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
              Academic Discipline
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 focus:border-emerald-500 focus:outline-none"
            >
              <option value="all">All Disciplines</option>
              <option value="it">IT & Software</option>
              <option value="engineering">Engineering & Technology</option>
              <option value="business">Business & Management</option>
              <option value="healthcare">Healthcare & Nursing</option>
              <option value="vocational">Vocational & NVQ Levels</option>
              <option value="arts">Law & Humanities</option>
            </select>
          </div>

          {/* Institution Type */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
              {t('filter_institution_type')}
            </label>
            <select
              value={selectedInstituteType}
              onChange={(e) => setSelectedInstituteType(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 focus:border-emerald-500 focus:outline-none"
            >
              <option value="all">All Institution Types</option>
              <option value="state_university">UGC State University (Free)</option>
              <option value="tvec_vocational">TVEC Vocational (VTA, NAITA, CGTTI)</option>
              <option value="semi_government">Semi-Government (NIBM)</option>
              <option value="private_degree">Approved Non-State (SLIIT, CINEC, SLTC)</option>
            </select>
          </div>

          {/* Location / Province */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
              {t('filter_location')}
            </label>
            <select
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 focus:border-emerald-500 focus:outline-none"
            >
              <option value="all">Islandwide (All Provinces)</option>
              <option value="Western">Western (Colombo, Gampaha, Kalutara)</option>
              <option value="Central">Central (Kandy, Peradeniya, Matale)</option>
              <option value="Southern">Southern (Galle, Matara, Ruhuna)</option>
              <option value="Northern">Northern (Jaffna, Kilinochchi)</option>
              <option value="North Western">North Western (Kurunegala)</option>
            </select>
          </div>

          {/* Medium of Instruction */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
              {t('filter_medium')}
            </label>
            <select
              value={selectedMedium}
              onChange={(e) => setSelectedMedium(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 focus:border-emerald-500 focus:outline-none"
            >
              <option value="all">Any Medium</option>
              <option value="English">English Medium</option>
              <option value="Sinhala">Sinhala Medium</option>
              <option value="Tamil">Tamil Medium</option>
            </select>
          </div>

          {/* Study Mode */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
              Study Mode
            </label>
            <select
              value={selectedStudyMode}
              onChange={(e) => setSelectedStudyMode(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200 focus:border-emerald-500 focus:outline-none"
            >
              <option value="all">All Modes</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time / Evening</option>
              <option value="Weekend">Weekend</option>
              <option value="Distance / Online">Distance / Online</option>
            </select>
          </div>

          {/* Funding Checkboxes */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
              {t('filter_fee')}
            </label>

            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyFreeGovt}
                onChange={(e) => setOnlyFreeGovt(e.target.checked)}
                className="rounded border-slate-700 bg-slate-950 text-emerald-500 focus:ring-emerald-500 h-4 w-4"
              />
              <span>{t('free_government')}</span>
            </label>

            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyLoanEligible}
                onChange={(e) => setOnlyLoanEligible(e.target.checked)}
                className="rounded border-slate-700 bg-slate-950 text-teal-500 focus:ring-teal-500 h-4 w-4"
              />
              <span>{t('loan_eligible')}</span>
            </label>
          </div>
        </aside>

        {/* Course Cards Feed (Desktop: 8-9 cols) */}
        <main className="md:col-span-8 lg:col-span-9 space-y-6">
          {/* Active Filter Chips */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pb-2">
              <span className="text-xs text-slate-400">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300 border border-emerald-500/20">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm('')}><X className="h-3 w-3" /></button>
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 rounded-lg bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory('all')}><X className="h-3 w-3" /></button>
                </span>
              )}
              {selectedInstituteType !== 'all' && (
                <span className="inline-flex items-center gap-1 rounded-lg bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
                  Type: {selectedInstituteType}
                  <button onClick={() => setSelectedInstituteType('all')}><X className="h-3 w-3" /></button>
                </span>
              )}
              {onlyFreeGovt && (
                <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-400">
                  Free Govt Only
                  <button onClick={() => setOnlyFreeGovt(false)}><X className="h-3 w-3" /></button>
                </span>
              )}
              {onlyLoanEligible && (
                <span className="inline-flex items-center gap-1 rounded-lg bg-teal-500/10 px-2.5 py-1 text-xs text-teal-300">
                  Loan Eligible Only
                  <button onClick={() => setOnlyLoanEligible(false)}><X className="h-3 w-3" /></button>
                </span>
              )}
              <button
                onClick={resetFilters}
                className="text-xs text-slate-400 hover:text-white underline ml-2"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Cards Grid */}
          {filteredCourses.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-12 text-center space-y-4">
              <Search className="h-10 w-10 text-slate-600 mx-auto" />
              <h3 className="text-lg font-bold text-white">No Matching Courses Found</h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                No courses match your specific filter combinations. Try clearing some filters or searching for broader terms like "Engineering", "NVQ", or "Management".
              </p>
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-emerald-400"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : (
            <div className={
              viewMode === 'grid'
                ? "grid grid-cols-1 md:grid-cols-2 gap-5"
                : "space-y-4"
            }>
              {filteredCourses.map((course) => (
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
          )}
        </main>
      </div>
    </div>
  );
};
