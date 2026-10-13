import { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  {
    id: 'faq-z-score',
    category: 'admissions',
    question: {
      en: 'How is the University Grants Commission (UGC) Z-Score calculated and how do district quotas work?',
      si: 'UGC Z-Score අගය ගණනය කරන්නේ කෙසේද සහ දිස්ත්‍රික් කෝටා ක්‍රමය ක්‍රියාත්මක වන්නේ කෙසේද?',
      ta: 'UGC Z-புள்ளி எவ்வாறு கணக்கிடப்படுகிறது மற்றும் மாவட்ட ஒதுக்கீட்டு முறை எவ்வாறு செயல்படுகிறது?'
    },
    answer: {
      en: 'The Z-score standardizes individual subject marks relative to the national mean and standard deviation of that specific subject, eliminating exam paper variance. In state university admissions, 40% of total seats are awarded purely on all-island merit, 55% are distributed proportionally among the 25 administrative districts based on population, and 5% are reserved for recognized educationally disadvantaged districts (such as Nuwara Eliya, Monaragala, Batticaloa, Mullaitivu).',
      si: 'Z-ලකුණ මඟින් එක් එක් විෂයයේ ජාතික මධ්‍යන්‍යය සහ සම්මත අපගමනය සැලකිල්ලට ගෙන ලකුණු ප්‍රමිතිකරණය කරනු ලබයි. රාජ්‍ය විශ්වවිද්‍යාල බඳවා ගැනීමේදී 40%ක් සමස්ත ලංකා කුසලතා පදනමින්ද, 55%ක් දිස්ත්‍රික්ක 25 අතර ජනගහන අනුපාතයටද, 5%ක් අධ්‍යාපනිකව අපහසු දිස්ත්‍රික්ක 16ක් සඳහාද වෙන් කෙරේ.',
      ta: 'Z-புள்ளி என்பது பரீட்சைத் தாள்களின் கடினத்தன்மையை சமன்செய்து கணக்கிடப்படும் புள்ளியாகும். அரச பல்கலைக்கழக அனுமதியில் 40% அகில இலங்கை திறமை அடிப்படையிலும், 55% 25 மாவட்ட விகிதாசார அடிப்படையிலும், 5% பின்தங்கிய மாவட்டங்களுக்கும் ஒதுக்கப்படுகிறது.'
    }
  },
  {
    id: 'faq-nvq-levels',
    category: 'nvq',
    question: {
      en: 'What are the TVEC NVQ Levels in Sri Lanka and can they lead to a full Bachelor Degree?',
      si: 'ශ්‍රී ලංකාවේ TVEC NVQ මට්ටම් මොනවාද? ඒවායෙන් පූර්ණ උපාධියක් ලබාගත හැකිද?',
      ta: 'இலங்கையில் TVEC NVQ மட்டங்கள் எவை? அவற்றின் மூலம் முழு பட்டப்படிப்பை பெற முடியுமா?'
    },
    answer: {
      en: 'Yes! The National Vocational Qualifications (NVQ) framework spans Levels 1 through 7: Level 1-2 (Foundation/Assistant), Level 3-4 (Skilled Craftsman / Technician e.g., Electrician, Welder, Draughtsman), Level 5 (National Diploma), Level 6 (Higher National Diploma - HND), and Level 7 (Bachelor of Technology - B.Tech Degree awarded by Univotec / Ocean University). A student without A/L passes can enter NVQ 3/4 with O/L, progress to NVQ 5/6, and graduate with a government-recognized B.Tech degree at NVQ 7.',
      si: 'ඔව්! NVQ පද්ධතිය 1 සිට 7 දක්වා පවතී: NVQ 3-4 (ශිල්පී/කාර්මික), NVQ 5 (ඩිප්ලෝමා), NVQ 6 (උසස් ජාතික ඩිප්ලෝමා), සහ NVQ 7 (තාක්ෂණවේදී උපාධිය - Univotec / Ocean University). උසස් පෙළ සමත් නොවූ අයෙකුට සා/පෙළින් NVQ 3/4 හරහා පියවරෙන් පියවර ගොස් NVQ 7 උපාධිය දක්වා ළඟා විය හැක.',
      ta: 'ஆம்! NVQ 1 முதல் 7 மட்டங்கள் உள்ளன: NVQ 3-4 (தொழில்நுட்பவியலாளர்), NVQ 5 (டிப்ளோமா), NVQ 6 (உயர் தேசிய டிப்ளோமா) மற்றும் NVQ 7 (Univotec வழங்கும் B.Tech பட்டப்படிப்பு). உ/த சித்தி இல்லாத மாணவரும் NVQ வழியில் முழு பட்டத்தைப் பெற முடியும்.'
    }
  },
  {
    id: 'faq-student-loans',
    category: 'loans',
    question: {
      en: 'How does the Ministry of Higher Education Interest-Free Student Loan Scheme (IFSLS) operate?',
      si: 'අධ්‍යාපන අමාත්‍යාංශයේ පොලී රහිත ශිෂ්‍ය ණය යෝජනා ක්‍රමය (IFSLS) ක්‍රියාත්මක වන්නේ කෙසේද?',
      ta: 'உயர்கல்வி அமைச்சின் வட்டி இல்லா மாணவர் கடன் திட்டம் (IFSLS) எவ்வாறு செயல்படுகிறது?'
    },
    answer: {
      en: 'The Sri Lankan Government provides an interest-free bank loan of up to LKR 800,000 to LKR 1,100,000 to cover total tuition fees at recognized non-state higher education institutes (SLIIT, NSBM, CINEC, SLTC, Horizon, Aquinas, etc.) for students who passed A/L with 3 passes but did not obtain state university placement. The government pays 100% of the interest during the degree period plus a 1-year grace period. Students only repay the principal in low monthly installments over 7-8 years after graduation.',
      si: 'උ/පෙළ සාමාර්ථ 3ක් සහිත නමුත් රාජ්‍ය සරසවි වරම් නොලැබූ සිසුන්ට රජයේ අනුමත පෞද්ගලික ආයතනවල (SLIIT, NSBM, CINEC ආදී) උපාධි හැදෑරීමට රු. 800,000 - 1,100,000 දක්වා පොලී රහිත ණයක් පිරිනැමේ. අධ්‍යයන කාලයේ සහ ඉන්පසු වසරක සහන කාලයේ සම්පූර්ණ පොලිය රජය ගෙවන අතර, රැකියාවක් ලැබුණු පසු මුල් මුදල පමණක් වසර 7-8කින් ගෙවිය හැක.',
      ta: 'உ/த 3 சித்தி பெற்று அரச பல்கலைக்கழக அனுமதி கிடைக்காத மாணவர்களுக்கு அரசு அங்கீகரித்த தனியார் கல்லூரிகளில் பயில ரூ. 800,000 வரை வட்டி இல்லா கடன் வழங்கப்படுகிறது. வட்டி முழுவதையும் அரசாங்கம் ஏற்கும்; பட்டப்படிப்பு முடிந்ததும் அசல் தொகையை மாதாந்த தவணைகளில் செலுத்தலாம்.'
    }
  },
  {
    id: 'faq-rpl',
    category: 'nvq',
    question: {
      en: 'What is RPL (Recognition of Prior Learning) and who can get certified without attending classes?',
      si: 'පූර්ව ඉගෙනුම් පිළිගැනීම (RPL) යනු කුමක්ද? පන්ති නොගොස් සහතික ලබාගත හැක්කේ කාටද?',
      ta: 'முன்னோடி கற்றல் அங்கீகாரம் (RPL) என்றால் என்ன? வகுப்புகளுக்குச் செல்லாமல் எவ்வாறு சான்றிதழ் பெறுவது?'
    },
    answer: {
      en: 'RPL is a TVEC national pathway that validates knowledge, skills, and work experience gained through informal on-the-job training. If you have been working as an electrician, mechanic, chef, carpenter, or graphic designer for at least 1-3 years, you can apply directly for an RPL practical assessment to obtain an official TVEC NVQ Level 3 or Level 4 certificate without full-time attendance.',
      si: 'RPL යනු වසර 1 සිට 3 දක්වා ක්ෂේත්‍රයේ ප්‍රායෝගිකව සේවය කර ඇති විදුලි කාර්මික, වාහන කාර්මික, හෝටල් සූපවේදී ආදී ශිල්පීන්ට කිසිදු පන්තියකට සහභාගී නොවී ප්‍රායෝගික පරීක්ෂණයකින් පමණක් රජයේ පිළිගත් NVQ 3 හෝ 4 සහතිකය ලබාගත හැකි නිල ක්‍රමයයි.',
      ta: 'வகுப்புகளுக்குச் செல்லாமல், 1-3 வருட தொழில் அனுபவம் கொண்டவர்கள் நேரடியாக செய்முறைத் தேர்வில் பங்கேற்று அரச அங்கீகாரம் பெற்ற NVQ சான்றிதழைப் பெறும் முறையே RPL ஆகும்.'
    }
  },
  {
    id: 'faq-slqf',
    category: 'slqf',
    question: {
      en: 'What is SLQF (Sri Lanka Qualifications Framework) and how does it compare to NVQ?',
      si: 'ශ්‍රී ලංකා සුදුසුකම් රාමුව (SLQF) යනු කුමක්ද සහ එය NVQ සමඟ සැසඳෙන්නේ කෙසේද?',
      ta: 'இலங்கை தகைமைகள் கட்டமைப்பு (SLQF) என்றால் என்ன, அது NVQ உடன் எவ்வாறு பொருந்துகிறது?'
    },
    answer: {
      en: 'SLQF has 12 levels integrating academic higher education and vocational qualifications: SLQF Level 3-4 corresponds to NVQ Level 5 (Diploma), SLQF Level 5 corresponds to NVQ Level 6 (Higher National Diploma), and SLQF Level 6 corresponds to a 4-year Bachelor’s Honours Degree / NVQ Level 7. SLQF Level 10-12 covers Master’s and Doctoral (Ph.D.) degrees.',
      si: 'SLQF මට්ටම් 12කින් සමන්විත වන අතර අධ්‍යාපනික සහ වෘත්තීය නිපුණතා එකිනෙකට සම්බන්ධ කරයි: SLQF 3-4 යනු NVQ 5 (ඩිප්ලෝමා), SLQF 5 යනු NVQ 6 (උසස් ඩිප්ලෝමා), SLQF 6 යනු සිව්වසර ගෞරව උපාධිය සහ NVQ 7 තාක්ෂණවේදී උපාධියයි. SLQF 10-12 පශ්චාත් උපාධි සහ ආචාර්ය උපාධි (PhD) වේ.',
      ta: 'SLQF 12 மட்டங்களைக் கொண்டுள்ளது. SLQF 3-4 என்பது NVQ 5 டிப்ளோமாவையும், SLQF 5 என்பது NVQ 6 உயர் டிப்ளோமாவையும், SLQF 6 என்பது 4 வருட கௌரவ பட்டப்படிப்பு / NVQ 7 ஐயும் குறிக்கிறது.'
    }
  },
  {
    id: 'faq-appeals',
    category: 'appeals',
    question: {
      en: 'How can I appeal UGC university admission results or request re-scrutiny?',
      si: 'විශ්වවිද්‍යාල ප්‍රවේශ ප්‍රතිඵල පිළිබඳ අභියාචනා ඉදිරිපත් කරන්නේ කෙසේද?',
      ta: 'UGC பல்கலைக்கழக அனுமதி முடிவுகள் குறித்து எவ்வாறு மேன்முறையீடு செய்வது?'
    },
    answer: {
      en: 'After the UGC publishes cut-off marks, an official 30-day appeal window is announced. Students who qualified based on re-scrutinized A/L marks or who encountered exceptional circumstances can submit appeals online through ugc.ac.lk or via registered post using Form UGC/ADM/APP.',
      si: 'UGC අවම Z-Score ලකුණු ප්‍රකාශයට පත් කළ පසු දින 30ක අභියාචනා කාලයක් ලබාදේ. උ/පෙළ ප්‍රතිඵල නැවත සමීක්ෂණයෙන් ලකුණු වෙනස් වූ සිසුන්ට ugc.ac.lk වෙබ් අඩවිය හරහා හෝ ලියාපදිංචි තැපෑලෙන් අභියාචනා ඉදිරිපත් කළ හැක.',
      ta: 'வெட்டுப்புள்ளிகள் வெளியிடப்பட்ட பின் 30 நாட்களுக்குள் ugc.ac.lk ஊடாக அல்லது பதிவுத் தபாலில் உத்தியோகபூர்வ படிவம் மூலம் மேன்முறையீடு செய்ய முடியும்.'
    }
  }
];
