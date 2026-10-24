import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GuidanceAssistant from '@/components/assistant/GuidanceAssistant';
import { ShieldAlert, BookCheck, Scale, Award } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';

export const metadata: Metadata = {
  title: 'Terms & Conditions | You Aspirant',
  description:
    'Terms and Conditions for You Aspirant career guidance, training cohorts, and educational advisory services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="space-y-2 border-b border-slate-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Legal Agreement & Disclosures
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Terms and Conditions
              </h1>
              <p className="text-xs text-slate-400">
                Effective Date: October 2026 • You Aspirant Platform
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h2>
                <p>
                  By accessing the <strong>You Aspirant</strong> website or enrolling in any career guidance track or training program offered by {COMPANY_DETAILS.legalName}, you agree to be bound by these Terms and Conditions.
                </p>
              </section>

              <section className="space-y-2 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950">
                <h2 className="text-sm font-bold flex items-center gap-2 text-amber-900">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  <span>2. Ethical Career Guidance Disclosure (Non-Guarantee Policy)</span>
                </h2>
                <p className="text-xs leading-relaxed text-amber-900">
                  You Aspirant provides educational training, skills evaluation, and mentorship. We explicitly do <strong>not</strong> make false promises or guarantees of job placement, employment offers, or specific compensation figures. Hiring outcomes depend entirely on individual learner diligence, performance during employer technical screenings, and market macroeconomic factors.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">3. Learner Code of Conduct & Academic Integrity</h2>
                <p>
                  Learners enrolled in our training programs agree to uphold professional code standards:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Capstone submissions must reflect original work authored by the learner or their assigned group.</li>
                  <li>Respectful, constructive engagement in all live mentorship calls and student communication channels.</li>
                  <li>Distribution or unauthorized sharing of proprietary course materials and lab repositories is strictly prohibited.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">4. 7-Day Unconditional Refund Policy</h2>
                <p>
                  We offer a 7-day refund window starting from the date of the first live lecture in your cohort. If you determine the learning format is not suitable for your needs, you may submit a written refund request to{' '}
                  <a href={`mailto:${COMPANY_DETAILS.contact.email}`} className="text-blue-600 hover:underline">
                    {COMPANY_DETAILS.contact.email}
                  </a>{' '}
                  for a 100% refund of tuition fees paid, with zero hidden deduction fees.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">5. Limitation of Liability</h2>
                <p>
                  In no event shall You Aspirant or its mentors be liable for indirect, incidental, or consequential damages arising from reliance on career guidance advice or software built during hands-on exercises.
                </p>
              </section>

              <section className="space-y-2 border-t border-slate-100 pt-6">
                <h2 className="text-base font-bold text-slate-900">6. Governing Law</h2>
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
