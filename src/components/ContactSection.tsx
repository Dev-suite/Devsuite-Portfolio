import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, MapPin, Linkedin, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [inquiryType, setInquiryType] = useState('Presentation Design System / Pitch Deck');
  const [customMessage, setCustomMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${inquiryType}`);
    const body = encodeURIComponent(
      `Hello Kamaldeen,\n\nI came across your portfolio and would like to discuss a project regarding ${inquiryType}.\n\nDetails:\n${customMessage || 'We have a presentation / information design project we would like to collaborate on.'}\n\nBest regards,`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-[#D9D9D4] bg-[#111111] text-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-[#D4FF00] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#D4FF00]" />
            10 / GET IN TOUCH
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Have something complex to explain?
          </h2>
          <p className="mt-4 text-base sm:text-xl text-white/70 font-sans leading-relaxed">
            Let's turn it into a presentation people can understand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-xl bg-[#1A1A1A] border border-[#333333] space-y-4">
              <div className="font-mono text-xs text-[#D4FF00] font-bold uppercase tracking-wider">
                Direct Email
              </div>
              <div className="font-display font-bold text-lg sm:text-xl text-white break-all">
                {PERSONAL_INFO.email}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#D4FF00]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#D4FF00] text-[#111111] font-mono text-xs font-bold hover:bg-[#c2eb00] transition-colors"
                >
                  <span>Open Mail Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location & Social */}
            <div className="p-6 rounded-xl bg-[#1A1A1A] border border-[#333333] space-y-3 text-xs font-mono">
              <div className="text-white/50 uppercase font-bold tracking-wider pb-2 border-b border-[#2A2A2A]">
                Location & Profiles
              </div>
              <div className="flex items-center justify-between text-white/80">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4FF00]" />
                  <span>Location</span>
                </span>
                <span className="text-white font-semibold">Lagos, Nigeria (Remote)</span>
              </div>
              <div className="flex items-center justify-between text-white/80 pt-2 border-t border-[#2A2A2A]">
                <span className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-[#D4FF00]" />
                  <span>LinkedIn</span>
                </span>
                <a 
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4FF00] hover:underline flex items-center gap-1"
                >
                  <span>linkedin.com/in/kamaldeen-sulyman</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Quick Conversation Launcher Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#1A1A1A] rounded-xl border border-[#333333] p-6 sm:p-8">
            <form onSubmit={handleMailto} className="space-y-5">
              <div className="font-display font-bold text-xl text-white">
                Start a Conversation
              </div>

              {/* Inquiry Type Selector */}
              <div>
                <label className="block font-mono text-xs text-white/70 mb-2 uppercase">
                  Project Focus / Inquiry Type
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full bg-[#111111] border border-[#333333] rounded-lg p-3 text-xs text-white font-sans focus:outline-none focus:border-[#D4FF00]"
                >
                  <option>Presentation Design System / Pitch Deck</option>
                  <option>Information Design / Data Visualization Study</option>
                  <option>AI Design Quality Evaluation / Model Training</option>
                  <option>Executive Strategy Deck / Board One-Pager</option>
                  <option>General Freelance / Contract Role</option>
                </select>
              </div>

              {/* Message Note */}
              <div>
                <label className="block font-mono text-xs text-white/70 mb-2 uppercase">
                  Project Brief or Core Message (Optional)
                </label>
                <textarea
                  rows={4}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Share a brief overview of your presentation objective, target audience, timeline, or scope..."
                  className="w-full bg-[#111111] border border-[#333333] rounded-lg p-3 text-xs text-white font-sans focus:outline-none focus:border-[#D4FF00] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#D4FF00] text-[#111111] hover:bg-[#c2eb00] font-mono text-xs font-bold rounded-lg transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Compose Direct Email Inquiry</span>
              </button>

              <p className="font-mono text-[11px] text-white/50 text-center">
                Typically responds within 24 hours • Available for remote engagements
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
