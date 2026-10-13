import { Course, StudentProfile } from '../types';
import { coursesData } from '../data/coursesData';

// System prompt tailored for Sri Lankan educational counseling
const SRI_LANKA_COUNSELOR_PROMPT = `
You are LankaEdu AI, the senior National Higher Education and Career Guidance Counselor for Sri Lanka.
Your knowledge base covers:
1. UGC (University Grants Commission) State Universities selection, Z-Score benchmarks, district quota distribution (Colombo vs Outstation vs Disadvantaged districts like Nuwara Eliya, Monaragala, Batticaloa, etc.).
2. The National Vocational Qualifications (NVQ) framework (Levels 1 to 7) regulated by TVEC, including pathways via VTA, NAITA, and German Tech (CGTTI).
3. Ministry of Education Interest-Free Student Loan Scheme (IFSLS) for approved non-state universities (SLIIT, NSBM, CINEC, SLTC, Horizon).
4. External Degrees (BIT from UCSC/Moratuwa, OUSL Open University degree models).
5. Professional qualifications (CIMA, ACCA, SLMC medicine criteria, IESL engineering).

When counseling a student:
- Be encouraging, realistic, and structured.
- Categorize recommendations into:
  1. Primary State University / UGC Pathway (if eligible by Z-Score and stream)
  2. TVEC NVQ Technical / Professional Pathway (especially for practical skills or non-Z-score routes)
  3. Government Interest-Free Loan / Affordable Non-State Options
- Provide practical next steps (e.g. check UGC handbook, apply for TVEC intake, submit IFSLS application).
- Format response with clear headings, bullet points, and highlight course names.
`;

export interface AdvisorResponse {
  text: string;
  recommendedCourses: Course[];
  suggestedFollowUps: string[];
}

export async function getAiAdvisorResponse(
  query: string,
  profile?: Partial<StudentProfile>,
  language: 'en' | 'si' | 'ta' = 'en'
): Promise<AdvisorResponse> {
  const apiKey = (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) ||
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_GEMINI_API_KEY) ||
    '';

  // Find relevant courses from database
  const matchingCourses = findRelevantCourses(query, profile);

  if (apiKey) {
    try {
      const { GoogleGenAI } = await import('@google/genai');
      const ai = new GoogleGenAI({ apiKey });
      
      const profileContext = profile ? `
Student Academic Profile:
- Target Exam / Level: ${profile.examType || 'General'}
- A/L Stream: ${profile.stream || 'Not specified'}
- Z-Score: ${profile.zScore || 'Not specified'}
- District: ${profile.district || 'All-Island'}
- Interests: ${profile.interests?.join(', ') || 'Not specified'}
- Budget preference: ${profile.budgetPreference || 'Any'}
` : '';

      const languageInstruction = language === 'si'
        ? 'Please reply primarily in polite Sinhala language, keeping technical institute abbreviations (UoM, SLIIT, NVQ, UGC) clear.'
        : language === 'ta'
        ? 'Please reply primarily in polite Tamil language, keeping technical institute abbreviations (UoM, SLIIT, NVQ, UGC) clear.'
        : 'Please reply in clear English, referencing Sri Lankan educational context accurately.';

      const prompt = `
${profileContext}

Student Inquiry:
"${query}"

${languageInstruction}

Provide practical guidance tailored to Sri Lanka's education framework. Recommend the best matching higher education or vocational options.
`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: SRI_LANKA_COUNSELOR_PROMPT + '\n\n' + prompt }] }
        ]
      });

      if (response && response.text) {
        return {
          text: response.text,
          recommendedCourses: matchingCourses,
          suggestedFollowUps: generateFollowUps(profile, language)
        };
      }
    } catch (err) {
      console.warn('Gemini API call returned error or was unavailable, using local expert engine:', err);
    }
  }

  // Fallback to high-fidelity Sri Lankan Expert Advisor Engine
  return generateExpertLocalAdvice(query, profile, matchingCourses, language);
}

function findRelevantCourses(query: string, profile?: Partial<StudentProfile>): Course[] {
  const q = query.toLowerCase();
  const stream = profile?.stream?.toLowerCase() || '';

  return coursesData.filter(course => {
    // If student stream specified
    if (stream.includes('math') || stream.includes('physical')) {
      if (course.category === 'engineering' || course.category === 'it') return true;
    }
    if (stream.includes('bio')) {
      if (course.category === 'healthcare' || course.category === 'science') return true;
    }
    if (stream.includes('commerce')) {
      if (course.category === 'business' || course.category === 'it') return true;
    }
    if (stream.includes('tech') || stream.includes('et') || stream.includes('bst')) {
      if (course.category === 'engineering' || course.category === 'vocational' || course.category === 'it') return true;
    }

    // Keyword match
    if (q.includes('soft') || q.includes('it') || q.includes('comput') || q.includes('code')) {
      return course.category === 'it';
    }
    if (q.includes('eng') || q.includes('civil') || q.includes('auto') || q.includes('mech')) {
      return course.category === 'engineering';
    }
    if (q.includes('nurse') || q.includes('health') || q.includes('medic') || q.includes('bio')) {
      return course.category === 'healthcare';
    }
    if (q.includes('bus') || q.includes('manage') || q.includes('account') || q.includes('bank')) {
      return course.category === 'business';
    }
    if (q.includes('nvq') || q.includes('vta') || q.includes('naita') || q.includes('german tech') || q.includes('electr')) {
      return course.category === 'vocational' || !!course.nvqLevel;
    }
    if (q.includes('law') || q.includes('attorney')) {
      return course.category === 'arts';
    }

    return course.featured;
  }).slice(0, 4);
}

