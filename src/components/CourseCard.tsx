import React from 'react';
import { 
  Building2, 
  Clock, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  Award, 
  Bookmark, 
  Scale, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Course } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
  onToggleBookmark: (courseId: string) => void;
  isBookmarked: boolean;
  onToggleCompare: (course: Course) => void;
  isCompared: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onSelect,
  onToggleBookmark,
  isBookmarked,
  onToggleCompare,
  isCompared
}) => {
  const { language, t } = useLanguage();

  const title = course.title[language] || course.title.en;
  const entryReq = course.entryRequirements[language] || course.entryRequirements.en;

  // Institute Type Badges
  const getInstituteTypeBadge = (type: string) => {
    switch (type) {
      case 'state_university':
        return { label: 'UGC State University', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' };
      case 'tvec_vocational':
        return { label: 'TVEC National Vocational', color: 'bg-amber-500/10 text-amber-400 border-amber-500/30' };
      case 'semi_government':
        return { label: 'Semi-Government Statutory', color: 'bg-teal-500/10 text-teal-400 border-teal-500/30' };
      case 'private_degree':
        return { label: 'MoHE Approved Non-State', color: 'bg-sky-500/10 text-sky-400 border-sky-500/30' };
      default:
        return { label: 'Accredited Institute', color: 'bg-slate-500/10 text-slate-400 border-slate-500/30' };
    }
  };

  const instituteBadge = getInstituteTypeBadge(course.instituteType);

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md transition-all hover:border-emerald-500/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-emerald-950/40">
      {/* Top row: Badges and Bookmark */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${instituteBadge.color}`}>
              {instituteBadge.label}
            </span>

            {course.nvqLevel && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                NVQ Level {course.nvqLevel}
              </span>
            )}

            {course.slqfLevel && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                SLQF Level {course.slqfLevel}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            {/* Compare toggle */}
            <button
              onClick={() => onToggleCompare(course)}
              className={`p-1.5 rounded-lg border transition-colors ${
                isCompared
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                  : 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title="Add to comparison"
            >
              <Scale className="h-3.5 w-3.5" />
            </button>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(course.id)}
              className={`p-1.5 rounded-lg border transition-colors ${
                isBookmarked
                  ? 'bg-emerald-500 text-slate-950 border-emerald-500'
                  : 'border-slate-800 text-slate-400 hover:text-emerald-400 hover:bg-slate-800'
              }`}
              title="Bookmark course"
            >
              <Bookmark className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Title & Institute */}
        <h3 
          onClick={() => onSelect(course)}
          className="text-lg font-bold text-slate-100 group-hover:text-emerald-300 transition-colors cursor-pointer line-clamp-2 leading-snug"
        >
          {title}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
          <Building2 className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
          <span className="font-medium text-slate-300 truncate">{course.instituteName}</span>
        </div>

        <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
          <MapPin className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
          <span className="truncate">{course.locations.join(', ')} ({course.province})</span>
        </div>

        {/* Meta badges: Duration & Mode */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-2">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">{t('duration')}</span>
            <div className="mt-0.5 flex items-center gap-1.5 font-medium text-slate-200">
              <Clock className="h-3 w-3 text-emerald-400" />
              <span className="truncate">{course.duration}</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-2">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">{t('fees')}</span>
            <div className="mt-0.5 font-medium text-slate-200 truncate">
              {course.fees.isFreeGovernment ? (
                <span className="text-emerald-400 font-bold">Free (State Quota)</span>
              ) : (
                <span className="text-cyan-300">{course.fees.amount}</span>
              )}
            </div>
          </div>
        </div>

        {/* Financial Aid Badges */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {course.fees.isFreeGovernment && (
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 className="h-3 w-3" />
              100% Govt Funded
            </span>
          )}
          {course.fees.isLoanEligible && (
            <span className="inline-flex items-center gap-1 rounded-md bg-teal-500/15 px-2 py-0.5 text-[10px] font-semibold text-teal-300 border border-teal-500/30">
              <Sparkles className="h-3 w-3" />
              IFSLS Loan Eligible (Rs. 800k+)
            </span>
          )}
        </div>

        {/* Entry Requirements summary */}
        <div className="mt-3 rounded-xl bg-slate-950/40 p-2.5 text-xs text-slate-400 border border-slate-800/60">
          <span className="font-semibold text-slate-300 block mb-1">
            {t('entry_req')}:
          </span>
          <p className="line-clamp-2 leading-relaxed">
            {entryReq}
          </p>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelect(course)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors"
        >
          <span>{t('view_details')}</span>
          <ArrowRight className="h-3 w-3" />
        </button>

        <a
          href={course.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-sm shadow-emerald-500/20"
          title="Go to official application or institute portal"
        >
          <span>{t('apply_now')}</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
};
