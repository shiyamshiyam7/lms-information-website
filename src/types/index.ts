export type Language = 'en' | 'si' | 'ta';

export type Category = 
  | 'it' 
  | 'engineering' 
  | 'business' 
  | 'healthcare' 
  | 'vocational' 
  | 'science' 
  | 'arts';

export type InstituteType = 
  | 'state_university' 
  | 'semi_government' 
  | 'tvec_vocational' 
  | 'private_degree' 
  | 'professional_body';

export type Medium = 'English' | 'Sinhala' | 'Tamil' | 'Bilingual';

export type StudyMode = 'Full-Time' | 'Part-Time' | 'Weekend' | 'Distance / Online';

export interface Course {
  id: string;
  title: {
    en: string;
    si: string;
    ta: string;
  };
  code: string;
  instituteId: string;
  instituteName: string;
  instituteType: InstituteType;
  category: Category;
  slqfLevel?: number; // Sri Lanka Qualifications Framework Level (1-12)
  nvqLevel?: number;  // National Vocational Qualification Level (1-7)
  duration: string;
  studyMode: StudyMode;
  medium: Medium[];
  locations: string[]; // e.g. ["Colombo", "Kandy"]
  province: string;
  fees: {
    amount: string; // e.g. "Free (UGC State Quota)" or "LKR 1,250,000 total"
    currency: string;
    isFreeGovernment: boolean;
    isLoanEligible: boolean; // MoHE Interest-free loan scheme
  };
  entryRequirements: {
    en: string;
    si: string;
    ta: string;
    minALPasses?: number;
    alStreams?: string[];
    minZScoreGuide?: string;
    olRequirements?: string;
    nvqRequirement?: string;
  };
  syllabusHighlights: string[];
  careerProspects: string[];
  officialUrl: string;
  featured?: boolean;
  rating: number;
  accreditedBy: string[]; // ['UGC', 'TVEC', 'IESL', 'CSSL']
}

export interface Institute {
  id: string;
  name: string;
  shortName: string;
  type: InstituteType;
  location: string;
  province: string;
  website: string;
  established: number;
  badgeText: string;
  logoUrl?: string;
  color: string;
  description: {
    en: string;
    si: string;
    ta: string;
  };
}

export interface Notice {
  id: string;
  title: {
    en: string;
    si: string;
    ta: string;
  };
  category: 'ugc' | 'nvq' | 'scholarship' | 'exam';
  issuingAuthority: string;
  date: string;
  deadline?: string;
  summary: {
    en: string;
    si: string;
    ta: string;
  };
  officialLink: string;
  isUrgent?: boolean;
  gazetteNumber?: string;
}

export interface FAQItem {
  id: string;
  question: {
    en: string;
    si: string;
    ta: string;
  };
  answer: {
    en: string;
    si: string;
    ta: string;
  };
  category: 'admissions' | 'nvq' | 'loans' | 'slqf' | 'appeals';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  recommendations?: Course[];
  quickActions?: string[];
}

export interface StudentProfile {
  examType: 'al' | 'ol' | 'degree_seeking' | 'working_tech';
  stream?: string;
  district?: string;
  zScore?: string;
  grades?: { [subject: string]: string };
  interests: string[];
  budgetPreference: 'free_state' | 'loan_supported' | 'private_affordable' | 'any';
}