function generateFollowUps(profile?: Partial<StudentProfile>, language: 'en' | 'si' | 'ta' = 'en'): string[] {
  if (language === 'si') {
    return [
      'පොලී රහිත ශිෂ්‍ය ණය (IFSLS) සඳහා අයදුම් කරන්නේ කෙසේද?',
      'NVQ 4 මට්ටමෙන් NVQ 7 B.Tech උපාධියට යන ආකාරය පහදන්න',
      'මගේ දිස්ත්‍රික්කයේ විශ්වවිද්‍යාල Z-Score කඩඉම් ලකුණු කීයද?'
    ];
  }
  if (language === 'ta') {
    return [
      'வட்டி இல்லா மாணவர் கடன் (IFSLS) எவ்வாறு பெறுவது?',
      'NVQ 4 இலிருந்து NVQ 7 பட்டப்படிப்பு வரை செல்வது எப்படி?',
      'எனது மாவட்டத்திற்கான பல்கலைக்கழக வெட்டுப்புள்ளிகள் என்ன?'
    ];
  }
  return [
    'How do I apply for the MoHE Interest-Free Student Loan (IFSLS)?',
    'Explain the progression from NVQ Level 4 to NVQ Level 7 B.Tech',
    'What are the state university Z-score cutoffs for my district?'
  ];
}

