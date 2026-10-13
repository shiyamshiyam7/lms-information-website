import { Notice } from '../types';

export const noticesData: Notice[] = [
  {
    id: 'ugc-admission-2025',
    title: {
      en: 'UGC University Admissions Handbook & Online Portal Now Open',
      si: 'විශ්වවිද්‍යාල ප්‍රතිපාදන කොමිෂන් සභා ප්‍රවේශ අත්පොත සහ මාර්ගගත අයදුම්පත් කැඳවීම',
      ta: 'UGC பல்கலைக்கழக அனுமதி வழிகாட்டல் கையேடு & இணையத்தள விண்ணப்பம் திறக்கப்பட்டுள்ளது'
    },
    category: 'ugc',
    issuingAuthority: 'University Grants Commission (UGC)',
    date: 'October 10, 2026',
    deadline: 'November 15, 2026',
    summary: {
      en: 'The University Grants Commission has officially opened the online portal for University Admissions for candidates who sat for the G.C.E. Advanced Level Examination. Students can register course preferences and submit online forms.',
      si: 'උසස් පෙළ විභාගයට පෙනී සිටි සිසුන් සඳහා 2024/2025 අධ්‍යයන වර්ෂය සඳහා රාජ්‍ය විශ්වවිද්‍යාල පාඨමාලා තේරීම් මාර්ගගත අයදුම්පත් දැන් භාරගනු ලැබේ.',
      ta: 'உ/த பரீட்சை எழுதிய மாணவர்களுக்கான அரச பல்கலைக்கழக அனுமதி இணையத்தள விண்ணப்ப செயல்முறை தற்போது உத்தியோகபூர்வமாக ஆரம்பமாகியுள்ளது.'
    },
    officialLink: 'https://ugc.ac.lk/admissions',
    isUrgent: true,
    gazetteNumber: 'UGC/ADM/2026/04'
  },
  {
    id: 'mohe-ifsls-loan-08',
    title: {
      en: 'Interest-Free Student Loan Scheme (IFSLS) - 8th Intake Applications',
      si: 'පොලී රහිත ශිෂ්‍ය ණය යෝජනා ක්‍රමය (IFSLS) - 8 වන කණ්ඩායම අයදුම්පත්',
      ta: 'வட்டி இல்லா மாணவர் கடன் திட்டம் (IFSLS) - 8வது தொகுதி விண்ணப்பங்கள்'
    },
    category: 'scholarship',
    issuingAuthority: 'Ministry of Education (Higher Education Division)',
    date: 'October 05, 2026',
    deadline: 'November 30, 2026',
    summary: {
      en: 'Under the IFSLS scheme, eligible students with minimum 3 A/L passes who missed state university entry can pursue approved 4-year degrees at SLIIT, NSBM, CINEC, and SLTC with up to LKR 800,000 government-covered interest-free loans and monthly stipends.',
      si: 'රාජ්‍ය විශ්වවිද්‍යාල ප්‍රවේශය අහිමි වූ නමුත් උ/පෙළ සමත් සිසුන්ට SLIIT, CINEC, NSBM, SLTC ආදී පිළිගත් ආයතනවල උපාධි හැදෑරීම සඳහා රජයේ පූර්ණ පොලී රහිත ණය යෝජනා ක්‍රමය.',
      ta: 'அரசு பல்கலைக்கழக வாய்ப்பை தவறவிட்ட தகுதியான உ/த மாணவர்களுக்கு SLIIT, CINEC, NSBM போன்ற நிறுவனங்களில் பயில வட்டி இல்லா கடன் திட்டம்.'
    },
    officialLink: 'https://mohe.gov.lk/ifsls',
    isUrgent: true,
    gazetteNumber: 'MOHE/IFSLS/B8'
  },
  {
    id: 'tvec-nvq-schedule-q4',
    title: {
      en: 'National TVEC Assessment Calendar & RPL Evaluation Dates',
      si: 'ජාතික TVEC නිපුණතා ඇගයීම් සහ පූර්ව ඉගෙනුම් පිළිගැනීමේ (RPL) දිනදර්ශනය',
      ta: 'தேசிய TVEC மதிப்பீட்டு அட்டவணை & RPL முன்னோடி மதிப்பீட்டு திகதிகள்'
    },
    category: 'nvq',
    issuingAuthority: 'Tertiary and Vocational Education Commission (TVEC)',
    date: 'September 28, 2026',
    deadline: 'October 31, 2026',
    summary: {
      en: 'TVEC has announced final registration dates for NVQ Level 4 and Level 5 institutional practical examinations and Recognition of Prior Learning (RPL) certifications across 25 district centers.',
      si: 'NVQ 4 සහ 5 මට්ටම් සඳහා ආයතනික ප්‍රායෝගික පරීක්ෂණ සහ වසර 2කට වැඩි ක්ෂේත්‍ර පළපුරුද්දක් ඇති ශිල්පීන්ට සෘජු NVQ සහතිකය ලබාදෙන RPL වැඩසටහන් දින නියම කර ඇත.',
      ta: 'NVQ 4 மற்றும் 5 மட்டங்களுக்கான செய்முறைப் பரீட்சைகள் மற்றும் தொழில் அனுபவம் உள்ளவர்களுக்கான RPL சான்றிதழ் மதிப்பீட்டு திகதிகள் அறிவிக்கப்பட்டுள்ளன.'
    },
    officialLink: 'https://tvec.gov.lk/assessments',
    isUrgent: false,
    gazetteNumber: 'TVEC/EX/2026/09'
  },
  {
    id: 'presidents-fund-schol',
    title: {
      en: 'Presidential Fund Higher Education Scholarships for Top District Achievers',
      si: 'ජනාධිපති අරමුදල් උසස් අධ්‍යාපන ශිෂ්‍යත්ව - දිස්ත්‍රික් ප්‍රමුඛයන් සඳහා',
      ta: 'ஜனாதிபதி நிதியத்தின் உயர்கல்வி புலமைப்பரிசில்கள் - மாவட்ட சாதனையாளர்களுக்கு'
    },
    category: 'scholarship',
    issuingAuthority: "President's Fund of Sri Lanka",
    date: 'September 20, 2026',
    deadline: 'December 15, 2026',
    summary: {
      en: 'Monthly bursary of LKR 6,000 awarded to top 100 students from each of the 25 administrative districts entering state universities and national institutes under the Presidential Education Assistance Trust.',
      si: 'දිවයිනේ දිස්ත්‍රික්ක 25හිම උසස් පෙළ ඉහළම සාමාර්ථ ලත් සිසුන් සඳහා මාසිකව රු. 6,000ක ශිෂ්‍යාධාර පිරිනමන ජනාධිපති අරමුදල් ශිෂ්‍යත්ව අයදුම්පත්.',
      ta: '25 நிர்வாக மாவட்டங்களிலும் உ/த சாதனை படைத்த மாணவர்களுக்கு மாதாந்தம் ரூ. 6,000 உதவித்தொகை வழங்கும் ஜனாதிபதி நிதிய உதவித் திட்டம்.'
    },
    officialLink: 'https://presidentsfund.gov.lk',
    isUrgent: false,
    gazetteNumber: 'PF/EDU/2026/02'
  },
  {
    id: 'cgtti-entrance-exam',
    title: {
      en: 'German Tech (CGTTI) Full-Time Intake Entrance Examination',
      si: 'ජර්මන් ටෙක් (CGTTI) පූර්ණකාලීන පාඨමාලා ප්‍රවේශ තරඟ විභාගය',
      ta: 'ஜேர்மன் டெக் (CGTTI) முழுநேர பாடநெறி போட்டி நுழைவுத் தேர்வு'
    },
    category: 'exam',
    issuingAuthority: 'Ceylon German Technical Training Institute',
    date: 'September 15, 2026',
    deadline: 'October 25, 2026',
    summary: {
      en: 'Applications called for Automobile, Electrical, Refrigeration, and Tool Engineering full-time programs. Written aptitude test will be held at Moratuwa and Kilinochchi examination centers.',
      si: 'මෝටර් රථ, විදුලි කාර්මික, ශීතකරණ සහ උපකරණ ඉංජිනේරු පූර්ණකාලීන NVQ පාඨමාලා සඳහා ලිඛිත ප්‍රවේශ විභාගය සඳහා අයදුම්පත් කැඳවීම.',
      ta: 'மோட்டார் வாகன, மின் மற்றும் குளிரூட்டல் தொழில்நுட்ப பிரிவுகளுக்கான எழுத்துமூல போட்டிப் பரீட்சை விண்ணப்பங்கள்.'
    },
    officialLink: 'https://cgtti.lk/examinations',
    isUrgent: true,
    gazetteNumber: 'CGTTI/ADM/2026/01'
  },
  {
    id: 'mahapola-trust-update',
    title: {
      en: 'Mahapola Higher Education Scholarship Trust Fund: Installment Schedules',
      si: 'මහපොළ උසස් අධ්‍යාපන ශිෂ්‍යත්ව භාරකාර අරමුදල: නව වාරික ගෙවීම්',
      ta: 'மஹபொல உயர்கல்வி புலமைப்பரிசில் நிதியம்: தவணை கொடுப்பனவு அட்டவணை'
    },
    category: 'scholarship',
    issuingAuthority: 'Mahapola Higher Education Scholarship Trust Fund',
    date: 'September 08, 2026',
    deadline: 'Ongoing',
    summary: {
      en: 'Verification of university student bank account details for Mahapola Merit and Ordinary scholarships (LKR 5,000 monthly) currently underway across all 17 national universities.',
      si: 'සියලුම රාජ්‍ය විශ්වවිද්‍යාල ශිෂ්‍ය ශිෂ්‍යාවන් සඳහා මහපොළ කුසලතා සහ සාමාන්‍ය ශිෂ්‍යත්ව මාසික වාරික බැංකු ගිණුම්වලට බැර කිරීම තහවුරු කර ඇත.',
      ta: 'அனைத்து அரச பல்கலைக்கழக மாணவர்களுக்கான மஹபொல மாதாந்த கொடுப்பனவுகள் வங்கி கணக்குகளுக்கு அனுப்பப்படுவது உறுதி செய்யப்பட்டுள்ளது.'
    },
    officialLink: 'https://mahapola.gov.lk',
    isUrgent: false,
    gazetteNumber: 'MP/2026/08'
  }
];
