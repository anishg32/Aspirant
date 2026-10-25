import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GuidanceAssistant from '@/components/assistant/GuidanceAssistant';
import { ShieldAlert, BookCheck, Scale, Award } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Karka AI & Tech Academy',
  description:
    'Terms and Conditions for Karka AI & Tech Academy career guidance, training cohorts, and educational advisory services in Nagercoil.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030014] text-white selection:bg-[#F000FF] selection:text-white cosmic-nebula-bg">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="card-cosmic p-8 sm:p-12 space-y-8">
            <div className="space-y-2 border-b border-fuchsia-500/20 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                Legal Agreement & Disclosures
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                Terms and <span className="text-gradient-infini">Conditions</span>
              </h1>
              <p className="text-xs text-slate-400">
                Effective Date: October 2026 • Karka AI & Tech Academy Platform
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">1. Acceptance of Terms</h2>
                <p>
                  By accessing the <strong>Karka AI & Tech Academy</strong> website or enrolling in any career guidance track or training program offered by {COMPANY_DETAILS.legalName}, you agree to be bound by these Terms and Conditions.
                </p>
              </section>

              <section className="space-y-2 p-4 rounded-2xl bg-amber-950/40 border border-amber-400/40 text-amber-200">
                <h2 className="text-sm font-bold flex items-center gap-2 text-amber-300">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  <span>2. Ethical Career Guidance Disclosure (Non-Guarantee Policy)</span>
                </h2>
                <p className="text-xs leading-relaxed text-amber-200">
                  Karka AI Academy provides educational training, skills evaluation, and mentorship. We explicitly do <strong>not</strong> make false promises or guarantees of job placement, employment offers, or specific compensation figures. Hiring outcomes depend entirely on individual learner diligence, performance during employer technical screenings, and market macroeconomic factors.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">3. Learner Code of Conduct & Academic Integrity</h2>
                <p>
                  Learners enrolled in our training programs agree to uphold professional code standards:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li>Capstone submissions must reflect original work authored by the learner or their assigned group.</li>
                  <li>Respectful, constructive engagement in all live mentorship calls and student communication channels.</li>
                  <li>Distribution or unauthorized sharing of proprietary course materials and lab repositories is strictly prohibited.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">4. 7-Day Unconditional Refund Policy</h2>
                <p>
                  We offer a 7-day refund window starting from the date of the first live lecture in your cohort. If you determine the learning format is not suitable for your needs, you may submit a written refund request to{' '}
                  <a href={`mailto:${COMPANY_DETAILS.contact.email}`} className="text-cyan-400 hover:underline">
                    {COMPANY_DETAILS.contact.email}
                  </a>{' '}
                  for a 100% refund of tuition fees paid, with zero hidden deduction fees.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-white">5. Limitation of Liability</h2>
                <p>
                  In no event shall Karka AI & Tech Academy or its mentors be liable for indirect, incidental, or consequential damages arising from reliance on career guidance advice or software built during hands-on exercises.
                </p>
              </section>

              <section className="space-y-2 border-t border-fuchsia-500/20 pt-6">
                <h2 className="text-base font-bold text-white">6. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Tamil Nadu, India, without regard to conflict of law principles.
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
