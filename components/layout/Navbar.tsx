'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollProgress((window.scrollY / total) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change without useEffect cascading render
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const audienceLinks = [
    { name: 'School Students', href: '/guidance?audience=school', badge: '8th-12th' },
    { name: 'College Students', href: '/guidance?audience=college', badge: 'B.E/B.Sc/BCA' },
    { name: 'Graduates', href: '/guidance?audience=graduates', badge: 'Pay After Hired' },
    { name: 'Professionals', href: '/guidance?audience=professionals', badge: 'Upskill' },
  ];

  const navLinks = [
    { name: 'Programs', href: '/#programs' },
    { name: 'Pay After Placement', href: '/#pay-after-hired' },
    { name: 'Why Karka', href: '/#why-karka' },
    { name: 'Platforms', href: '/#platforms' },
    { name: 'Learner Stories', href: '/stories' },
    { name: 'Career Matcher', href: '/#career-quiz' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Scroll Indicator */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#4a044e] via-[#7c3aed] to-[#df99d6] transition-all duration-150 ease-out z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Utility Ribbon for Audience Tracks (Desktop) */}
      <div className="hidden lg:block bg-[#4a044e] text-purple-100 py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#360239]">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-purple-200 font-extrabold uppercase tracking-wider text-[11px] shrink-0 mr-1 select-none">
              Programs For:
            </span>
            <div className="flex items-center gap-1.5 shrink-0">
              {audienceLinks.map((aud) => (
                <Link
                  key={aud.name}
                  href={aud.href}
                  className="px-2.5 py-0.5 rounded-full text-white/90 hover:text-white hover:bg-white/15 transition-colors font-medium flex items-center gap-1.5 shrink-0"
                >
                  <span>{aud.name}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/20 text-white font-semibold">
                    {aud.badge}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-purple-200 shrink-0">
            <span className="text-amber-300 font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Pay After You Get Hired Model (₹0 Upfront)
            </span>
            <span className="text-purple-300/40">|</span>
            <a
              href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
              className="hover:text-white transition-colors font-semibold text-purple-100 flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              <span>HQ Hotline:</span>
              <span className="text-white font-bold">{COMPANY_DETAILS.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2.5'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Tag */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4a044e] rounded-lg p-1"
              aria-label="Karka AI & Tech Academy - Home"
            >
              <div className="relative h-9 sm:h-10 w-32 sm:w-36 flex-shrink-0">
                <Image
                  src="/images/karka-official-logo.webp"
                  alt="Karka AI Academy"
                  fill
                  sizes="(max-width: 640px) 128px, 144px"
                  className="object-contain object-left group-hover:scale-105 transition-transform"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col border-l border-slate-200 pl-2.5">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#4a044e]">
                  AI & Tech Academy
                </span>
                <span className="text-[9px] font-semibold text-slate-500">
                  Nagercoil · SRV Towers
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5"
              aria-label="Primary Navigation"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-lg text-xs xl:text-sm font-bold whitespace-nowrap transition-all duration-150 ${
                      isActive
                        ? 'text-[#4a044e] bg-purple-50 font-extrabold shadow-xs'
                        : 'text-slate-700 hover:text-[#4a044e] hover:bg-slate-50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact?type=guidance"
                className="btn-karka-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider"
                id="nav-cta-guidance"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#4a044e] hover:bg-slate-100 border border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4a044e]"
                aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#4a044e]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#4a044e]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[60px] bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white border-l border-slate-200 w-full max-w-sm ml-auto h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Select Audience Track
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#4a044e] text-white">
                  ₹0 Upfront
                </span>
              </div>

              {/* Audience Tracks in Mobile */}
              <div className="grid grid-cols-2 gap-2 mb-4 pb-4 border-b border-slate-100">
                {audienceLinks.map((aud) => (
                  <Link
                    key={aud.name}
                    href={aud.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-purple-50/60 border border-purple-100 text-xs font-semibold text-slate-700 hover:text-[#4a044e] hover:border-[#4a044e]/40 transition-colors"
                  >
                    <div className="text-slate-900 font-bold">{aud.name}</div>
                    <div className="text-[10px] text-[#4a044e] font-semibold mt-0.5">{aud.badge}</div>
                  </Link>
                ))}
              </div>

              <div className="pb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                Main Menu
              </div>
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                        isActive
                          ? 'text-[#4a044e] bg-purple-50 font-bold'
                          : 'text-slate-700 hover:text-[#4a044e] hover:bg-slate-50'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#4a044e]" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4 space-y-3">
              <Link
                href="/contact?type=guidance"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-karka-primary inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold text-center uppercase tracking-wide"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-xs text-slate-500 pt-1">
                Need quick help? Call{' '}
                <a
                  href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
                  className="font-bold text-[#4a044e] hover:underline"
                >
                  {COMPANY_DETAILS.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
