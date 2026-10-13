import { Institute } from '../types';

export const institutesData: Institute[] = [
  {
    id: 'uom',
    name: 'University of Moratuwa',
    shortName: 'UoM',
    type: 'state_university',
    location: 'Moratuwa, Colombo',
    province: 'Western',
    website: 'https://uom.lk',
    established: 1972,
    badgeText: 'UGC Ranked #1 Engineering & Tech',
    color: '#059669',
    description: {
      en: 'Sri Lanka’s premier technological university renowned for high-caliber engineering, computing, architecture, and technology disciplines.',
      si: 'ඉංජිනේරු, තොරතුරු තාක්ෂණ සහ වාස්තු විද්‍යා ක්ෂේත්‍ර සඳහා ශ්‍රී ලංකාවේ ප්‍රමුඛතම තාක්ෂණික විශ්වවිද්‍යාලය.',
      ta: 'இலங்கையின் பொறியியல், தகவல் தொழில்நுட்பம் மற்றும் கட்டிடக்கலைக்கான முதன்மை அரச பல்கலைக்கழகம்.'
    }
  },
  {
    id: 'sliit',
    name: 'Sri Lanka Institute of Information Technology',
    shortName: 'SLIIT',
    type: 'private_degree',
    location: 'Malabe & Kollupitiya, Colombo',
    province: 'Western',
    website: 'https://sliit.lk',
    established: 1999,
    badgeText: 'MoHE Approved & UGC Recognized',
    color: '#0284c7',
    description: {
      en: 'The largest non-state higher education institute in Sri Lanka granting degrees in IT, Computing, Engineering, Business, and Humanities.',
      si: 'තොරතුරු තාක්ෂණ, ඉංජිනේරු හා ව්‍යාපාරික ක්ෂේත්‍රවල උපාධි පිරිනමන ශ්‍රී ලංකාවේ විශාලතම පෞද්ගලික උසස් අධ්‍යාපන ආයතනය.',
      ta: 'தகவல் தொழில்நுட்பம், பொறியியல் மற்றும் வணிக முகாமைத்துவத்தில் பட்டங்களை வழங்கும் இலங்கையின் மிகப்பெரிய உயர்கல்வி நிறுவனம்.'
    }
  },
  {
    id: 'nibm',
    name: 'National Institute of Business Management',
    shortName: 'NIBM',
    type: 'semi_government',
    location: 'Colombo 07, Kandy, Galle, Kurunegala',
    province: 'Western',
    website: 'https://nibm.lk',
    established: 1968,
    badgeText: 'Statutory Body Under Ministry of Education',
    color: '#10b981',
    description: {
      en: 'A premier government statutory educational institute providing market-driven management, IT, and design qualifications across regional centers.',
      si: 'අධ්‍යාපන අමාත්‍යාංශය යටතේ ක්‍රියාත්මක වන ප්‍රමුඛ රාජ්‍ය ව්‍යාපාර හා තොරතුරු තාක්ෂණ පුහුණු ආයතනය.',
      ta: 'அரசு கல்வி அமைச்சின் கீழ் இயங்கும் முன்னணி முகாமைத்துவம் மற்றும் தகவல் தொழில்நுட்ப பயிற்சி நிறுவனம்.'
    }
  },
  {
    id: 'uoc',
    name: 'University of Colombo',
    shortName: 'UoC',
    type: 'state_university',
    location: 'Cumaratunga Munidasa Mawatha, Colombo 03',
    province: 'Western',
    website: 'https://cmb.ac.lk',
    established: 1921,
    badgeText: 'Oldest University in Sri Lanka',
    color: '#0284c7',
    description: {
      en: 'The oldest university institution in modern higher education in Sri Lanka, distinguished in medicine, law, computing (UCSC), and sciences.',
      si: 'ශ්‍රී ලංකාවේ පැරණිතම විශ්වවිද්‍යාලය. වෛද්‍ය, නීති, පරිගණක (UCSC) සහ විද්‍යා ක්ෂේත්‍රවල ඉහළ පිළිගැනීමක් සහිතයි.',
      ta: 'இலங்கையின் பழமையான பல்கலைக்கழகம். மருத்துவம், சட்டம், கணினி மற்றும் விஞ்ஞானத் துறைகளில் முதன்மையானது.'
    }
  },
  {
    id: 'cgtti',
    name: 'Ceylon German Technical Training Institute',
    shortName: 'German Tech',
    type: 'tvec_vocational',
    location: 'Moratuwa & Kilinochchi',
    province: 'Western',
    website: 'https://cgtti.lk',
    established: 1959,
    badgeText: 'Gold Standard Vocational NVQ 4 - 6',
    color: '#f59e0b',
    description: {
      en: 'Founded in partnership with the Federal Republic of Germany, renowned as the pinnacle of precision automotive and mechanical engineering crafts.',
      si: 'ජර්මානු තාක්ෂණික සහයෝගීතාවෙන් ඇරඹි, මෝටර් රථ සහ යාන්ත්‍රික ඉංජිනේරු ක්ෂේත්‍රයේ රන් ප්‍රමිතිය සහිත ප්‍රමුඛ තාක්ෂණ ආයතනය.',
      ta: 'ஜேர்மன் கூட்டுறவுடன் ஆரம்பிக்கப்பட்ட, மோட்டார் மற்றும் இயந்திர பொறியியல் தொழிற்துறையின் முதன்மை நிறுவனம்.'
    }
  },
  {
    id: 'vta',
    name: 'Vocational Training Authority of Sri Lanka',
    shortName: 'VTA',
    type: 'tvec_vocational',
    location: 'Narahenpita, Colombo (Islandwide Centers)',
    province: 'Western',
    website: 'https://vtasl.gov.lk',
    established: 1995,
    badgeText: 'National TVEC Network (200+ Centers)',
    color: '#10b981',
    description: {
      en: 'Statutory authority operating 200+ rural and urban vocational training centers providing NVQ Level 3 to Level 5 credentials.',
      si: 'දිවයින පුරා මධ්‍යස්ථාන 200කට අධික සංඛ්‍යාවක් හරහා NVQ 3 සිට 5 මට්ටම් දක්වා නොමිලේ සහ සහනදායී වෘත්තීය පුහුණු පිරිනමන රාජ්‍ය ආයතනය.',
      ta: 'நாடு முழுவதும் 200க்கும் மேற்பட்ட பயிற்சி மையங்களைக் கொண்டு NVQ தகைமைகளை வழங்கும் தேசிய நிறுவனம்.'
    }
  },
  {
    id: 'naita',
    name: 'National Apprentice and Industrial Training Authority',
    shortName: 'NAITA',
    type: 'tvec_vocational',
    location: 'Rajagiriya, Colombo',
    province: 'Western',
    website: 'https://naita.gov.lk',
    established: 1971,
    badgeText: 'Paid Apprenticeship & TVEC NVQ 3-5',
    color: '#06b6d4',
    description: {
      en: 'Provides structured dual-vocational education integrating industrial hands-on apprenticeships with classroom theory for NVQ qualifications.',
      si: 'කාර්මික ආධුනිකත්ව පුහුණුව සමඟ පූර්ණ කාලීන ප්‍රායෝගික NVQ සුදුසුකම් සලසන ප්‍රමුඛ රාජ්‍ය ආයතනය.',
      ta: 'தொழிற்சாலைகளுடன் இணைந்த நேரடி தொழிற்பயிற்சி மற்றும் NVQ சான்றிதழ்களை வழங்கும் அரச நிறுவனம்.'
    }
  },
  {
    id: 'ousl',
    name: 'Open University of Sri Lanka',
    shortName: 'OUSL',
    type: 'state_university',
    location: 'Nawala, Nugegoda (Islandwide Regional Centers)',
    province: 'Western',
    website: 'https://ou.ac.lk',
    established: 1980,
    badgeText: 'National Open & Distance State University',
    color: '#8b5cf6',
    description: {
      en: 'The only government state university in Sri Lanka offering degrees through open and distance learning without strict Z-Score requirements.',
      si: 'Z-Score සීමාවකින් තොරව විවෘත සහ දුරස්ථ අධ්‍යාපන ක්‍රමවේදය හරහා පිළිගත් උපාධි පිරිනමන එකම රාජ්‍ය විශ්වවිද්‍යාලය.',
      ta: 'இலங்கையில் Z-புள்ளி நிபந்தனையின்றி தொலைதூரக் கல்வி மூலம் அரச பட்டங்களை வழங்கும் ஒரே பல்கலைக்கழகம்.'
    }
  },
  {
    id: 'cinec',
    name: 'CINEC Campus',
    shortName: 'CINEC',
    type: 'private_degree',
    location: 'Malabe, Colombo',
    province: 'Western',
    website: 'https://cinec.edu',
    established: 1990,
    badgeText: 'Premier Maritime & Technology Campus',
    color: '#0ea5e9',
    description: {
      en: 'A non-state higher education institute internationally acclaimed for Maritime Studies, Logistics, Aviation, Engineering, and IT.',
      si: 'නාවික, ගුවන්සේවා, සැපයුම් සහ ඉංජිනේරු ක්ෂේත්‍ර සඳහා ජාත්‍යන්තර ප්‍රමිතියේ උපාධි පිරිනමන ප්‍රමුඛ මණ්ඩපය.',
      ta: 'கடல்சார் கல்வி, விமானவியல் மற்றும் பொறியியல் துறைகளில் சர்வதேச தரம் வாய்ந்த உயர்கல்வி வளாகம்.'
    }
  },
  {
    id: 'sltc',
    name: 'SLTC Research University',
    shortName: 'SLTC',
    type: 'private_degree',
    location: 'Padukka, Colombo',
    province: 'Western',
    website: 'https://sltc.ac.lk',
    established: 2015,
    badgeText: 'Research-Driven Tech Campus',
    color: '#14b8a6',
    description: {
      en: 'Residential technology research university offering UGC approved engineering, telecommunications, computing, and biotechnology degrees.',
      si: 'තාක්ෂණ, විදුලි සංදේශ හා පරිගණක පර්යේෂණ ක්ෂේත්‍රවලට මුල්තැන දෙන නවීන නේවාසික විශ්වවිද්‍යාලය.',
      ta: 'தொழில்நுட்பம் மற்றும் பொறியியல் ஆராய்ச்சிகளை முதன்மையாகக் கொண்ட நவீன பல்கலைக்கழகம்.'
    }
  }
];