function generateExpertLocalAdvice(
  query: string,
  profile: Partial<StudentProfile> | undefined,
  matchingCourses: Course[],
  language: 'en' | 'si' | 'ta'
): AdvisorResponse {
  const zScoreNum = profile?.zScore ? parseFloat(profile.zScore) : null;
  const stream = profile?.stream || 'Physical Science / Technology';
  const district = profile?.district || 'Colombo';

  let adviceText = '';

  if (language === 'si') {
    adviceText = `### 🇱🇰 LankaEdu විශ්ලේෂණය & අධ්‍යාපනික උපදේශනය

ඔබගේ විමසුම: **"${query}"**
${profile?.zScore ? `• ඇතුළත් කළ Z-Score අගය: **${profile.zScore}** (${district} දිස්ත්‍රික්කය)` : ''}
${profile?.stream ? `• උසස් පෙළ විෂය ධාරාව: **${profile.stream}**` : ''}

---

#### 1. රාජ්‍ය විශ්වවිද්‍යාල සහ UGC අවස්ථා
${zScoreNum && zScoreNum >= 1.7 
  ? `ඔබගේ Z-Score අගය (${profile?.zScore}) ඉහළ මට්ටමක පවතින බැවින්, මොරටුව, කොළඹ හෝ පේරාදෙණිය වැනි ප්‍රමුඛ රාජ්‍ය විශ්වවිද්‍යාලවල ඉංජිනේරු හෝ පරිගණක විද්‍යා පීඨ ප්‍රවේශයට ඉතා හොඳ ඉඩක් පවතී. UGC ප්‍රවේශ අත්පොතෙහි ඔබගේ දිස්ත්‍රික් කෝටාව අනුව පළමු මනාපය නිවැරදිව සටහන් කරන්න.`
  : `Z-Score අගය තරඟකාරී රාජ්‍ය සීමාවට ආසන්නව නොමැති වුවද, **කොළඹ විශ්වවිද්‍යාලයේ BIT (බාහිර උපාධිය)** හෝ **ශ්‍රී ලංකා විවෘත විශ්වවිද්‍යාලය (OUSL)** හරහා රජයේ පිළිගත් උපාධි සම්පූර්ණ කළ හැක.`}

#### 2. රජයේ පොලී රහිත ශිෂ්‍ය ණය (IFSLS) මාවත
උ/පෙළ සාමාර්ථ 3ක් සහිත නම්, අධ්‍යාපන අමාත්‍යාංශයේ **පොලී රහිත ශිෂ්‍ය ණය (IFSLS)** යටතේ **SLIIT, NSBM, CINEC, SLTC** වැනි උසස් ආයතනවල මෘදුකාංග ඉංජිනේරු, ව්‍යාපාර හෝ නාවික විද්‍යා උපාධි හැදෑරිය හැක. රජය සම්පූර්ණ පොලිය දරන අතර උපාධිය නිම වී රැකියාව ලැබීමෙන් පසු මුදල් ගෙවිය හැක.

#### 3. TVEC NVQ නිපුණතා මාවත (100% ප්‍රායෝගික හා රැකියා සුරක්ෂිත)
විභාග ප්‍රතිඵල මත පමණක් රඳා නොසිට **German Tech (CGTTI), NAITA, හෝ VTA** හරහා **NVQ Level 4 / 5** හැදෑරීමෙන් සෘජුවම කර්මාන්ත ක්ෂේත්‍රයේ රැකියාවක් සහ NVQ Level 7 B.Tech උපාධිය දක්වා ඉදිරියට යාමට ඉඩ සැලසේ.`;
  } else if (language === 'ta') {
    adviceText = `### 🇱🇰 LankaEdu கல்வி & தொழில் வழிகாட்டல் அறிக்கை

உங்கள் கேள்வி: **"${query}"**
${profile?.zScore ? `• Z-புள்ளி: **${profile.zScore}** (${district} மாவட்டம்)` : ''}
${profile?.stream ? `• உ/த பிரிவு: **${profile.stream}**` : ''}

---

#### 1. அரச பல்கலைக்கழக & UGC வாய்ப்புகள்
${zScoreNum && zScoreNum >= 1.7 
  ? `உங்கள் Z-புள்ளி (${profile?.zScore}) சிறப்பான மட்டத்தில் உள்ளதால் மொறட்டுவ, கொழும்பு அல்லது பேராதனை பல்கலைக்கழகங்களின் பொறியியல்/கணினி விஞ்ஞான துறைகளுக்கு அதிக வாய்ப்பு உள்ளது. UGC விண்ணப்பத்தில் உங்கள் மாவட்ட ஒதுக்கீட்டை சரியாக தெரிவு செய்யவும்.`
  : `Z-புள்ளி அரச அனுமதிக்கு போதாத சந்தர்ப்பத்தில் **கொழும்பு பல்கலைக்கழகத்தின் BIT வெளிவாரிப் பட்டம்** அல்லது **இலங்கை திறந்த பல்கலைக்கழகம் (OUSL)** மிகச் சிறந்த மாற்றீடாகும்.`}

#### 2. வட்டி இல்லா மாணவர் கடன் திட்டம் (IFSLS)
உ/த 3 சித்தி பெற்ற மாணவர்கள் கல்வி அமைச்சின் **IFSLS வட்டி இல்லா கடன் திட்டம்** மூலம் **SLIIT, NSBM, CINEC, SLTC** போன்ற அங்கீகரிக்கப்பட்ட கல்லூரிகளில் பயிலலாம். கல்விக் கட்டண வட்டியை அரசாங்கமே ஏற்கும்.

#### 3. TVEC NVQ தொழிற்திறன் பாதை
**German Tech (CGTTI), NAITA அல்லது VTA** ஊடாக **NVQ Level 4 / 5** சான்றிதழ் பெற்று, வேலைவாய்ப்புடன் இணைந்த வழியில் **NVQ Level 7 B.Tech** பட்டப்படிப்பு வரை முன்னேற முடியும்.`;
  } else {
    adviceText = `### 🇱🇰 LankaEdu Strategic Educational Assessment

**Inquiry:** "${query}"  
${profile?.zScore ? `• **Recorded Z-Score:** ${profile.zScore} (${district} District)` : ''}
${profile?.stream ? `• **A/L Stream:** ${profile.stream}` : ''}

---

#### 1. UGC State University Alignment
${zScoreNum && zScoreNum >= 1.8 
  ? `With a strong Z-score of **${profile?.zScore}**, you are competitively placed for top-tier government engineering and computer science programs at **University of Moratuwa (UoM)**, **University of Colombo (UCSC)**, or **Peradeniya**. Ensure you order your course preferences strategically in the UGC Online Admissions portal.`
  : `If your Z-score is just below the direct faculty cutoff, the **University of Colombo BIT (Bachelor of Information Technology - External)** or **Open University of Sri Lanka (OUSL)** offer prestigious government-accredited degrees without rigid cutoff barriers.`}

#### 2. Government Interest-Free Student Loan Scheme (IFSLS)
If you achieved 3 passes in G.C.E. A/L, you are eligible for the Ministry of Education's **Interest-Free Student Loan Scheme**. This covers up to LKR 800,000 to 1,100,000 for 4-year degree programs at **SLIIT, NSBM Green University, CINEC Campus, and SLTC**. The Sri Lankan government absorbs all interest charges during your study period and grace period.

#### 3. TVEC NVQ Vocational & High-Demand Crafts (Fast Track)
For fast-tracked careers in automation, renewable energy, software, or automotive engineering, institutions like **Ceylon German Technical Training Institute (German Tech - CGTTI)**, **VTA**, and **NAITA** offer **NVQ Level 4 to Level 6** credentials. These provide direct lateral progression to an **NVQ Level 7 B.Tech Degree** with zero educational debt!`;
  }

  return {
    text: adviceText,
    recommendedCourses: matchingCourses.length > 0 ? matchingCourses : coursesData.slice(0, 3),
    suggestedFollowUps: generateFollowUps(profile, language)
  };
}
