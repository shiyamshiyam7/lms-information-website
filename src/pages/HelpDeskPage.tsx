import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  ArrowRight, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { faqData } from '../data/faqData';
import { FAQItem } from '../types';

export const HelpDeskPage: React.FC = () => {
  const { language, t } = useLanguage();

  // FAQ state
  const [faqSearch, setFaqSearch] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('all');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-z-score');

  // Contact form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    district: 'Colombo',
    academicLevel: 'G.C.E. A/L Completed',
    inquiryType: 'University Admissions & Z-Score',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [formError, setFormError] = useState('');

  const filteredFaqs = faqData.filter((item) => {
    if (selectedFaqCategory !== 'all' && item.category !== selectedFaqCategory) {
      return false;
    }
    if (faqSearch.trim()) {
      const q = faqSearch.toLowerCase();
      const match = 
        item.question.en.toLowerCase().includes(q) ||
        item.question.si.toLowerCase().includes(q) ||
        item.question.ta.toLowerCase().includes(q) ||
        item.answer.en.toLowerCase().includes(q) ||
        item.answer.si.toLowerCase().includes(q) ||
        item.answer.ta.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please complete your name, email, and inquiry message.');
      return;
    }
    setFormError('');
    const generatedTicket = `LK-EDU-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedTicket);
    setFormSubmitted(true);
  };

  const nvqLadderSteps = [
    { level: 'Level 1 - 2', name: 'Foundation & Operational Craft', target: 'O/L Non-qualifiers or School Leavers', badge: 'Entry Level' },
    { level: 'Level 3 - 4', name: 'Skilled Craftsman & Certified Tech', target: 'Electrician, Mechanic, Draughtsman, Nurse Assistant', badge: 'Industry Ready' },
    { level: 'Level 5', name: 'National Diploma (SLQF 3-4)', target: 'Supervisory Technical Specialist', badge: 'Diploma' },
    { level: 'Level 6', name: 'Higher National Diploma (HND)', target: 'Assistant Engineer / Operations Lead', badge: 'Higher Diploma' },
    { level: 'Level 7', name: 'Bachelor of Technology (B.Tech)', target: 'Univotec / Ocean University Degree Graduate', badge: 'Full Degree (SLQF 6)' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
          <HelpCircle className="h-3.5 w-3.5 text-emerald-400" />
          <span>Student Advisory & Support Desk</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Help Desk & Frequently Asked Questions
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Guidance on UGC Z-Score district quotas, the TVEC NVQ Level 1-7 vocational qualification ladder, Ministry of Education student loan disbursements, and institutional admissions.
        </p>
      </div>

      {/* NVQ Progression Ladder Interactive Infographic */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              National TVEC Qualifications Pathway
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              From Craftsman to Bachelor's Degree (NVQ 1 - 7)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Sri Lanka's vocational system allows students with G.C.E. O/L or work experience to ascend to a recognized university degree without relying on G.C.E. A/L Z-Scores.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
            <Award className="h-4 w-4" />
            <span>TVEC & Univotec Accredited</span>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {nvqLadderSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-slate-800 bg-slate-950/70 p-4 flex flex-col justify-between hover:border-emerald-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-emerald-400 mb-2">
                  <span>{step.level}</span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                    Step 0{idx + 1}
                  </span>
                </div>
                <h4 className="font-bold text-white text-sm group-hover:text-emerald-300 transition-colors">
                  {step.name}
                </h4>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {step.target}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <span className="text-[10px] font-semibold text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                  {step.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Searchable FAQ Section */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Student Knowledgebase
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Common Questions & Answers
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative min-w-[280px]">
            <Search className="h-4 w-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search questions (e.g. Z-score, loans, RPL)..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Topics' },
            { id: 'admissions', label: 'UGC & State Universities' },
            { id: 'nvq', label: 'NVQ & RPL Vocational' },
            { id: 'loans', label: 'Interest-Free Loans (IFSLS)' },
            { id: 'slqf', label: 'SLQF Framework' },
            { id: 'appeals', label: 'Appeals & Re-Scrutiny' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFaqCategory(cat.id)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all border ${
                selectedFaqCategory === cat.id
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedFaqId === faq.id;
            const q = faq.question[language] || faq.question.en;
            const a = faq.answer[language] || faq.answer.en;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isExpanded
                    ? 'border-emerald-500/50 bg-slate-900/90 shadow-lg shadow-emerald-950/20'
                    : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4"
                >
                  <span className="font-bold text-sm sm:text-base text-white hover:text-emerald-300 transition-colors">
                    {q}
                  </span>
                  <div className="p-1 rounded-lg bg-slate-800 text-slate-400 flex-shrink-0">
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 animate-in fade-in">
                    <p>{a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Support & Ticket Submission Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Information (5 cols) */}
        <div className="lg:col-span-5 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Direct Inquiries
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Contact Student Support
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Have a specific question about your district Z-Score cutoff, German Tech admissions, or the Ministry Loan intake? Submit your inquiry directly to our guidance desk.
            </p>
          </div>

          <div className="space-y-4 pt-2 border-t border-slate-800">
            <div className="flex items-start gap-3 text-xs text-slate-300">
              <Phone className="h-4 w-4 text-emerald-400 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Government Hotline: 1919</span>
                <span className="text-slate-400">Toll-free citizen education support line</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-slate-300">
              <Mail className="h-4 w-4 text-cyan-400 mt-0.5" />
              <div>
                <span className="font-bold text-white block">support@lankaedu.gov.lk</span>
                <span className="text-slate-400">Response within 24 business hours</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-slate-300">
              <MapPin className="h-4 w-4 text-teal-400 mt-0.5" />
              <div>
                <span className="font-bold text-white block">National Education Secretariat</span>
                <span className="text-slate-400">Isurupaya, Battaramulla, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          {formSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Inquiry Received Successfully!</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Your ticket reference is{' '}
                <span className="font-mono font-bold text-emerald-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {ticketId}
                </span>. An academic advisor has been assigned to your query.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    district: 'Colombo',
                    academicLevel: 'G.C.E. A/L Completed',
                    inquiryType: 'University Admissions & Z-Score',
                    message: ''
                  });
                }}
                className="mt-4 rounded-xl bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <h4 className="text-lg font-bold text-white">Student Inquiry Form</h4>

              {formError && (
                <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Kasun Jayawardena"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="kasun@example.com"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="077 123 4567"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Administrative District
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  >
                    {[
                      'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya',
                      'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
                      'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
                      'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla',
                      'Monaragala', 'Ratnapura', 'Kegalle'
                    ].map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Academic Status
                  </label>
                  <select
                    value={formData.academicLevel}
                    onChange={(e) => setFormData({ ...formData, academicLevel: e.target.value })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="G.C.E. A/L Completed">G.C.E. A/L Completed</option>
                    <option value="G.C.E. O/L Student">G.C.E. O/L Student</option>
                    <option value="Diploma / NVQ Seeking">Diploma / NVQ Seeking</option>
                    <option value="Undergraduate Transfer">Undergraduate Transfer</option>
                    <option value="Working Technician">Working Technician (RPL Route)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="University Admissions & Z-Score">University Admissions & Z-Score</option>
                    <option value="NVQ Level Certification & RPL">NVQ Level Certification & RPL</option>
                    <option value="MoHE Interest-Free Student Loans">MoHE Interest-Free Student Loans</option>
                    <option value="German Tech (CGTTI) Admissions">German Tech (CGTTI) Admissions</option>
                    <option value="Scholarships & Financial Aid">Scholarships & Financial Aid</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                  Your Message or Question *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your inquiry, results, or desired program..."
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs text-white focus:border-emerald-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3 text-xs font-bold text-slate-950 hover:brightness-110 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Submit Inquiry to Guidance Desk</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
