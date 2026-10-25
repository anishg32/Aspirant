import type { Metadata, Viewport } from 'next';
import { Inter, Readex_Pro, Encode_Sans_Semi_Condensed, DM_Sans } from 'next/font/google';
import './globals.css';
import { COMPANY_DETAILS } from '@/data/content';

import { ToastProvider } from '@/components/ui/Toast';
import BackToTop from '@/components/layout/BackToTop';
import ScrollObserver from '@/components/layout/ScrollObserver';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const encodeSans = Encode_Sans_Semi_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-display',
});

const readexPro = Readex_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-readex',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const viewport: Viewport = {
  themeColor: '#4a044e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://karka.academy'),
  title: {
    default: 'Karka AI & Tech Academy | AI, Full Stack & Tech Careers in Nagercoil',
    template: '%s | Karka AI & Tech Academy',
  },
  description:
    'Launch your high-impact software career at Karka AI & Tech Academy, Nagercoil. Master AI, Data Science, and Full Stack Development with hands-on projects and Pay After Placement. Redesigned by Team Nexora Labs.',
  keywords: [
    'Karka AI Academy',
    'Karka Academy Nagercoil',
    'Software courses in Nagercoil',
    'AI courses in Nagercoil',
    'Full Stack Development',
    'Data Science AI',
    'Pay After Placement',
    'Spike AI',
    'Karka Infini AI',
    'Nexora Labs',
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
    url: 'https://karka.academy',
    siteName: 'Karka AI & Tech Academy',
    title: 'Karka AI & Tech Academy | AI & Coding in Nagercoil',
    description:
      'The one and only exclusive AI learning center in Nagercoil. High-impact tech training, real Capstone projects, and Pay After Placement.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 675,
        alt: 'Karka AI & Tech Academy - Nagercoil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karka AI & Tech Academy | Coding in Nagercoil',
    description:
      'Master AI, Full Stack Development, and Data Science with industry mentorship at Karka AI Academy, Nagercoil.',
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
    '@type': ['LocalBusiness', 'EducationalOrganization'],
    name: COMPANY_DETAILS.name,
    alternateName: COMPANY_DETAILS.brandName,
    legalName: COMPANY_DETAILS.legalName,
    description: COMPANY_DETAILS.mission,
    url: 'https://karka.academy',
    logo: 'https://karka.academy/logo.png',
    telephone: COMPANY_DETAILS.contact.phone,
    email: COMPANY_DETAILS.contact.email,
    hasMap: COMPANY_DETAILS.contact.mapsUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${COMPANY_DETAILS.contact.building}, ${COMPANY_DETAILS.contact.street}`,
      addressLocality: COMPANY_DETAILS.contact.city,
      addressRegion: COMPANY_DETAILS.contact.state,
      postalCode: COMPANY_DETAILS.contact.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 8.1833,
      longitude: 77.4119,
    },
    openingHours: 'Mo-Sa 09:00-18:00',
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
    <html
      lang="en"
      className={`${inter.variable} ${encodeSans.variable} ${readexPro.variable} ${dmSans.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900 min-h-screen flex flex-col selection:bg-[#4a044e] selection:text-white">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#4a044e] text-white font-bold rounded-lg shadow-lg"
        >
          Skip to main content
        </a>
        <ToastProvider>
          {children}
          <BackToTop />
          <ScrollObserver />
        </ToastProvider>
      </body>
    </html>
  );
}
