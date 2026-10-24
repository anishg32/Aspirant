import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { COMPANY_DETAILS } from '@/data/content';

import { ToastProvider } from '@/components/ui/Toast';
import BackToTop from '@/components/layout/BackToTop';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#2563EB',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://youaspirant.com'),
  title: {
    default: 'You Aspirant | Career Guidance & Practical Training Platform',
    template: '%s | You Aspirant',
  },
  description:
    'Discover honest career pathways, develop practical engineering skills, and prepare for tech hiring rounds with personalized 1-on-1 mentorship. Redesigned by Team Nexora Labs.',
  keywords: [
    'Career Guidance',
    'Tech Training',
    'Full-Stack Web Development',
    'Cloud DevOps',
    'Data Science AI',
    'Mock Technical Interviews',
    'You Aspirant',
    'Nexora Labs',
    'College Student Career Mentorship',
  ],
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  authors: [{ name: 'NEXORA LABS' }],
  creator: 'Team NEXORA LABS - Innovate. Design. Transform.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://youaspirant.com',
    siteName: 'You Aspirant',
    title: 'You Aspirant | Career Guidance & Practical Training Platform',
    description:
      'Your Ambition. Your Skills. Your Next Opportunity. High-impact tech training and personalized career guidance with verified capstones.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 675,
        alt: 'You Aspirant - Career Guidance & Engineering Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'You Aspirant | Career Guidance & Practical Training',
    description:
      'Personalized career pathways, verified code capstones, and 1-on-1 engineering mentorship.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: COMPANY_DETAILS.name,
    legalName: COMPANY_DETAILS.legalName,
    description: COMPANY_DETAILS.mission,
    url: 'https://youaspirant.com',
    logo: 'https://youaspirant.com/icon.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nexora Tower, OMR',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600096',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_DETAILS.contact.phone,
      contactType: 'Customer Guidance & Admissions',
      email: COMPANY_DETAILS.contact.email,
      areaServed: 'IN',
      availableLanguage: ['English', 'Tamil'],
    },
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-lg"
        >
          Skip to main content
        </a>
        <ToastProvider>
          {children}
          <BackToTop />
        </ToastProvider>
      </body>
    </html>
  );
}
