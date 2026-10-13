import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const translations: Record<string, Record<Language, string>> = {
  // Navigation
  nav_home: {
    en: 'Home & Search',
    si: 'මුල් පිටුව සහ සෙවුම',
    ta: 'முகப்பு & தேடல்'
  },
  nav_ai_advisor: {
    en: 'AI Career Advisor',
    si: 'AI අධ්‍යාපන උපදේශක',
    ta: 'AI தொழில் ஆலோசகர்'
  },
  nav_courses: {
    en: 'Course Directory',
    si: 'පාඨමාලා නාමාවලිය',
    ta: 'பாடநெறி விபரம்'
  },
  nav_notices: {
    en: 'News & Notices',
    si: 'පුවත් සහ නිවේදන',
    ta: 'செய்திகள் & அறிவிப்புகள்'
  },
  nav_helpdesk: {
    en: 'Help Desk & FAQ',
    si: 'සහාය සහ ප්‍රශ්නෝත්තර',
    ta: 'உதவி மையம் & FAQ'
  },
  brand_subtitle: {
    en: 'Sri Lanka National Education & Vocational Hub',
    si: 'ශ්‍රී ලංකා ජාතික අධ්‍යාපන හා වෘත්තීය ද්වාරය',
    ta: 'இலங்கை தேசிய கல்வி & தொழிற்பயிற்சி தளம்'
  },

  // Hero
  hero_badge: {
    en: 'Official Higher Education & TVEC Directory',
    si: 'නිල උසස් අධ්‍යාපන සහ TVEC තොරතුරු මධ්‍යස්ථානය',
    ta: 'அதிகாரப்பூர்வ உயர் கல்வி & TVEC வழிகாட்டி'
  },
  hero_title_1: {
    en: 'Discover Your Future in',
    si: 'ඔබේ අනාගතය තෝරාගන්න',
    ta: 'உங்கள் எதிர்காலத்தை வடிவமைக்கவும்'
  },
  hero_title_2: {
    en: 'Sri Lankan Higher Education',
    si: 'ශ්‍රී ලංකා උසස් අධ්‍යාපනයෙන්',
    ta: 'இலங்கை உயர் கல்வியினூடாக'
  },
  hero_description: {
    en: 'Find accredited degree programs, NVQ vocational training, and government-approved courses from leading universities and technical institutes across Sri Lanka.',
    si: 'දිවයිනේ ප්‍රමුඛ රාජ්‍ය සහ පෞද්ගලික විශ්වවිද්‍යාල, TVEC අනුමත NVQ වෘත්තීය පාඨමාලා සහ ශිෂ්‍යත්ව අවස්ථා සියල්ල එකම තැනකින් සොයාගන්න.',
    ta: 'இலங்கையின் முன்னணி பல்கலைக்கழகங்கள், TVEC அங்கீகரிக்கப்பட்ட NVQ தொழிற்பயிற்சிகள் மற்றும் அரசு அங்கீகாரம் பெற்ற உயர்கல்வி நெறிகளை ஒரே தளத்தில் தேடுங்கள்.'
  },
  search_placeholder: {
    en: 'Search courses, degree titles, NVQ levels, or institutes (e.g. Software Engineering, NVQ 4, UoM)...',
    si: 'පාඨමාලා, උපාධි, NVQ මට්ටම් හෝ ආයතන සොයන්න (උදා: Software Engineering, NVQ 4, UoM)...',
    ta: 'பாடநெறிகள், பட்டப்படிப்புகள், NVQ மட்டங்கள் அல்லது நிறுவனங்களை தேடுங்கள்...'
  },
  search_btn: {
    en: 'Search Courses',
    si: 'පාඨමාලා සොයන්න',
    ta: 'தேடுக'
  },

  // Categories
  cat_all: { en: 'All Disciplines', si: 'සියලු ක්ෂේත්‍ර', ta: 'அனைத்து துறைகளும்' },
  cat_it: { en: 'IT & Software', si: 'තොරතුරු තාක්ෂණ', ta: 'தகவல் தொழில்நுட்பம்' },
  cat_engineering: { en: 'Engineering & Tech', si: 'ඉංජිනේරු හා තාක්ෂණ', ta: 'பொறியியல் & தொழில்நுட்பம்' },
  cat_business: { en: 'Business & Management', si: 'ව්‍යාපාර හා කළමනාකරණ', ta: 'வணிகம் & முகாமைத்துவம்' },
  cat_healthcare: { en: 'Healthcare & Nursing', si: 'සෞඛ්‍ය හා හෙද', ta: 'சுகாதாரம் & தாதியியல்' },
  cat_vocational: { en: 'Vocational & NVQ', si: 'වෘත්තීය හා NVQ', ta: 'தொழிற்கல்வி & NVQ' },
  cat_science: { en: 'Applied Science', si: 'ව්‍යවහාරික විද්‍යා', ta: 'பயன்பாட்டு விஞ்ஞானம்' },
  cat_arts: { en: 'Law & Humanities', si: 'නීතිය හා මානව ශාස්ත්‍ර', ta: 'சட்டம் & கலைகள்' },

  // Stats
  stat_courses: { en: 'Accredited Programs', si: 'පිළිගත් පාඨමාලා', ta: 'அங்கீகரிக்கப்பட்ட நெறிகள்' },
  stat_institutes: { en: 'State & Private Institutes', si: 'රාජ්‍ය හා පෞද්ගලික ආයතන', ta: 'அரசு & தனியார் நிறுவனங்கள்' },
  stat_districts: { en: 'Islandwide Districts', si: 'දිවයිනේ සියලු දිස්ත්‍රික්ක', ta: 'நாடளாவிய மாவட்டங்கள்' },
  stat_tvec: { en: 'NVQ & UGC Verified', si: 'UGC හා TVEC සහතිකලත්', ta: 'NVQ & UGC உறுதிப்படுத்தல்' },

  // Partners
  partners_title: {
    en: 'Accredited Institutions & Universities',
    si: 'පිළිගත් රාජ්‍ය හා පෞද්ගලික ආයතන',
    ta: 'அங்கீகரிக்கப்பட்ட நிறுவனங்கள் & பல்கலைக்கழகங்கள்'
  },

  // Pathways
  pathways_title: {
    en: 'Choose Your Educational Pathway',
    si: 'ඔබේ අධ්‍යාපනික මාවත තෝරාගන්න',
    ta: 'உங்கள் கல்விப் பாதையைத் தேர்ந்தெடுக்கவும்'
  },
  pathway_ugc_title: {
    en: 'UGC State Universities',
    si: 'රාජ්‍ය විශ්වවිද්‍යාල ප්‍රවේශය',
    ta: 'அரசு பல்கலைக்கழகங்கள்'
  },
  pathway_ugc_desc: {
    en: 'Free university education through A/L Z-Score selection. 17 state universities across Sri Lanka.',
    si: 'උසස් පෙළ Z-Score පදනමින් නොමිලේ රාජ්‍ය විශ්වවිද්‍යාල අධ්‍යාපනය ලබාගැනීම.',
    ta: 'உ/த Z-புள்ளி அடிப்படையிலான இலவச அரசு பல்கலைக்கழக கல்வி.'
  },
  pathway_nvq_title: {
    en: 'TVEC NVQ Skills Route',
    si: 'TVEC NVQ වෘත්තීය නිපුණතා මාවත',
    ta: 'TVEC NVQ தொழிற்திறன் பாதை'
  },
  pathway_nvq_desc: {
    en: 'From Level 3 Craftsmanship to Level 7 B.Tech Degree through NAITA, VTA, and CGTTI.',
    si: 'NVQ 3 මට්ටමේ සිට NVQ 7 තාක්ෂණවේදී උපාධිය දක්වා වෘත්තීය ප්‍රගතිය.',
    ta: 'NVQ 3 மட்டத்திலிருந்து NVQ 7 பட்டப்படிப்பு வரையிலான தொழிற்பயிற்சி.'
  },
  pathway_nonstate_title: {
    en: 'Non-State & Student Loans',
    si: 'පෞද්ගලික උපාධි සහ පොලී රහිත ණය',
    ta: 'அரசல்லா பட்டங்கள் & மாணவர் கடன்கள்'
  },
  pathway_nonstate_desc: {
    en: 'Ministry of Education Interest-Free Student Loan Scheme (IFSLS) with approved institutes like SLIIT, CINEC, NSBM.',
    si: 'අධ්‍යාපන අමාත්‍යාංශයේ පොලී රහිත ශිෂ්‍ය ණය ක්‍රමය යටතේ පිළිගත් උපාධි පාඨමාලා.',
    ta: 'அரசாங்க வட்டி இல்லா மாணவர் கடன் திட்டத்தின் கீழ் அங்கீகரிக்கப்பட்ட பட்டப்படிப்புகள்.'
  },

  // AI Advisor
  advisor_headline: {
    en: 'LankaEdu AI Academic & Career Counselor',
    si: 'LankaEdu AI අධ්‍යාපන සහ වෘත්තීය උපදේශක',
    ta: 'LankaEdu AI கல்வி & தொழில் வழிகாட்டி'
  },
  advisor_sub: {
    en: 'Enter your A/L results, Z-Score, O/L status, or dream career to receive instant personalized guidance aligned with Sri Lankan UGC cutoffs and NVQ frameworks.',
    si: 'ඔබේ උ/පෙළ ප්‍රතිඵල, Z-ලකුණ, සා/පෙළ හෝ වෘත්තීය අපේක්ෂාවන් ඇතුළත් කර ශ්‍රී ලංකා විශ්වවිද්‍යාල සහ NVQ පද්ධතියට අනුකූල මඟපෙන්වීම ලබාගන්න.',
    ta: 'உங்கள் உ/த முடிவுகள், Z-புள்ளி, சா/த அல்லது தொழில் கனவுகளைப் பதிவிட்டு இலங்கை அரச பல்கலைக்கழகங்கள் மற்றும் NVQ சார்ந்த ஆலோசனைகளைப் பெறுங்கள்.'
  },

  // Course Directory
  filter_title: { en: 'Filter Courses', si: 'පාඨමාලා පෙරහන', ta: 'வடிகட்டிகள்' },
  filter_institution_type: { en: 'Institution Type', si: 'ආයතන වර්ගය', ta: 'நிறுவன வகை' },
  filter_medium: { en: 'Medium of Instruction', si: 'ඉගැන්වීමේ මාධ්‍යය', ta: 'கற்பிக்கும் மொழி' },
  filter_location: { en: 'Province & District', si: 'පළාත සහ දිස්ත්‍රික්කය', ta: 'மாகாணம் & மாவட்டம்' },
  filter_fee: { en: 'Fee & Financial Aid', si: 'ගාස්තු සහ මූල්‍ය සහන', ta: 'கட்டணம் & நிதி உதவி' },
  free_government: { en: 'Government Free / UGC', si: 'රජයේ නොමිලේ / UGC', ta: 'அரசு இலவசம் / UGC' },
  loan_eligible: { en: 'Govt Loan Eligible (IFSLS)', si: 'පොලී රහිත ණය හිමි (IFSLS)', ta: 'அரசு கடன் தகுதி (IFSLS)' },

  // Notices
  notices_headline: {
    en: 'Official Educational News & Government Gazettes',
    si: 'නිල අධ්‍යාපනික පුවත් සහ රජයේ ගැසට් නිවේදන',
    ta: 'அதிகாரப்பூர்வ கல்விச் செய்திகள் & அரசு வர்த்தமானி'
  },
  notices_sub: {
    en: 'Stay updated with University Grants Commission (UGC) intakes, TVEC assessment dates, and Ministry scholarships.',
    si: 'විශ්වවිද්‍යාල ප්‍රතිපාදන කොමිෂන් සභාව (UGC), TVEC විභාග සහ අමාත්‍යාංශ ශිෂ්‍යත්ව පිළිබඳ නවතම තොරතුරු.',
    ta: 'பல்கலைக்கழக மானியங்கள் ஆணைக்குழு (UGC), TVEC மற்றும் அமைச்சு புலமைப்பரிசில்கள் பற்றிய புதிய தகவல்கள்.'
  },

  // Common UI
  duration: { en: 'Duration', si: 'කාලසීමාව', ta: 'கால அளவு' },
  fees: { en: 'Course Fee', si: 'පාඨමාලා ගාස්තුව', ta: 'பாடநெறி கட்டணம்' },
  entry_req: { en: 'Entry Requirements', si: 'ඇතුළත්වීමේ සුදුසුකම්', ta: 'நுழைவுத் தகுதிகள்' },
  apply_now: { en: 'Apply Official', si: 'නිල අයදුම්පත', ta: 'விண்ணப்பிக்க' },
  view_details: { en: 'View Details', si: 'විස්තර බලන්න', ta: 'முழு விபரம்' },
  compare: { en: 'Compare', si: 'සසඳන්න', ta: 'ஒப்பிடு' },
  saved: { en: 'Saved', si: 'සුරැකි', ta: 'சேமிக்கப்பட்டது' },
  close: { en: 'Close', si: 'වසන්න', ta: 'மூடுக' },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('lankaedu_lang');
    if (saved === 'si' || saved === 'ta' || saved === 'en') {
      return saved;
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('lankaedu_lang', lang);
  };

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    if (translations[key] && translations[key]['en']) {
      return translations[key]['en'];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
