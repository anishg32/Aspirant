import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GuidanceAssistant from '@/components/assistant/GuidanceAssistant';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';

export const metadata: Metadata = {
  title: 'Privacy Policy | Karka AI & Tech Academy',
  description:
    'Read the Karka AI & Tech Academy Privacy Policy covering data collection, student privacy, and our zero-spam policy in Nagercoil.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030014] text-white selection:bg-[#F000FF] selection:text-white cosmic-nebula-bg">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="card-cosmic p-8 sm:p-12 space-y-8">
            <div className="space-y-2 border-b border-fuchsia-500/20 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                Data Protection & Privacy
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                Privacy <span className="text-gradient-infini">Policy</span>
              </h1>
              <p className="text-xs text-slate-400">
                Last updated: October 2026 • Valid for Karka AI & Tech Academy Educational Services
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">1. Our Core Privacy Commitment</h2>
                <p>
                  At <strong>{COMPANY_DETAILS.legalName}</strong> (&ldquo;Karka AI & Tech Academy&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), we treat student privacy with the highest respect. We operate a strict <strong>zero-spam policy</strong>. We never sell, rent, lease, or monetize student contact details or consultation records to third-party marketing companies.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">2. Information We Collect</h2>
                <p>We only collect personal information that you voluntarily submit to receive career guidance or program information:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li><strong className="text-white">Contact Details:</strong> Full name, email address, and optional phone number.</li>
                  <li><strong className="text-white">Educational Background:</strong> Current academic year, college or branch, and target technical domain.</li>
                  <li><strong className="text-white">Aspiration Data:</strong> Career goals, questions submitted in enquiry forms or via the Guidance Assistant.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">3. Purpose and Use of Data</h2>
                <p>Collected information is used exclusively to:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li>Schedule 1-on-1 diagnostic sessions and counseling calls with senior mentors.</li>
                  <li>Transmit course syllabus PDFs, cohort start schedules, and admissions updates.</li>
                  <li>Analyze aggregate platform usage to improve curriculum structure and website usability.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">4. Data Security & Storage</h2>
                <p>
                  All web traffic and form submissions are encrypted in transit via industry-standard Transport Layer Security (TLS/HTTPS). Internal database records are protected by access-controlled credentials and encrypted at rest.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">5. Your Data Rights</h2>
                <p>
                  You have the right to request access to any personal data we hold about you, request corrections, or request immediate permanent deletion of your enquiry records by emailing{' '}
                  <a href={`mailto:${COMPANY_DETAILS.contact.email}`} className="text-cyan-400 hover:underline">
                    {COMPANY_DETAILS.contact.email}
                  </a>.
                </p>
              </section>

              <section className="space-y-2 border-t border-fuchsia-500/20 pt-6">
                <h2 className="text-base font-bold text-white">6. Contact Our Data Compliance Team</h2>
                <p>
                  For any privacy inquiries or consent withdrawals, contact our privacy desk at{' '}
                  <a href={`mailto:${COMPANY_DETAILS.contact.email}`} className="text-cyan-400 hover:underline">
                    {COMPANY_DETAILS.contact.email}
                  </a>{' '}
                  or by post at {COMPANY_DETAILS.contact.address}.
                </p>
              </section>
            </div>
          </div>

        </div>
      </main>
      <Footer />
      <GuidanceAssistant />
    </div>
  );
}
