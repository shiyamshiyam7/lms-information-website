import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CourseDetailModal } from './components/CourseDetailModal';
import { CompareDrawer } from './components/CompareDrawer';
import { SavedModal } from './components/SavedModal';
import { HomePage } from './pages/HomePage';
import { AiAdvisorPage } from './pages/AiAdvisorPage';
import { CourseDirectoryPage } from './pages/CourseDirectoryPage';
import { NoticesPage } from './pages/NoticesPage';
import { HelpDeskPage } from './pages/HelpDeskPage';
import { coursesData } from './data/coursesData';
import { Course } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<string>('all');

  // Modal & Drawers state
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<Course | null>(null);
  const [savedCourseIds, setSavedCourseIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('lankaedu_saved_ids');
      return saved ? JSON.parse(saved) : ['uom-cse-01', 'sliit-it-se-02'];
    } catch {
      return ['uom-cse-01', 'sliit-it-se-02'];
    }
  });

  const [comparedCourseIds, setComparedCourseIds] = useState<string[]>([]);
  const [isCompareDrawerOpen, setIsCompareDrawerOpen] = useState(false);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('lankaedu_saved_ids', JSON.stringify(savedCourseIds));
  }, [savedCourseIds]);

  const handleToggleBookmark = (courseId: string) => {
    setSavedCourseIds((prev) => 
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleToggleCompare = (course: Course) => {
    setComparedCourseIds((prev) => {
      if (prev.includes(course.id)) {
        return prev.filter((id) => id !== course.id);
      }
      if (prev.length >= 3) {
        // limit to 3 courses max
        return [...prev.slice(1), course.id];
      }
      return [...prev, course.id];
    });
    setIsCompareDrawerOpen(true);
  };

  const handleRemoveCompare = (courseId: string) => {
    setComparedCourseIds((prev) => prev.filter((id) => id !== courseId));
  };

  const handleClearCompare = () => {
    setComparedCourseIds([]);
    setIsCompareDrawerOpen(false);
  };

  const handleHomeSearchSubmit = (query: string, category?: string) => {
    setSearchQuery(query);
    if (category) {
      setSearchCategory(category);
    }
    setActiveTab('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const comparedCourses = coursesData.filter((c) => comparedCourseIds.includes(c.id));
  const savedCourses = coursesData.filter((c) => savedCourseIds.includes(c.id));

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
        {/* Navigation Bar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          savedCount={savedCourseIds.length}
          onOpenSavedModal={() => setIsSavedModalOpen(true)}
        />

        {/* Main Content Area */}
        <main className="flex-1">
          {activeTab === 'home' && (
            <HomePage
              onSearchSubmit={handleHomeSearchSubmit}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectCourse={(course) => setSelectedCourseForModal(course)}
              savedCourseIds={savedCourseIds}
              onToggleBookmark={handleToggleBookmark}
              comparedCourseIds={comparedCourseIds}
              onToggleCompare={handleToggleCompare}
            />
          )}

          {activeTab === 'advisor' && (
            <AiAdvisorPage
              onSelectCourse={(course) => setSelectedCourseForModal(course)}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {activeTab === 'courses' && (
            <CourseDirectoryPage
              initialSearch={searchQuery}
              initialCategory={searchCategory}
              onSelectCourse={(course) => setSelectedCourseForModal(course)}
              savedCourseIds={savedCourseIds}
              onToggleBookmark={handleToggleBookmark}
              comparedCourseIds={comparedCourseIds}
              onToggleCompare={handleToggleCompare}
            />
          )}

          {activeTab === 'notices' && <NoticesPage />}

          {activeTab === 'helpdesk' && <HelpDeskPage />}
        </main>

        {/* Course Details Modal */}
        <CourseDetailModal
          course={selectedCourseForModal}
          onClose={() => setSelectedCourseForModal(null)}
          isBookmarked={selectedCourseForModal ? savedCourseIds.includes(selectedCourseForModal.id) : false}
          onToggleBookmark={handleToggleBookmark}
        />

        {/* Course Comparison Drawer */}
        <CompareDrawer
          comparedCourses={comparedCourses}
          onRemove={handleRemoveCompare}
          onClear={handleClearCompare}
          isOpen={isCompareDrawerOpen && comparedCourses.length > 0}
          onClose={() => setIsCompareDrawerOpen(false)}
        />

        {/* Bookmarked / Saved Courses Modal */}
        <SavedModal
          isOpen={isSavedModalOpen}
          onClose={() => setIsSavedModalOpen(false)}
          savedCourses={savedCourses}
          onRemove={handleToggleBookmark}
          onSelectCourse={(course) => setSelectedCourseForModal(course)}
        />

        {/* Floating Compare Badge if compared items exist and drawer is closed */}
        {!isCompareDrawerOpen && comparedCourses.length > 0 && (
          <button
            onClick={() => setIsCompareDrawerOpen(true)}
            className="fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 font-bold text-slate-950 shadow-2xl shadow-emerald-500/40 hover:brightness-110 transition-all cursor-pointer animate-bounce-slow"
          >
            <span>Compare Matrix ({comparedCourses.length})</span>
          </button>
        )}

        {/* Global Footer */}
        <Footer setActiveTab={setActiveTab} />
      </div>
    </LanguageProvider>
  );
}
