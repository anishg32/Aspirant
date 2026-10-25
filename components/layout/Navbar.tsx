'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  Menu,
  X,
  ArrowRight,
  BookOpen,
  Users,
  GraduationCap,
  MessageSquare,
  Sparkles,
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
    { name: 'Programs', href: '/programs' },
    { name: 'Why Karka', href: '/#why-karka' },
    { name: 'Platforms', href: '/#platforms' },
    { name: 'Learner Stories', href: '/stories' },
    { name: 'Career Matcher', href: '/#career-quiz' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05020a]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-2.5 border-b border-fuchsia-500/25'
          : 'bg-[#05020a]/85 backdrop-blur-md py-3.5 border-b border-fuchsia-500/15'
      }`}
    >
      {/* Top Scroll Indicator */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#00FFFF] via-[#F000FF] to-[#ffdf00] transition-all duration-150 ease-out z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />
      {/* Top Utility Ribbon for Audience Tracks (Desktop) */}
      <div className="hidden lg:block border-b border-fuchsia-500/15 bg-[#030014]/90 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-1">
            <span className="text-slate-400 font-semibold mr-2 uppercase tracking-wider text-[10px]">
              Programs For:
            </span>
            {audienceLinks.map((aud) => (
              <Link
                key={aud.name}
                href={aud.href}
                className="px-2.5 py-0.5 rounded-full text-slate-300 hover:text-cyan-300 hover:bg-white/5 transition-colors font-medium flex items-center gap-1.5"
              >
                <span>{aud.name}</span>
                <span className="text-[9px] px-1 py-0.2 rounded bg-fuchsia-950/80 text-fuchsia-300 border border-fuchsia-500/30 font-semibold">
                  {aud.badge}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="text-cyan-300 font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              Pay After You Get Hired Model
            </span>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
              className="hover:text-cyan-300 transition-colors font-semibold text-slate-300 flex items-center gap-1"
            >
              <span>Nagercoil HQ:</span>
              <span className="text-cyan-400 font-bold">{COMPANY_DETAILS.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Tag */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            aria-label="Karka AI & Tech Academy - Home"
          >
            <div className="relative h-8 sm:h-9 w-28 sm:w-32 flex-shrink-0">
              <Image
                src="/images/karka-official-logo.webp"
                alt="Karka AI Academy"
                fill
                sizes="(max-width: 640px) 112px, 128px"
                className="object-contain object-left group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-fuchsia-500/30 pl-2.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#00FFFF] to-fuchsia-400 bg-clip-text text-transparent">
                AI & Tech Academy
              </span>
              <span className="text-[9px] font-semibold text-slate-400">
                Nagercoil · SRV Towers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-1"
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
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-fuchsia-950/60 to-cyan-950/60 border border-fuchsia-500/40 font-bold shadow-[0_0_15px_rgba(240,0,255,0.25)]'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-white/5'
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
              className="btn-infini-primary inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold"
              id="nav-cta-guidance"
            >
              <span>Get Career Guidance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-fuchsia-950/40 border border-fuchsia-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-cyan-400" />
              ) : (
                <Menu className="w-6 h-6 text-cyan-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[65px] bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#090318] border-l border-fuchsia-500/30 w-full max-w-sm ml-auto h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-fuchsia-500/20">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Select Audience Track
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/40 text-cyan-300">
                  ₹0 Upfront
                </span>
              </div>

              {/* Audience Tracks in Mobile */}
              <div className="grid grid-cols-2 gap-2 mb-4 pb-4 border-b border-fuchsia-500/20">
                {audienceLinks.map((aud) => (
                  <Link
                    key={aud.name}
                    href={aud.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-fuchsia-950/40 border border-fuchsia-500/30 text-xs font-semibold text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors"
                  >
                    <div className="text-white font-bold">{aud.name}</div>
                    <div className="text-[10px] text-fuchsia-300 mt-0.5">{aud.badge}</div>
                  </Link>
                ))}
              </div>

              <div className="pb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
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
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-cyan-300 bg-fuchsia-950/40 border border-fuchsia-500/30 font-bold'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00FFFF]" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-4 border-t border-fuchsia-500/20 mt-4 space-y-3">
              <Link
                href="/contact?type=guidance"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-infini-primary inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold text-center"
              >
                <span>Get Career Guidance</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-xs text-slate-400 pt-1">
                Need quick help? Call{' '}
                <a
                  href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
                  className="font-medium text-cyan-400 hover:underline"
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
