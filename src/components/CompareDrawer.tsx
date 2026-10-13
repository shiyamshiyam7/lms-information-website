import React from 'react';
import { X, Scale, ExternalLink, Check, Trash2 } from 'lucide-react';
import { Course } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CompareDrawerProps {
  comparedCourses: Course[];
  onRemove: (id: string) => void;
  onClear: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const CompareDrawer: React.FC<CompareDrawerProps> = ({
  comparedCourses,
  onRemove,
  onClear,
  isOpen,
  onClose
}) => {
  const { language, t } = useLanguage();

  if (!isOpen || comparedCourses.length === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-3xl border-t border-slate-700 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-xl sm:p-6 animate-in slide-in-from-bottom-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Scale className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Course Comparison Matrix</h3>
              <p className="text-xs text-slate-400">
                Comparing {comparedCourses.length} programs side-by-side
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClear}
              className="text-xs text-rose-400 hover:text-rose-300 px-3 py-1.5 rounded-lg border border-rose-500/20 hover:bg-rose-500/10 transition-colors flex items-center gap-1"
            >
              <Trash2 className="h-3 w-3" />
              <span>Clear All</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="mt-6 overflow-x-auto pb-4">
          <div className="grid grid-flow-col auto-cols-[minmax(280px,1fr)] gap-4">
            {comparedCourses.map((c) => {
              const title = c.title[language] || c.title.en;
              const entry = c.entryRequirements[language] || c.entryRequirements.en;
              return (
                <div 
                  key={c.id} 
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {c.code}
                      </span>
                      <button
                        onClick={() => onRemove(c.id)}
                        className="text-slate-500 hover:text-rose-400 transition-colors"
                        title="Remove"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <h4 className="font-bold text-slate-100 text-sm leading-snug line-clamp-2">
                      {title}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium">
                      {c.instituteName}
                    </p>

                    <div className="space-y-2 text-xs pt-2 border-t border-slate-800">
                      <div>
                        <span className="text-slate-500 text-[10px] uppercase block">Fees & Cost</span>
                        <span className="font-semibold text-emerald-400">
                          {c.fees.isFreeGovernment ? 'Free (Govt State Quota)' : c.fees.amount}
                        </span>
                      </div>

                      <div>
                        <span className="text-slate-500 text-[10px] uppercase block">Duration</span>
                        <span className="text-slate-300 font-medium">{c.duration}</span>
                      </div>

                      <div>
                        <span className="text-slate-500 text-[10px] uppercase block">Qualification Level</span>
                        <span className="text-cyan-300 font-medium">
                          {c.nvqLevel ? `NVQ Level ${c.nvqLevel}` : `SLQF Level ${c.slqfLevel || 'Undergraduate'}`}
                        </span>
                      </div>

                      <div>
                        <span className="text-slate-500 text-[10px] uppercase block">Loan Eligibility</span>
                        <span className="text-slate-300">
                          {c.fees.isLoanEligible ? '✓ IFSLS Eligible (MoHE)' : 'N/A'}
                        </span>
                      </div>

                      <div>
                        <span className="text-slate-500 text-[10px] uppercase block">Entry Requirement</span>
                        <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-3">
                          {entry}
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={c.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
