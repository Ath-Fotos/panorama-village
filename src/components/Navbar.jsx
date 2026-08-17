import { Bell, ChevronRight, CloudSun, Menu, Mountain, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { villageInfo, weatherData } from '@/data/villageData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [alertDismissed, setAlertDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#hero' },
    { name: 'Εκδηλώσεις & Νέα', href: '#events' },
    { name: 'Φωτογραφίες', href: '#gallery' },
    { name: 'Άρθρα & Ιστορία', href: '#articles' },
    { name: 'Πληροφορίες & Πεζοπορίες', href: '#info' },
    { name: 'Συχνές Ερωτήσεις', href: '#faq' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Notification / Event Banner */}
      {!alertDismissed && villageInfo.emergencyAlert?.active && (
        <div className="bg-emerald-900 text-emerald-50 px-4 py-2 text-xs md:text-sm font-medium border-b border-emerald-800/60 transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-hidden">
              <Badge
                variant="emeraldDark"
                className="hidden sm:inline-flex gap-1 py-0.5 text-[11px]"
              >
                <Bell className="w-3 h-3" />
                {villageInfo.emergencyAlert.tag}
              </Badge>
              <p className="truncate">{villageInfo.emergencyAlert.text}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#events"
                className="underline hover:text-white font-semibold flex items-center gap-1"
              >
                Πρόγραμμα <ChevronRight className="w-3 h-3" />
              </a>
              <button
                type="button"
                onClick={() => setAlertDismissed(true)}
                className="text-emerald-300 hover:text-white p-0.5"
                aria-label="Κλείσιμο ανακοίνωσης"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-900/90 backdrop-blur-md py-3 shadow-lg border-b border-stone-800/50 text-white'
            : 'bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-800/80 border border-emerald-600/50 flex items-center justify-center text-emerald-300 group-hover:scale-105 transition-transform shadow-md">
              <Mountain className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold font-serif-heading tracking-wide block text-white group-hover:text-emerald-300 transition-colors">
                {villageInfo.name}
              </span>
              <span className="text-[11px] text-stone-300 tracking-wider flex items-center gap-1.5 uppercase font-medium">
                <span>Πίνδος</span>
                <span>•</span>
                <span>{villageInfo.elevation}</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-stone-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Quick Info & Action Pill */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-800/60 border border-stone-700/60 text-xs text-stone-200 backdrop-blur-sm">
              <CloudSun className="w-4 h-4 text-amber-400" />
              <span>{weatherData.currentTemp}</span>
              <span className="text-stone-400">|</span>
              <span className="text-emerald-400 font-medium">Πίνδος</span>
            </div>

            <Button variant="primary" size="sm" className="gap-1.5 rounded-full" asChild>
              <a href="#info">
                <Phone className="w-3.5 h-3.5" />
                <span>Τηλέφωνα</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-stone-800/80 border border-stone-700 text-stone-200 hover:text-white focus:outline-none"
              aria-label="Μενού πλοήγησης"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-stone-900/95 backdrop-blur-xl border-b border-stone-800 text-white px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-stone-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-stone-800 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-stone-300 bg-stone-800/70 p-3 rounded-xl border border-stone-700/60">
                <div className="flex items-center gap-2">
                  <CloudSun className="w-4 h-4 text-amber-400" />
                  <span>
                    Καιρός: {weatherData.currentTemp}, {weatherData.condition}
                  </span>
                </div>
              </div>
              <Button variant="primary" className="w-full" asChild>
                <a href="#info" onClick={() => setMobileMenuOpen(false)}>
                  Οδηγός Πρόσβασης & Τηλέφωνα
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
