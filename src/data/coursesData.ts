import { Course } from '../types';

export const coursesData: Course[] = [
  // --- IT & Software ---
  {
    id: 'uom-cse-01',
    title: {
      en: 'B.Sc. (Hons) in Computer Science & Engineering',
      si: 'පරිගණක විද්‍යා හා ඉංජිනේරු ගෞරව උපාධිය',
      ta: 'கணினி விஞ்ஞானம் & பொறியியல் கௌரவப் பட்டம்'
    },
    code: 'UOM-ENG-CSE',
    instituteId: 'uom',
    instituteName: 'University of Moratuwa',
    instituteType: 'state_university',
    category: 'it',
    slqfLevel: 6,
    duration: '4 Years (Full-Time)',
    studyMode: 'Full-Time',
    medium: ['English'],
    locations: ['Katubedda, Moratuwa'],
    province: 'Western',
    fees: {
      amount: 'Free (Government State Quota)',
      currency: 'LKR',
      isFreeGovernment: true,
      isLoanEligible: false
    },
    entryRequirements: {
      en: 'G.C.E. A/L in Physical Science (Maths Stream) with minimum 3 S passes and top district Z-Score cutoff (Typically Z > 2.05 in Colombo).',
      si: 'උසස් පෙළ භෞතික විද්‍යා (ගණිත) අංශයෙන් සාමාර්ථ 3ක් සහ ඉහළ Z-Score අගයක් (කොළඹ Z > 2.05 පමණ).',
      ta: 'உ/த பௌதிக விஞ்ஞான (கணித) பிரிவில் 3 சித்தி மற்றும் மாவட்டத்தின் மிக உயர்ந்த Z-புள்ளி.'
    },
    syllabusHighlights: [
      'Algorithms & Data Structures',
      'Computer Architecture & OS Kernel',
      'Artificial Intelligence & Deep Learning',
      'Distributed Systems & Cloud Infrastructure',
      'Final Year Industrial Research Project'
    ],
    careerProspects: [
      'Software Architect',
      'Machine Learning Engineer',
      'Cloud Solutions Specialist',
      'Tech Startup Founder'
    ],
    officialUrl: 'https://cse.uom.lk',
    featured: true,
    rating: 4.9,
    accreditedBy: ['UGC', 'IESL', 'Washington Accord', 'CSSL']
  },
  {
    id: 'sliit-it-se-02',
    title: {
      en: 'B.Sc. (Hons) in Information Technology - Software Engineering',
      si: 'තොරතුරු තාක්ෂණ හා මෘදුකාංග ඉංජිනේරු ගෞරව උපාධිය',
      ta: 'தகவல் தொழில்நுட்பம் & மென்பொருள் பொறியியல் கௌரவப் பட்டம்'
    },
    code: 'SLIIT-IT-SE',
    instituteId: 'sliit',
    instituteName: 'Sri Lanka Institute of Information Technology',
    instituteType: 'private_degree',
    category: 'it',
    slqfLevel: 6,
    duration: '4 Years (Full-Time / Part-Time)',
    studyMode: 'Full-Time',
    medium: ['English'],
    locations: ['Malabe', 'Colombo', 'Kandy', 'Kurunegala'],
    province: 'Western',
    fees: {
      amount: 'LKR 2,400,000 Total (Installments per Semester)',
      currency: 'LKR',
      isFreeGovernment: false,
      isLoanEligible: true
    },
    entryRequirements: {
      en: 'Minimum 3 passes in G.C.E. A/L (Any stream including Maths, Bio, Commerce, Tech, or Arts) + English pass at O/L, or SLIIT Foundation Certificate.',
      si: 'උසස් පෙළ ඕනෑම විෂය ධාරාවකින් සාමාර්ථ 3ක් සහ සා/පෙළ ඉංග්‍රීසි සාමාර්ථයක්, හෝ SLIIT පදනම් පාඨමාලාව.',
      ta: 'உ/த ஏதேனும் ஒரு பிரிவில் 3 சித்தி மற்றும் சா/த ஆங்கில சித்தி அல்லது SLIIT அடிப்படை சான்றிதழ்.'
    },
    syllabusHighlights: [
      'Object Oriented Programming (Java/C#)',
      'Full Stack Web & Microservices Architecture',
      'Agile Software Lifecycle & DevOps (Docker/K8s)',
      'Enterprise Application Development',
      '1 Year Compulsory Industry Internship'
    ],
    careerProspects: [
      'Full Stack Developer',
      'DevOps Engineer',
      'QA Automation Lead',
      'Scrum Master'
    ],
    officialUrl: 'https://www.sliit.lk/computing/programmes/software-engineering-degree/',
    featured: true,
    rating: 4.8,
    accreditedBy: ['MoHE Approved', 'UGC Recognized', 'CSSL', 'IET Accredited']
  },
  {
    id: 'nibm-hndse-03',
    title: {
      en: 'Higher National Diploma in Software Engineering (HNDSE)',
      si: 'මෘදුකාංග ඉංජිනේරු උසස් ජාතික ඩිප්ලෝමාව (HNDSE)',
      ta: 'மென்பொருள் பொறியியல் உயர் தேசிய டிப்ளோமா'
    },
    code: 'NIBM-HNDSE-NVQ6',
    instituteId: 'nibm',
    instituteName: 'National Institute of Business Management',
    instituteType: 'semi_government',
    category: 'it',
    slqfLevel: 4,
    nvqLevel: 6,
    duration: '18 Months (Full-Time / Weekend)',
    studyMode: 'Full-Time',
    medium: ['English'],
    locations: ['Colombo 07', 'Kandy', 'Galle', 'Matara', 'Kurunegala'],
    province: 'Western',
    fees: {
      amount: 'LKR 380,000 (Installments Available)',
      currency: 'LKR',
      isFreeGovernment: false,
      isLoanEligible: true
    },
    entryRequirements: {
      en: 'G.C.E. A/L with 2 passes OR NIBM Diploma in Computer Science (DCS) OR O/L with 3 years relevant IT experience.',
      si: 'උ/පෙළ සාමාර්ථ 2ක් හෝ NIBM පරිගණක විද්‍යා ඩිප්ලෝමාව (DCS) හෝ අදාළ ක්ෂේත්‍ර අත්දැකීම්.',
      ta: 'உ/த 2 சித்தி அல்லது NIBM கணினி விஞ்ஞான டிப்ளோமா.'
    },
    syllabusHighlights: [
      'Java & C# Enterprise Systems',
      'Relational Database Management (PostgreSQL & Oracle)',
      'Mobile App Development (Flutter/React Native)',
      'Software Security & Testing',
      'Industry Capstone Project'
    ],
    careerProspects: [
      'Junior Software Engineer',
      'Mobile Application Developer',
      'Database Administrator',
      'Direct entry to Final Year Degree'
    ],
    officialUrl: 'https://www.nibm.lk',
    featured: true,
    rating: 4.7,
    accreditedBy: ['Ministry of Education', 'TVEC NVQ Level 6', 'Coventry University UK Pathway']
  },
  {
    id: 'uoc-bit-04',
    title: {
      en: 'Bachelor of Information Technology (BIT - External Degree)',
      si: 'තොරතුරු තාක්ෂණවේදී බාහිර උපාධිය (BIT - UCSC)',
      ta: 'தகவல் தொழில்நுட்ப இளமானி வெளிவாரிப் பட்டம்'
    },
    code: 'UCSC-BIT-EXT',
    instituteId: 'uoc',
    instituteName: 'University of Colombo',
    instituteType: 'state_university',
    category: 'it',
    slqfLevel: 6,
    duration: '3 Years (Flexible Distance / Part-Time)',
    studyMode: 'Distance / Online',
    medium: ['English'],
    locations: ['Islandwide Online / UCSC Colombo Exams'],
    province: 'Western',
    fees: {
      amount: 'LKR 165,000 total exam fees across 3 years',
      currency: 'LKR',
      isFreeGovernment: false,
      isLoanEligible: false
    },
    entryRequirements: {
      en: 'G.C.E. A/L 3 passes in one sitting (Any stream) with Credit in O/L Mathematics, OR FIT (Foundation in Information Technology) from UCSC.',
      si: 'උ/පෙළ එකවර සාමාර්ථ 3ක් (ඕනෑම විෂය ධාරාවකින්) සහ සා/පෙළ ගණිතය සම්මාන සාමාර්ථයක් (C).',
      ta: 'உ/த ஒரே அமர்வில் 3 சித்தி மற்றும் சா/த கணிதத்தில் திறமைச்சித்தி (C).'
    },
    syllabusHighlights: [
      'Computer Systems & Networking',
      'Web Technologies & REST APIs',
      'System Analysis & Design',
      'Information Security',
      'Independent Final Year Project'
    ],
    careerProspects: [
      'Associate Software Engineer',
      'IT Consultant',
      'System Analyst',
      'Postgraduate Degree Pathway'
    ],
    officialUrl: 'https://bit.ucsc.cmb.ac.lk',
    featured: false,
    rating: 4.8,
    accreditedBy: ['University of Colombo', 'UGC Approved', 'CSSL']
  },

  // --- Engineering & Technology ---
  {
    id: 'cgtti-auto-05',
    title: {
      en: 'National Diploma in Automobile Engineering (NVQ Level 5)',
      si: 'මෝටර් රථ ඉංජිනේරු ජාතික ඩිප්ලෝමාව (ජර්මන් ටෙක්)',
      ta: 'மோட்டார் வாகன பொறியியல் தேசிய டிப்ளோமா (NVQ 5)'
    },
    code: 'CGTTI-AUTO-NVQ5',
    instituteId: 'cgtti',
    instituteName: 'Ceylon German Technical Training Institute',
    instituteType: 'tvec_vocational',
    category: 'engineering',
    nvqLevel: 5,
    duration: '3.5 Years (Dual-System Training)',
    studyMode: 'Full-Time',
    medium: ['Sinhala', 'Tamil', 'English'],
    locations: ['Moratuwa', 'Kilinochchi'],
    province: 'Western',
    fees: {
      amount: 'Free (Nominal registration fee LKR 15,000)',
      currency: 'LKR',
      isFreeGovernment: true,
      isLoanEligible: false
    },
    entryRequirements: {
      en: 'G.C.E. O/L with 6 passes including Science and Mathematics (Credit pass preferred) + Competitive CGTTI Islandwide Entrance Examination.',
      si: 'සා/පෙළ ගණිතය සහ විද්‍යාව ඇතුළුව විෂයන් 6ක් සමත් වීම සහ ජර්මන් ටෙක් දිවයින පුරා පැවැත්වෙන ප්‍රවේශ විභාගය සමත් වීම.',
      ta: 'சா/த கணிதம் மற்றும் விஞ்ஞானம் உட்பட 6 பாடங்களில் சித்தி மற்றும் ஜேர்மன் டெக் போட்டிப் பரீட்சை சித்தி.'
    },
    syllabusHighlights: [
      'Internal Combustion Engines & Hybrid Powertrains',
      'Electronic Engine Management & OBD Diagnostics',
      'Transmission, Hydraulics & Pneumatics',
      'Vehicle Dynamics & Braking Control',
      '1 Year Compulsory Industry Apprentice Training'
    ],
    careerProspects: [
      'Automotive Diagnostic Specialist',
      'Fleet Maintenance Manager',
      'Overseas Technical Specialist (Middle East/Japan/Europe)',
      'Automotive Workshop Entrepreneur'
    ],
    officialUrl: 'https://www.cgtti.lk',
    featured: true,
    rating: 4.9,
    accreditedBy: ['TVEC Sri Lanka', 'German Chamber of Commerce AHK']
  },
  {
    id: 'uom-civil-06',
    title: {
      en: 'B.Sc. (Hons) in Civil Engineering',
      si: 'සිවිල් ඉංජිනේරු ගෞරව උපාධිය',
      ta: 'சிவில் பொறியியல் கௌரவப் பட்டம்'
    },
    code: 'UOM-ENG-CIVIL',
    instituteId: 'uom',
    instituteName: 'University of Moratuwa',
    instituteType: 'state_university',
    category: 'engineering',
    slqfLevel: 6,
    duration: '4 Years (Full-Time)',
    studyMode: 'Full-Time',
    medium: ['English'],
    locations: ['Katubedda, Moratuwa'],
    province: 'Western',
    fees: {
      amount: 'Free (Government State University)',
      currency: 'LKR',
      isFreeGovernment: true,
      isLoanEligible: false
    },
    entryRequirements: {
      en: 'G.C.E. A/L in Physical Science (Combined Maths, Physics, Chemistry) with competitive district Z-Score.',
      si: 'උ/පෙළ භෞතික විද්‍යා (සංයුක්ත ගණිතය, භෞතික විද්‍යාව, රසායන විද්‍යාව) සහ ඉහළ Z-Score අගයක්.',
      ta: 'உ/த பௌதிக விஞ்ஞானப் பிரிவில் (இணைந்த கணிதம், பௌதிகவியல், இரசாயனவியல்) தகுதியான Z-புள்ளி.'
    },
    syllabusHighlights: [
      'Structural Analysis & Concrete Mechanics',
      'Geotechnical & Foundation Engineering',
      'Hydraulics & Water Resources Management',
      'Highway Engineering & Transport Planning',
      'Environmental Impact Assessment'
    ],
    careerProspects: [
      'Chartered Civil Engineer (IESL)',
      'Structural Consultant',
      'Project Construction Manager',
      'Infrastructure Planner'
    ],
    officialUrl: 'https://civil.uom.lk',
    featured: false,
    rating: 4.9,
    accreditedBy: ['UGC', 'IESL', 'Washington Accord']
  },
  {
    id: 'naita-mech-07',
    title: {
      en: 'NVQ Level 4 Mechatronics & Industrial Automation Technician',
      si: 'මෙක්ට්‍රොනික්ස් සහ කාර්මික ස්වයංක්‍රීයකරණ කාර්මික ශිල්පී (NVQ 4)',
      ta: 'மெக்கட்ரானிக்ஸ் & தொழிற்சாலை தன்னியக்க தொழில்நுட்பவியலாளர்'
    },
    code: 'NAITA-MECH-NVQ4',
    instituteId: 'naita',
    instituteName: 'National Apprentice and Industrial Training Authority',
    instituteType: 'tvec_vocational',
    category: 'vocational',
    nvqLevel: 4,
    duration: '18 Months (Apprenticeship with Monthly Allowance)',
    studyMode: 'Full-Time',
    medium: ['Sinhala', 'Tamil'],
    locations: ['Katubedda', 'Kandy', 'Kurunegala', 'Galle'],
    province: 'Western',
    fees: {
      amount: 'Free (Student receives Monthly Training Stipend)',
      currency: 'LKR',
      isFreeGovernment: true,
      isLoanEligible: false
    },
    entryRequirements: {
      en: 'G.C.E. O/L with 6 passes including Science and Mathematics. Age between 16 and 25 years.',
      si: 'සා/පෙළ ගණිතය සහ විද්‍යාව සමත් වීම. වයස අවුරුදු 16-25 අතර.',
      ta: 'சா/த கணிதம் மற்றும் விஞ்ஞானம் உட்பட 6 பாடங்களில் சித்தி. வயது 16 - 25.'
    },
    syllabusHighlights: [
      'PLC Programming & SCADA Integration',
      'Pneumatic & Electro-Pneumatic Control Systems',
      'Industrial Sensors, Transducers & Actuators',
      'Robotic Arms & CNC Machinery Operation',
      'Factory Safety & Lean Maintenance'
    ],
    careerProspects: [
      'Industrial Automation Technician',
      'Robotics Maintenance Tech',
      'Apparel & FMCG Plant Maintenance Supervisor',
      'Pathway to NVQ Level 5 Diploma'
    ],
    officialUrl: 'https://naita.gov.lk',
    featured: true,
    rating: 4.6,
    accreditedBy: ['TVEC', 'NAITA Industrial Council']
  },

  // --- Business & Management ---
  {
    id: 'nibm-ndbm-08',
    title: {
      en: 'National Diploma in Business Management (NDBM)',
      si: 'ව්‍යාපාර කළමනාකරණ ජාතික ඩිප්ලෝමාව (NDBM)',
      ta: 'வணிக முகாமைத்துவ தேசிய டிப்ளோமா'
    },
    code: 'NIBM-NDBM-NVQ5',
    instituteId: 'nibm',
    instituteName: 'National Institute of Business Management',
    instituteType: 'semi_government',
    category: 'business',
    slqfLevel: 3,
    nvqLevel: 5,
    duration: '1 Year (Full-Time / Weekend)',
    studyMode: 'Full-Time',
    medium: ['English'],
    locations: ['Colombo 07', 'Kandy', 'Galle', 'Kurunegala'],
    province: 'Western',
    fees: {
      amount: 'LKR 260,000',
      currency: 'LKR',
      isFreeGovernment: false,
      isLoanEligible: true
    },
    entryRequirements: {
      en: 'G.C.E. A/L with 2 passes in any stream OR O/L with NIBM Foundation / Certificate Course.',
      si: 'උ/පෙළ ඕනෑම විෂය ධාරාවකින් සාමාර්ථ 2ක් හෝ සා/පෙළ සමඟ NIBM පදනම් පාඨමාලාව.',
      ta: 'உ/த ஏதேனும் 2 பாடங்களில் சித்தி அல்லது NIBM அடிப்படை சான்றிதழ்.'
    },
    syllabusHighlights: [
      'Principles of Modern Management',
      'Financial Accounting & Corporate Reporting',
      'Strategic Marketing & Consumer Psychology',
      'Human Resource Management & Labor Law',
      'Business Analytics & Data Interpretation'
    ],
    careerProspects: [
      'Management Trainee',
      'Operations Coordinator',
      'Marketing Executive',
      'Direct Progression to Higher Diploma (HDBM)'
    ],
    officialUrl: 'https://www.nibm.lk/programmes/national-diploma-in-business-management/',
    featured: false,
    rating: 4.6,
    accreditedBy: ['TVEC NVQ Level 5', 'Ministry of Education']
  },
  {
    id: 'sliit-bm-09',
    title: {
      en: 'BBA (Hons) in Business Management & Supply Chain',
      si: 'ව්‍යාපාර කළමනාකරණ සහ සැපයුම් දාම ගෞරව උපාධිය',
      ta: 'வணிக முகாமைத்துவம் & வழங்கல் சங்கிலி கௌரவப் பட்டம்'
    },
    code: 'SLIIT-BBA-SCM',
    instituteId: 'sliit',
    instituteName: 'Sri Lanka Institute of Information Technology',
    instituteType: 'private_degree',
    category: 'business',
    slqfLevel: 6,
    duration: '4 Years (Full-Time)',
    studyMode: 'Full-Time',
    medium: ['English'],
    locations: ['Malabe', 'Colombo Metropolitan'],
    province: 'Western',
    fees: {
      amount: 'LKR 1,950,000 Total',
      currency: 'LKR',
      isFreeGovernment: false,
      isLoanEligible: true
    },
    entryRequirements: {
      en: 'G.C.E. A/L 3 passes in any stream (Commerce, Arts, Science, Tech) + pass in English at O/L.',
      si: 'උ/පෙළ ඕනෑම විෂය ධාරාවකින් සාමාර්ථ 3ක් සහ සා/පෙළ ඉංග්‍රීසි සමත් වීම.',
      ta: 'உ/த எந்தவொரு பிரிவிலும் 3 சித்தி மற்றும் சா/த ஆங்கிலத்தில் சித்தி.'
    },
    syllabusHighlights: [
      'Global Logistics & Port Management',
      'Procurement & Inventory Analytics',
      'ERP Systems (SAP S/4HANA Practicals)',
      'International Trade Law & Customs Operations',
      'Sustainable Green Supply Chains'
    ],
    careerProspects: [
      'Supply Chain Strategist',
      'Logistics Operations Lead',
      'Export/Import Compliance Officer',
      'Procurement Manager'
    ],
    officialUrl: 'https://www.sliit.lk/business/',
    featured: false,
    rating: 4.7,
    accreditedBy: ['UGC Recognized', 'CILT UK Accredited']
  },

  // --- Healthcare & Nursing ---
  {
    id: 'uop-nursing-10',
    title: {
      en: 'B.Sc. (Hons) in Nursing',
      si: 'හෙද විද්‍යා ගෞරව උපාධිය',
      ta: 'தாதியியல் கௌரவ இளமானிப் பட்டம்'
    },
    code: 'UOP-ALLIED-NURSE',
    instituteId: 'uoc',
    instituteName: 'University of Peradeniya / Colombo Allied Sciences',
    instituteType: 'state_university',
    category: 'healthcare',
    slqfLevel: 6,
    duration: '4 Years (Full-Time)',
    studyMode: 'Full-Time',
    medium: ['English'],
    locations: ['Peradeniya, Kandy / Colombo'],
    province: 'Central',
    fees: {
      amount: 'Free (Government State University)',
      currency: 'LKR',
      isFreeGovernment: true,
      isLoanEligible: false
    },
    entryRequirements: {
      en: 'G.C.E. A/L Biological Science stream (Biology, Chemistry, Physics/Agriculture) with qualifying district Z-Score.',
      si: 'උ/පෙළ ජීව විද්‍යා අංශයෙන් (ජීව විද්‍යාව, රසායන විද්‍යාව, භෞතික විද්‍යාව/කෘෂි විද්‍යාව) සුදුසු Z-Score අගයක්.',
      ta: 'உ/த உயிரியல் பிரிவில் (உயிரியல், இரசாயனவியல், பௌதிகவியல்) தகுதியான Z-புள்ளி.'
    },
    syllabusHighlights: [
      'Anatomy, Physiology & Pathophysiology',
      'Adult Medical-Surgical Nursing Care',
      'Maternal & Neonatal Healthcare',
      'Pharmacology & Clinical Dosages',
      'Clinical Rotations at Teaching Hospitals'
    ],
    careerProspects: [
      'Registered Nursing Officer (Sri Lanka & NHS UK / Australia)',
      'Clinical Nurse Specialist',
      'Hospital Quality Assurance Officer',
      'Academic Lecturer'
    ],
    officialUrl: 'https://ahs.pdn.ac.lk',
    featured: true,
    rating: 4.9,
    accreditedBy: ['UGC', 'Sri Lanka Medical Council (SLMC)', 'Ministry of Health']
  },
  {
    id: 'vta-nurse-11',
    title: {
      en: 'NVQ Level 4 Assistant Nurse & Healthcare Attendant',
      si: 'සහායක හෙද හා සෞඛ්‍ය උපස්ථායක (NVQ 4)',
      ta: 'உதவி தாதியர் & சுகாதார பராமரிப்பாளர் (NVQ 4)'
    },
    code: 'VTA-HEALTH-NVQ4',
    instituteId: 'vta',
    instituteName: 'Vocational Training Authority of Sri Lanka',
    instituteType: 'tvec_vocational',
    category: 'healthcare',
    nvqLevel: 4,
    duration: '1 Year (6 Months Theory + 6 Months Hospital Training)',
    studyMode: 'Full-Time',
    medium: ['Sinhala', 'Tamil'],
    locations: ['Colombo', 'Kandy', 'Galle', 'Jaffna', 'Badulla'],
    province: 'Islandwide',
    fees: {
      amount: 'LKR 45,000 (Subsidized by TVEC)',
      currency: 'LKR',
      isFreeGovernment: false,
      isLoanEligible: false
    },
    entryRequirements: {
      en: 'G.C.E. O/L with 6 passes including Science and Sinhala/Tamil. Age 18-35.',
      si: 'සා/පෙළ විද්‍යාව ඇතුළුව විෂයන් 6ක් සමත් වීම. වයස 18-35 අතර.',
      ta: 'சா/த விஞ்ஞானம் உட்பட 6 பாடங்களில் சித்தி. வயது 18-35.'
    },
    syllabusHighlights: [
      'Basic Patient Care & Vital Signs Monitoring',
      'Infection Prevention & Sterilization',
      'Elderly Care & Palliative Support',
      'First Aid & Emergency Response',
      '6 Months Hospital Ward Internship'
    ],
    careerProspects: [
      'Private Hospital Healthcare Assistant (Asiri, Nawaloka, Lanka Hospitals)',
      'Caregiver for Senior Living',
      'Foreign Caregiver Employment (Japan TITP / Israel Caregiver Visa)'
    ],
    officialUrl: 'https://vtasl.gov.lk',
    featured: false,
    rating: 4.5,
    accreditedBy: ['TVEC Recognized', 'PHSRC Registered']
  },

  // --- Vocational & NVQ Levels ---
  {
    id: 'vta-electrician-12',
    title: {
      en: 'NVQ Level 4 Electrician & Solar PV Installation Technician',
      si: 'විදුලි කාර්මික සහ සූර්ය බලශක්ති පද්ධති ශිල්පී (NVQ 4)',
      ta: 'மின் தொழில்நுட்பவியலாளர் & சூரிய மின்கல பொருத்துனர்'
    },
    code: 'VTA-ELEC-SOLAR',
    instituteId: 'vta',
    instituteName: 'Vocational Training Authority of Sri Lanka',
    instituteType: 'tvec_vocational',
    category: 'vocational',
    nvqLevel: 4,
    duration: '1 Year (Practical Workshop + On-Site Apprenticeship)',
    studyMode: 'Full-Time',
    medium: ['Sinhala', 'Tamil'],
    locations: ['Islandwide 25 Districts (VTA Centers)'],
    province: 'Islandwide',
    fees: {
      amount: 'Free (Government Funded with Toolkits)',
      currency: 'LKR',
      isFreeGovernment: true,
      isLoanEligible: false
    },
    entryRequirements: {
      en: 'G.C.E. O/L completed (Minimum passes in Math & Science preferred).',
      si: 'සා/පෙළ පෙනී සිටීම (ගණිතය සහ විද්‍යාව සමත් අයට ප්‍රමුඛතාව).',
      ta: 'சா/த தோற்றியமை (கணிதம் மற்றும் விஞ்ஞான சித்தி முன்னுரிமை).'
    },
    syllabusHighlights: [
      'Domestic & Industrial Electrical Wiring Regulations',
      'Three-Phase Motor Control Circuits',
      'Solar Photovoltaic (PV) Rooftop Design & Inverter Grid-Ties',
      'Earthing, Lightning Protection & Safety Testing',
      'CEB & LECO Standard Compliance'
    ],
    careerProspects: [
      'Licensed Domestic & Industrial Electrician',
      'Solar Energy Project Installer',
      'Middle East / Gulf Construction Tech',
      'Self-Employed Electrical Contractor'
    ],
    officialUrl: 'https://vtasl.gov.lk',
    featured: true,
    rating: 4.8,
    accreditedBy: ['TVEC NVQ Level 4', 'Sri Lanka Sustainable Energy Authority (SLSEA)']
  },

  // --- Maritime, Logistics & Applied Science ---
  {
    id: 'cinec-marine-13',
    title: {
      en: 'B.Sc. (Hons) in Marine Engineering & Naval Architecture',
      si: 'නාවික ඉංජිනේරු සහ නෞකා නිර්මාණ ගෞරව උපාධිය',
      ta: 'கடல்சார் பொறியியல் & கப்பல் வடிவமைப்பு கௌரவப் பட்டம்'
    },
    code: 'CINEC-MAR-ENG',
    instituteId: 'cinec',
    instituteName: 'CINEC Campus',
    instituteType: 'private_degree',
    category: 'engineering',
    slqfLevel: 6,
    duration: '4 Years (Includes Cadet Sea-Time Training)',
    studyMode: 'Full-Time',
    medium: ['English'],
    locations: ['Malabe, Colombo'],
    province: 'Western',
    fees: {
      amount: 'LKR 2,850,000 Total (Govt Loan Scheme Eligible)',
      currency: 'LKR',
      isFreeGovernment: false,
      isLoanEligible: true
    },
    entryRequirements: {
      en: 'G.C.E. A/L in Physical Science (Combined Maths, Physics, Chemistry) with 3 passes + Merchant Shipping Secretariat Medical Fitness.',
      si: 'උ/පෙළ ගණිත අංශයෙන් සාමාර්ථ 3ක් සහ නාවික වෙළඳ ලේකම් කාර්යාල වෛද්‍ය පරීක්ෂණ සමත් වීම.',
      ta: 'உ/த கணிதப் பிரிவில் 3 சித்தி மற்றும் கடல்சார் மருத்துவ சான்றிதழ்.'
    },
    syllabusHighlights: [
      'Marine Diesel Propulsion & Auxiliaries',
      'Naval Architecture & Hydrodynamics',
      'Ship Automation & High Voltage Electrical Systems',
      'Maritime Environmental Conventions (MARPOL / SOLAS)',
      'Engine Room Simulator Practical Drills'
    ],
    careerProspects: [
      'Chief Engineer (International Commercial Shipping)',
      'Shipyard Superintendent (Colombo Dockyard / Singapore)',
      'Offshore Oil & Gas Systems Engineer',
      'Maritime Safety Auditor'
    ],
    officialUrl: 'https://www.cinec.edu',
    featured: true,
    rating: 4.8,
    accreditedBy: ['Director General of Merchant Shipping', 'IMO White List', 'IESL']
  },

  // --- Law & Humanities ---
  {
    id: 'ousl-llb-14',
    title: {
      en: 'Bachelor of Laws (LL.B) Degree',
      si: 'නීතිවේදී (LL.B) උපාධිය',
      ta: 'சட்ட இளமானி (LL.B) பட்டம்'
    },
    code: 'OUSL-LAW-LLB',
    instituteId: 'ousl',
    instituteName: 'Open University of Sri Lanka',
    instituteType: 'state_university',
    category: 'arts',
    slqfLevel: 6,
    duration: '4 Years (Distance / Blended Learning)',
    studyMode: 'Distance / Online',
    medium: ['English', 'Sinhala', 'Tamil'],
    locations: ['Colombo Nawala', 'Kandy', 'Matara', 'Jaffna', 'Batticaloa'],
    province: 'Islandwide',
    fees: {
      amount: 'LKR 420,000 total across 4 levels (Subsidized State Rate)',
      currency: 'LKR',
      isFreeGovernment: false,
      isLoanEligible: true
    },
    entryRequirements: {
      en: 'Minimum 3 passes in G.C.E. A/L (Any stream) + Passing the National Law Selection Test and English Aptitude Test.',
      si: 'උ/පෙළ ඕනෑම විෂය ධාරාවකින් සාමාර්ථ 3ක් සහ ජාතික නීති ප්‍රවේශ සහ ඉංග්‍රීසි පරීක්ෂණය සමත් වීම.',
      ta: 'உ/த ஏதேனும் 3 பாடங்களில் சித்தி மற்றும் தேசிய சட்ட நுழைவுத் தேர்வு சித்தி.'
    },
    syllabusHighlights: [
      'Constitutional & Administrative Law of Sri Lanka',
      'Roman-Dutch Law & Law of Contracts',
      'Criminal Law & Fundamental Human Rights',
      'Commercial Law & Intellectual Property',
      'Moot Court & Legal Research Advocacy'
    ],
    careerProspects: [
      'Direct Entry to Sri Lanka Law College Final Exam (Attorney-at-Law)',
      'Corporate Legal Counsel',
      'State Counsel / Attorney General’s Department',
      'Human Rights Advocate'
    ],
    officialUrl: 'https://ou.ac.lk/faculty-of-humanities-and-social-sciences/department-of-legal-studies/',
    featured: true,
    rating: 4.8,
    accreditedBy: ['UGC Approved', 'Council of Legal Education Sri Lanka']
  },

  // --- SLTC Cloud Computing ---
  {
    id: 'sltc-cloud-15',
    title: {
      en: 'B.Sc. (Hons) in Cloud Computing & DevOps',
      si: 'වළාකුළු පරිගණක සහ ඩෙව්ඔප්ස් ගෞරව උපාධිය',
      ta: 'கிளவுட் கம்ப்யூட்டிங் & டெவ்ஆப்ஸ் கௌரவப் பட்டம்'
    },
    code: 'SLTC-TECH-CLOUD',
    instituteId: 'sltc',
    instituteName: 'SLTC Research University',
    instituteType: 'private_degree',
    category: 'it',
    slqfLevel: 6,
    duration: '4 Years (Residential Campus)',
    studyMode: 'Full-Time',
    medium: ['English'],
    locations: ['Padukka Tech Park, Colombo'],
    province: 'Western',
    fees: {
      amount: 'LKR 2,100,000 (Govt Loan Scheme IFSLS Approved)',
      currency: 'LKR',
      isFreeGovernment: false,
      isLoanEligible: true
    },
    entryRequirements: {
      en: 'G.C.E. A/L 3 passes in Maths, Technology (ET/BST), Bio, or Commerce streams with simple pass in O/L English.',
      si: 'උ/පෙළ ගණිත, තාක්ෂණවේදය, ජීව හෝ වාණිජ අංශයෙන් සාමාර්ථ 3ක්.',
      ta: 'உ/த கணிதம், தொழில்நுட்பம், உயிரியல் அல்லது வணிகப் பிரிவில் 3 சித்தி.'
    },
    syllabusHighlights: [
      'Cloud Architecture (AWS & Google Cloud Platforms)',
      'Continuous Integration & Continuous Deployment (CI/CD pipelines)',
      'Infrastructure as Code (Terraform & Ansible)',
      'Containerization & Kubernetes Cluster Orchestration',
      'Site Reliability Engineering & Cybersecurity'
    ],
    careerProspects: [
      'Cloud Solutions Architect',
      'DevOps Engineer',
      'Site Reliability Engineer (SRE)',
      'Platform Automation Specialist'
    ],
    officialUrl: 'https://sltc.ac.lk',
    featured: false,
    rating: 4.7,
    accreditedBy: ['Ministry of Higher Education Approved', 'UGC Recognized']
  }
];
