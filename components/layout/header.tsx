"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

import { useLanguage, Language } from "@/contexts/language-context";
import { getTranslations } from "@/lib/i18n/translations";
import { Magnetic } from "@/components/ui/magnetic";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const openButtonRef = React.useRef<HTMLButtonElement>(null);

  const { language, setLanguage } = useLanguage();
  const t = getTranslations(language).nav;
  const [isLangOpen, setIsLangOpen] = React.useState(false);
  const langRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const prevPathnameRef = React.useRef(pathname);
  React.useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setIsMobileMenuOpen(false);
    }
  }, [pathname]);

  const prevIsOpenRef = React.useRef(isMobileMenuOpen);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      // Small delay to ensure the element is rendered and animation started
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else if (prevIsOpenRef.current) {
      setTimeout(() => openButtonRef.current?.focus(), 50);
    }
    prevIsOpenRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  const mainNavLinks: { href: string; label: string; isDropdown?: boolean; subLinks?: {href: string; label: string}[] }[] = [
    { href: "/lookbook", label: t.lookbook },
    { href: "/journal", label: t.journal },
  ];


  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-surface/80 backdrop-blur-2xl shadow-sm py-3"
            : "bg-transparent py-8"
        )}
      >
        <nav className="flex justify-between items-center max-w-[1280px] mx-auto px-5 md:px-[64px]">
          
          {/* Logo (Left) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          >
            <Magnetic>
              <Link
                href="/"
                className="flex-none flex items-center justify-center gap-3 group"
              >
                <span className="font-headline-md text-2xl md:text-3xl font-medium text-primary tracking-tight uppercase tracking-widest transition-transform duration-500 group-hover:scale-105">
                  Talia Boutique
                </span>
              </Link>
            </Magnetic>
          </motion.div>

          {/* Desktop Nav (Center) */}
          <motion.ul 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 1.6 } }
            }}
            className="hidden lg:flex gap-10 items-center justify-center flex-1 mx-8 relative top-[2px]"
          >
            {mainNavLinks.map((link) => {
              const isActive = (pathname.startsWith(link.href) && link.href !== "/") || pathname === link.href;
              return (
                <motion.li 
                  key={link.href} 
                  className="relative group"
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                >
                  <Magnetic>
                    <Link
                      href={link.href}
                      className={cn(
                        "font-label-md text-[11px] uppercase tracking-[0.2em] transition-all duration-300 py-6 block",
                        isActive ? "text-on-surface font-medium" : "text-on-surface/50 hover:text-on-surface"
                      )}
                    >
                      {link.label}
                    </Link>
                  </Magnetic>
                  
                  {link.isDropdown && (
                     <div className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] bg-surface/95 backdrop-blur-xl border border-primary/10 shadow-xl rounded-2xl p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 ease-out z-50">
                        <div className="flex flex-col gap-3">
                           <span className="font-label-sm text-primary uppercase tracking-widest text-[10px] mb-2">{link.label} Exklusiv</span>
                           {link.subLinks?.map((subLink) => (
                              <Link key={subLink.href} href={subLink.href} className="font-body-md text-on-surface/70 hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">
                                 {subLink.label}
                              </Link>
                           ))}
                        </div>
                     </div>
                  )}

                  {isActive && !link.isDropdown && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute bottom-[18px] left-1/2 -translate-x-1/2 w-4 h-[2px] bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Desktop Actions (Right) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
            className="hidden lg:flex gap-4 items-center justify-end"
          >
            {/* Language Switcher */}
            <div className="relative ml-2" ref={langRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary hover:bg-primary-container rounded-full transition-all duration-300 font-label-md text-[11px] uppercase tracking-widest shadow-md hover:purple-shadow"
              >
                <span className="material-symbols-outlined text-[16px]">language</span>
                {language}
                <span className="material-symbols-outlined text-[14px] transition-transform duration-300" style={{ transform: isLangOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-4 py-2 w-24 bg-surface border border-on-surface/10 shadow-lg rounded-lg flex flex-col z-50"
                  >
                    {(["DE", "EN", "TR", "KU", "FA", "AR"] as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setIsLangOpen(false);
                        }}
                        className={cn(
                          "px-4 py-2 text-left font-label-md text-[11px] uppercase tracking-widest transition-colors",
                          language === lang ? "text-primary font-medium bg-primary/5" : "text-on-surface/60 hover:text-primary hover:bg-primary/5"
                        )}
                      >
                        {lang}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>

          {/* Mobile Hamburger Trigger */}
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
            ref={openButtonRef}
            className="lg:hidden text-primary p-2 -mr-2 hover:opacity-80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Menü öffnen"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[32px]">menu</span>
          </motion.button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[60] lg:hidden"
            style={{ willChange: "opacity" }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-on-surface/40 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="absolute top-0 right-0 bottom-0 w-[85vw] max-w-[400px] bg-bg-primary flex flex-col rounded-l-[16px] overflow-hidden"
              style={{ willChange: "transform" }}
            >
              {/* Header inside Menu */}
              <div className="flex justify-between items-center p-6 border-b border-surface-variant/50">
                <span className="font-headline-md text-2xl font-serif text-on-surface italic">{t.menu}</span>
                <button 
                  ref={closeButtonRef}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-text-secondary hover:text-on-surface transition-colors p-2 -mr-2 bg-surface rounded-full border border-surface-variant"
                  aria-label="Menü schließen"
                >
                  <span className="material-symbols-outlined text-[24px]">close</span>
                </button>
              </div>

                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
                  }}
                  className="flex flex-col px-6 py-8 gap-6 flex-1 overflow-y-auto w-full"
                >
                  
                  <div className="mt-2 flex flex-col gap-6">
                    <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                      <Link href="/lookbook" className="font-headline-md text-3xl font-serif text-on-surface hover:text-primary transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>{t.lookbook}</Link>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                      <Link href="/journal" className="font-headline-md text-3xl font-serif text-on-surface hover:text-primary transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>{t.journal}</Link>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                      <Link href="/reviews" className="font-headline-md text-3xl font-serif text-on-surface hover:text-primary transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>{t.reviews}</Link>
                    </motion.div>
                  </div>
                </motion.div>

              {/* Action Icons Footer */}
              <div className="p-6 pb-10 border-t border-surface-variant flex justify-center items-center bg-surface-variant">
                <button onClick={() => {
                    const langs = ["DE", "EN", "TR", "KU", "FA", "AR"] as Language[];
                    const nextLangIdx = (langs.indexOf(language) + 1) % 6;
                    setLanguage(langs[nextLangIdx]);
                  }}
                  className="flex items-center gap-3 px-6 py-3 bg-primary text-on-primary hover:bg-primary-container rounded-full transition-all duration-300 font-label-md uppercase tracking-widest shadow-md hover:purple-shadow w-full justify-center" aria-label="Sprache wechseln"
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">language</span>
                  <span className="text-[12px]">{language} — {t.changeLanguage}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
