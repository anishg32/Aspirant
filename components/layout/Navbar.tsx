'use client';

import React, { useState, useEffect } from 'react';
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Career Guidance', href: '/guidance' },
    { name: 'Training Programs', href: '/programs' },
    { name: 'Success Stories', href: '/stories' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-sm py-3'
          : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
      }`}
    >
      {/* Top Scroll Indicator */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-teal-400 to-blue-600 transition-all duration-150 ease-out z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Tag */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-lg p-1"
            aria-label="Karka AI & Tech Academy - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4a044e] via-purple-900 to-fuchsia-600 flex items-center justify-center text-white shadow-md shadow-purple-900/30 group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-[#4a044e] transition-colors">
                KARKA<span className="text-[#4a044e]">.AI</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1">
                AI & Tech Academy · Nagercoil
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
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/80 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-sm shadow-blue-600/30 transition-all duration-200 hover:shadow-md hover:shadow-blue-600/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
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
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[65px] bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white w-full max-w-sm ml-auto h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Navigation
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700">
                  Nexora Labs Redesign
                </span>
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
                      className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'text-blue-600 bg-blue-50 font-semibold'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 space-y-3">
              <Link
                href="/contact?type=guidance"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/30 text-center"
              >
                <span>Get Career Guidance</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-xs text-slate-500 pt-2">
                Need quick help? Call{' '}
                <a
                  href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
                  className="font-medium text-slate-700 hover:text-blue-600 underline"
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
