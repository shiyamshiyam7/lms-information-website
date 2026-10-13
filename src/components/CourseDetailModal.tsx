import React from 'react';
import { 
  X, 
  Building2, 
  MapPin, 
  Clock, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Bookmark, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Share2, 
  ShieldCheck,
  Globe
} from 'lucide-react';
import { Course } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  isBookmarked,
  onToggleBookmark
}) => {
  const { language, t } = useLanguage();

  if (!course) return null;

  const title = course.title[language] || course.title.en;
  const entryReq = course.entryRequirements[language] || course.entryRequirements.en;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="relative w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-emerald-950/50 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-800 bg-slate-950/80 p-5 sm:p-6">
          <div className="space-y-1 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                {course.code}
              </span>
              {course.nvqLevel && (
                <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-bold text-amber-300 border border-amber-500/30">
                  TVEC NVQ Level {course.nvqLevel}
                </span>
              )}
              {course.slqfLevel && (
                <span className="rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                  SLQF Level {course.slqfLevel}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight pt-1">
              {title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Building2 className="h-4 w-4 text-emerald-400" />
                {course.instituteName}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-slate-400" />
                {course.locations.join(', ')} ({course.province})
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[70vh] overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Quick Details Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-medium">Duration</span>
              <div className="mt-1 flex items-center gap-1.5 font-bold text-white text-sm">
                <Clock className="h-4 w-4 text-emerald-400" />
                <span>{course.duration}</span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-medium">Study Mode</span>
              <div className="mt-1 font-bold text-white text-sm">
                {course.studyMode}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-medium">Medium</span>
              <div className="mt-1 flex items-center gap-1 font-semibold text-slate-200 text-xs truncate">
                <Globe className="h-3.5 w-3.5 text-cyan-400" />
                <span>{course.medium.join(', ')}</span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-medium">Fees</span>
              <div className="mt-1 font-bold text-emerald-400 text-sm truncate">
                {course.fees.isFreeGovernment ? 'Free (State Quota)' : course.fees.amount}
              </div>
            </div>
          </div>

          {/* Financial Aid Details */}
          {(course.fees.isFreeGovernment || course.fees.isLoanEligible) && (
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <span className="font-semibold text-emerald-300 text-sm">
                  Government Support & Financial Aid
                </span>
                <p className="text-slate-300">
                  {course.fees.isFreeGovernment
                    ? 'This program is fully subsidized by the Government of Sri Lanka for students selected through the UGC national quota system.'
                    : 'Eligible for the Ministry of Education Interest-Free Student Loan Scheme (IFSLS). Up to LKR 800,000 covered with 100% government interest subsidy during study period.'}
                </p>
              </div>
            </div>
          )}

          {/* Entry Requirements Detailed */}
          <div className="space-y-2">
            <h4 className="flex items-center gap-2 text-sm font-bold text-slate-200 uppercase tracking-wide">
              <GraduationCap className="h-4 w-4 text-emerald-400" />
              <span>{t('entry_req')}</span>
            </h4>
            <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4 text-sm text-slate-300 leading-relaxed">
              <p>{entryReq}</p>
            </div>
          </div>

          {/* Curriculum / Syllabus Highlights */}
          <div className="space-y-2">
            <h4 className="flex items-center gap-2 text-sm font-bold text-slate-200 uppercase tracking-wide">
              <BookOpen className="h-4 w-4 text-teal-400" />
              <span>Curriculum & Key Learning Modules</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {course.syllabusHighlights.map((mod, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 rounded-lg border border-slate-800/80 bg-slate-950/40 p-2.5 text-xs text-slate-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                  <span>{mod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Pathways */}
          <div className="space-y-2">
            <h4 className="flex items-center gap-2 text-sm font-bold text-slate-200 uppercase tracking-wide">
              <Briefcase className="h-4 w-4 text-cyan-400" />
              <span>Graduate Career Opportunities</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.careerProspects.map((car, idx) => (
                <span
                  key={idx}
                  className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200"
                >
                  {car}
                </span>
              ))}
            </div>
          </div>

          {/* Accreditations */}
          <div className="space-y-2">
            <h4 className="flex items-center gap-2 text-sm font-bold text-slate-200 uppercase tracking-wide">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              <span>Accreditation & Quality Assurance</span>
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {course.accreditedBy.map((acc, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-300"
                >
                  ✓ {acc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="border-t border-slate-800 bg-slate-950/90 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => onToggleBookmark(course.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
              isBookmarked
                ? 'bg-emerald-500 text-slate-950 border-emerald-500'
                : 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Bookmark className="h-4 w-4" />
            <span>{isBookmarked ? 'Bookmarked' : 'Save for Later'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {t('close')}
            </button>
            <a
              href={course.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:brightness-110 shadow-lg shadow-emerald-500/20 transition-all"
            >
              <span>Visit Official Institute / Apply</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
