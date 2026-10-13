import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  User, 
  GraduationCap, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Sliders, 
  BookOpen, 
  Zap, 
  Copy, 
  Check, 
  MessageSquare,
  Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getAiAdvisorResponse, AdvisorResponse } from '../services/geminiAdvisor';
import { Course, StudentProfile, ChatMessage } from '../types';

interface AiAdvisorPageProps {
  onSelectCourse: (course: Course) => void;
  onNavigateTab: (tab: string) => void;
}

const SRI_LANKA_DISTRICTS = [
  'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya',
  'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
  'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
  'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla',
  'Monaragala', 'Ratnapura', 'Kegalle'
];

const AL_STREAMS = [
  'Physical Science (Maths Stream)',
  'Biological Science (Bio Stream)',
  'Commerce Stream',
  'Technology (Engineering Tech / Bio Tech)',
  'Arts & Humanities'
];

export const AiAdvisorPage: React.FC<AiAdvisorPageProps> = ({
  onSelectCourse,
  onNavigateTab
}) => {
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: language === 'si' 
        ? `ආයුබෝවන්! මම LankaEdu AI අධ්‍යාපනික සහ වෘත්තීය උපදේශක. ඔබගේ උසස් පෙළ (A/L) හෝ සාමාන්‍ය පෙළ (O/L) ප්‍රතිඵල, Z-Score අගය, හෝ ඔබ කැමති වෘත්තීය ක්ෂේත්‍රය මා සමඟ බෙදාගන්න. රාජ්‍ය සරසවි ප්‍රවේශය, TVEC NVQ පාඨමාලා හෝ රජයේ පොලී රහිත ශිෂ්‍ය ණය (IFSLS) අවස්ථා පිළිබඳ නිවැරදි මඟපෙන්වීමක් මම ඔබට ලබාදෙමි.`
        : language === 'ta'
        ? `வணக்கம்! நான் LankaEdu AI கல்வி மற்றும் தொழில் வழிகாட்டி. உங்கள் உ/த (A/L) அல்லது சா/த (O/L) முடிவுகள், Z-புள்ளி அல்லது உங்கள் விருப்பமான தொழில் பற்றி பதிவிடுங்கள். அரச பல்கலைக்கழகங்கள், TVEC NVQ தொழிற்பயிற்சிகள் மற்றும் வட்டி இல்லா மாணவர் கடன் பற்றிய முழுமையான வழிகாட்டலை நான் வழங்குகிறேன்.`
        : `Ayubowan! I am LankaEdu AI, your National Academic & Career Guidance Counselor. Share your G.C.E. A/L or O/L results, Z-Score, district, or career interests to discover state university cutoffs, TVEC NVQ vocational pathways, and Ministry Interest-Free Student Loan (IFSLS) opportunities in Sri Lanka.`,
      timestamp: 'Just now',
      quickActions: [
        'A/L Physical Science Z: 1.45 (Kandy)',
        'NVQ Level 4 after O/L in Automotive',
        'Software Engineering with Student Loan',
        'UGC External Degree Options (BIT / OUSL)'
      ]
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Profile Builder state
  const [activeProfileTab, setActiveProfileTab] = useState<'al' | 'ol' | 'career'>('al');
  const [selectedStream, setSelectedStream] = useState(AL_STREAMS[0]);
  const [selectedDistrict, setSelectedDistrict] = useState('Colombo');
  const [inputZScore, setInputZScore] = useState('1.52');
  const [subject1Grade, setSubject1Grade] = useState('A');
  const [subject2Grade, setSubject2Grade] = useState('B');
  const [subject3Grade, setSubject3Grade] = useState('C');

  // OL mode state
  const [olMaths, setOlMaths] = useState('Credit (C)');
  const [olEnglish, setOlEnglish] = useState('Credit (C)');
  const [olPassCount, setOlPassCount] = useState('6+ Passes');

  // Career mode state
  const [careerInterest, setCareerInterest] = useState('Software Engineering & Cloud Computing');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (queryToSend?: string) => {
    const text = queryToSend || inputQuery;
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!queryToSend) setInputQuery('');
    setIsTyping(true);

    try {
      const profile: Partial<StudentProfile> = {
        examType: activeProfileTab === 'al' ? 'al' : activeProfileTab === 'ol' ? 'ol' : 'degree_seeking',
        stream: selectedStream,
        district: selectedDistrict,
        zScore: inputZScore,
        interests: [careerInterest]
      };

      const advisorResult = await getAiAdvisorResponse(text, profile, language);

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: advisorResult.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        recommendations: advisorResult.recommendedCourses,
        quickActions: advisorResult.suggestedFollowUps
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          sender: 'assistant',
          text: 'Unable to analyze query right now. Please try one of the prompt buttons below.',
          timestamp: 'Just now'
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleProfileFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let query = '';
    if (activeProfileTab === 'al') {
      query = `My A/L stream is ${selectedStream} from ${selectedDistrict} district. My Z-Score is ${inputZScore} with grades ${subject1Grade}, ${subject2Grade}, ${subject3Grade}. What are my university and diploma options?`;
    } else if (activeProfileTab === 'ol') {
      query = `I completed O/L with ${olPassCount}. Maths: ${olMaths}, English: ${olEnglish}. Recommend TVEC NVQ Level 3/4 or vocational apprenticeships.`;
    } else {
      query = `I want to build a career in ${careerInterest}. What are the best accredited degree, diploma, or government loan options in Sri Lanka?`;
    }
    handleSendMessage(query);
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'reset-1',
        sender: 'assistant',
        text: 'Session reset. What educational pathway or exam query would you like to explore today?',
        timestamp: 'Just now',
        quickActions: [
          'A/L Physical Science Z: 1.45 (Kandy)',
          'NVQ Level 4 after O/L in Automotive',
          'Software Engineering with Student Loan'
        ]
      }
    ]);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10 space-y-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
          <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
          <span>Interactive Sri Lankan Academic Counseling</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t('advisor_headline')}
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          {t('advisor_sub')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Quick Profile & Results Input Form (4 cols) */}
        <div className="lg:col-span-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 backdrop-blur-xl shadow-xl space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Sliders className="h-4 w-4 text-emerald-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                Student Profile Evaluator
              </h2>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              UGC ALIGNED
            </span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="grid grid-cols-3 gap-1 rounded-xl bg-slate-950 p-1 border border-slate-800/80 text-xs">
            <button
              onClick={() => setActiveProfileTab('al')}
              className={`py-1.5 rounded-lg font-semibold transition-all ${
                activeProfileTab === 'al'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              A/L Exam
            </button>
            <button
              onClick={() => setActiveProfileTab('ol')}
              className={`py-1.5 rounded-lg font-semibold transition-all ${
                activeProfileTab === 'ol'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              O/L Exam
            </button>
            <button
              onClick={() => setActiveProfileTab('career')}
              className={`py-1.5 rounded-lg font-semibold transition-all ${
                activeProfileTab === 'career'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Dream Career
            </button>
          </div>

          {/* Form Based on Tab */}
          <form onSubmit={handleProfileFormSubmit} className="space-y-4">
            {activeProfileTab === 'al' && (
              <>
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    A/L Subject Stream
                  </label>
                  <select
                    value={selectedStream}
                    onChange={(e) => setSelectedStream(e.target.value)}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  >
                    {AL_STREAMS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                      Z-Score
                    </label>
                    <input
                      type="text"
                      value={inputZScore}
                      onChange={(e) => setInputZScore(e.target.value)}
                      placeholder="e.g. 1.625"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                      District
                    </label>
                    <select
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                    >
                      {SRI_LANKA_DISTRICTS.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Subject Grades (Sub 1, 2, 3)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select
                      value={subject1Grade}
                      onChange={(e) => setSubject1Grade(e.target.value)}
                      className="rounded-lg border border-slate-800 bg-slate-950 px-2 py-1.5 text-xs text-white text-center"
                    >
                      {['A', 'B', 'C', 'S', 'F'].map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                    <select
                      value={subject2Grade}
                      onChange={(e) => setSubject2Grade(e.target.value)}
                      className="rounded-lg border border-slate-800 bg-slate-950 px-2 py-1.5 text-xs text-white text-center"
                    >
                      {['A', 'B', 'C', 'S', 'F'].map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                    <select
                      value={subject3Grade}
                      onChange={(e) => setSubject3Grade(e.target.value)}
                      className="rounded-lg border border-slate-800 bg-slate-950 px-2 py-1.5 text-xs text-white text-center"
                    >
                      {['A', 'B', 'C', 'S', 'F'].map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                </div>
              </>
            )}

            {activeProfileTab === 'ol' && (
              <>
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Overall G.C.E. O/L Performance
                  </label>
                  <select
                    value={olPassCount}
                    onChange={(e) => setOlPassCount(e.target.value)}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="6+ Passes (Eligible for A/L & NVQ)">6+ Passes (Eligible for A/L & NVQ)</option>
                    <option value="4-5 Passes (NVQ Level 3/4 Ready)">4-5 Passes (NVQ Level 3/4 Ready)</option>
                    <option value="Sitting for O/L Exam">Sitting for O/L Exam</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                      Mathematics
                    </label>
                    <select
                      value={olMaths}
                      onChange={(e) => setOlMaths(e.target.value)}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                    >
                      <option value="Distinction (A)">Distinction (A)</option>
                      <option value="Very Good (B)">Very Good (B)</option>
                      <option value="Credit (C)">Credit (C)</option>
                      <option value="Simple Pass (S)">Simple Pass (S)</option>
                      <option value="Failed (W)">Failed (W)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                      English
                    </label>
                    <select
                      value={olEnglish}
                      onChange={(e) => setOlEnglish(e.target.value)}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                    >
                      <option value="Distinction (A)">Distinction (A)</option>
                      <option value="Very Good (B)">Very Good (B)</option>
                      <option value="Credit (C)">Credit (C)</option>
                      <option value="Simple Pass (S)">Simple Pass (S)</option>
                      <option value="Failed (W)">Failed (W)</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {activeProfileTab === 'career' && (
              <div>
                <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                  Desired Career or Industry
                </label>
                <select
                  value={careerInterest}
                  onChange={(e) => setCareerInterest(e.target.value)}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                >
                  <option value="Software Engineering & Cloud Computing">Software Engineering & Cloud Computing</option>
                  <option value="Automotive & Electric Vehicle Engineering">Automotive & Electric Vehicle Engineering</option>
                  <option value="Marine Engineering & Shipping Logistics">Marine Engineering & Shipping Logistics</option>
                  <option value="Nursing & Allied Health Sciences">Nursing & Allied Health Sciences</option>
                  <option value="Supply Chain & International Business">Supply Chain & International Business</option>
                  <option value="Electrical & Solar Power Technician">Electrical & Solar Power Technician</option>
                  <option value="Corporate Law & Legal Studies">Corporate Law & Legal Studies</option>
                </select>
              </div>
            )}

            <button
              type="submit"
              disabled={isTyping}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-2.5 text-xs font-bold text-slate-950 hover:brightness-110 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer disabled:opacity-50"
            >
              <Zap className="h-3.5 w-3.5" />
              <span>Evaluate & Advise My Pathway</span>
            </button>
          </form>

          {/* Quick Informational Box */}
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-3 text-xs text-slate-400 space-y-1.5">
            <span className="font-semibold text-slate-300 flex items-center gap-1">
              <Award className="h-3.5 w-3.5 text-emerald-400" />
              Did You Know?
            </span>
            <p className="text-[11px] leading-relaxed">
              If your Z-Score doesn't meet the state university quota, the <strong>MoHE Interest-Free Student Loan Scheme</strong> covers up to 100% of your tuition at SLIIT, NSBM, CINEC, and SLTC with 0% student interest.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Chat Interface (8 cols) */}
        <div className="lg:col-span-8 rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl shadow-2xl flex flex-col h-[680px]">
          {/* Chat Window Header */}
          <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3.5 bg-slate-950/60 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Bot className="h-5 w-5" />
                <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-slate-950"></span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>LankaEdu AI Counselor</span>
                  <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.2 rounded">
                    ACTIVE
                  </span>
                </h3>
                <p className="text-[11px] text-slate-400">
                  Trained on UGC Admissions Handbooks, TVEC NVQ 1-7, and MoHE Loan Guidelines
                </p>
              </div>
            </div>

            <button
              onClick={handleResetChat}
              className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Reset conversation"
            >
              <RotateCcw className="h-3 w-3" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {messages.map((msg) => {
              const isAssistant = msg.sender === 'assistant';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${isAssistant ? 'items-start' : 'items-start flex-row-reverse'}`}
                >
                  {/* Avatar */}
                  <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                    isAssistant
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-slate-800 text-slate-200 border border-slate-700'
                  }`}>
                    {isAssistant ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>

                  {/* Message Bubble */}
                  <div className={`space-y-3 max-w-[85%] ${isAssistant ? '' : 'text-right'}`}>
                    <div className={`rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                      isAssistant
                        ? 'bg-slate-950/70 border border-slate-800 text-slate-200 shadow-md whitespace-pre-wrap'
                        : 'bg-emerald-500 text-slate-950 font-medium'
                    }`}>
                      {msg.text}

                      {/* Assistant copy button */}
                      {isAssistant && (
                        <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                          <span>{msg.timestamp}</span>
                          <button
                            onClick={() => handleCopyText(msg.id, msg.text)}
                            className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
                          >
                            {copiedId === msg.id ? (
                              <>
                                <Check className="h-3 w-3 text-emerald-400" />
                                <span className="text-emerald-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                <span>Copy Advice</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Render matching courses if provided */}
                    {isAssistant && msg.recommendations && msg.recommendations.length > 0 && (
                      <div className="space-y-2 pt-1">
                        <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                          Recommended Accredited Programs:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {msg.recommendations.map((rec) => {
                            const recTitle = rec.title[language] || rec.title.en;
                            return (
                              <div
                                key={rec.id}
                                className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
                              >
                                <div>
                                  <div className="flex items-center justify-between text-[10px]">
                                    <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                                      {rec.code}
                                    </span>
                                    <span className="text-slate-400">{rec.duration}</span>
                                  </div>
                                  <h4 className="font-bold text-white text-xs mt-1.5 line-clamp-2">
                                    {recTitle}
                                  </h4>
                                  <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                                    {rec.instituteName}
                                  </p>
                                </div>
                                <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                                  <span className="text-[11px] font-semibold text-emerald-400">
                                    {rec.fees.isFreeGovernment ? 'Free (Govt)' : rec.fees.amount}
                                  </span>
                                  <button
                                    onClick={() => onSelectCourse(rec)}
                                    className="text-[10px] font-bold text-slate-200 hover:text-emerald-300 flex items-center gap-1"
                                  >
                                    <span>Details</span>
                                    <ArrowRight className="h-3 w-3" />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Quick Follow-up Prompt Pills */}
                    {isAssistant && msg.quickActions && msg.quickActions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {msg.quickActions.map((action, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSendMessage(action)}
                            className="rounded-lg border border-slate-800 bg-slate-950/60 px-2.5 py-1 text-[11px] text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-900 transition-colors"
                          >
                            💬 {action}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-xs text-slate-400 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-bounce"></span>
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></span>
                  <span className="ml-1 text-slate-400">Analyzing UGC cutoffs and TVEC syllabus...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="border-t border-slate-800 p-3 sm:p-4 bg-slate-950/80 rounded-b-2xl">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask about A/L cutoffs, NVQ levels, course fees, or scholarships..."
                disabled={isTyping}
                className="flex-1 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || isTyping}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex-shrink-0"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
