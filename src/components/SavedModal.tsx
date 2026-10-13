import React from 'react';
import { X, Bookmark, ExternalLink, ArrowRight, Trash2 } from 'lucide-react';
import { Course } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface SavedModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedCourses: Course[];
  onRemove: (id: string) => void;
  onSelectCourse: (course: Course) => void;
}

export const SavedModal: React.FC<SavedModalProps> = ({
  isOpen,
  onClose,
  savedCourses,
  onRemove,
  onSelectCourse
}) => {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Bookmark className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Bookmarked Courses</h3>
              <p className="text-xs text-slate-400">
                {savedCourses.length} programs saved in your session
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto space-y-3 pr-1">
          {savedCourses.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <Bookmark className="h-10 w-10 mx-auto mb-2 text-slate-600 opacity-60" />
              <p className="text-sm font-medium">No courses saved yet.</p>
              <p className="text-xs text-slate-500 mt-1">
                Click the bookmark icon on any course card in the directory to save it here.
              </p>
            </div>
          ) : (
            savedCourses.map((c) => {
              const title = c.title[language] || c.title.en;
              return (
                <div
                  key={c.id}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4 hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-1 flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {c.code}
                    </span>
                    <h4 
                      onClick={() => { onSelectCourse(c); onClose(); }}
                      className="font-bold text-white text-sm truncate cursor-pointer hover:text-emerald-300 transition-colors"
                    >
                      {title}
                    </h4>
                    <p className="text-xs text-slate-400 truncate">
                      {c.instituteName} • {c.fees.isFreeGovernment ? 'Free (Govt)' : c.fees.amount}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => { onSelectCourse(c); onClose(); }}
                      className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 text-xs"
                      title="View Details"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <a
                      href={c.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-emerald-400 hover:text-emerald-300 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-xs"
                      title="Apply Official"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <button
                      onClick={() => onRemove(c.id)}
                      className="p-2 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-rose-500/10 text-xs transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
};
