import { ChevronUp, Heart, MapPin, Mountain } from 'lucide-react';
import { villageInfo } from '../data/villageData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-emerald-300">
                <Mountain className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold font-serif-heading text-white">
                {villageInfo.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-4">
              Ένα γραφικό ορεινό χωριό στην καρδιά της Πίνδου, αφιερωμένο στη διατήρηση της
              πολιτιστικής κληρονομιάς, της φύσης και της παραδοσιακής φιλοξενίας.
            </p>

            <div className="text-xs text-stone-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{villageInfo.region}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Υψόμετρο: {villageInfo.elevation}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-serif-heading">
              Ενότητες Ιστοσελίδας
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-emerald-400 transition-colors">
                  Αρχική Σελίδα
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-emerald-400 transition-colors">
                  Νέα & Πολιτιστικές Εκδηλώσεις
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-emerald-400 transition-colors">
                  Φωτογραφικό Κολάζ & Τοπία
                </a>
              </li>
              <li>
                <a href="#articles" className="hover:text-emerald-400 transition-colors">
                  Άρθρα, Παράδοση & Ιστορία
                </a>
              </li>
              <li>
                <a href="#info" className="hover:text-emerald-400 transition-colors">
                  Πεζοπορίες & Οδηγός Πρόσβασης
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Συχνές Ερωτήσεις (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Useful Contact & Emergency */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-serif-heading">
              Χρήσιμα & Έκτακτη Ανάγκη
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li>
                <span className="text-stone-300 block font-semibold">Πολιτιστικός Σύλλογος:</span>
                <span className="font-mono text-emerald-400">+30 6974 555123</span>
              </li>
              <li>
                <span className="text-stone-300 block font-semibold">Νοσοκομείο Γρεβενών:</span>
                <span className="font-mono text-emerald-400">24623 50300</span>
              </li>
              <li>
                <span className="text-stone-300 block font-semibold">Αστυνομία Γρεβενών:</span>
                <span className="font-mono text-emerald-400">24620 22444</span>
              </li>
              <li>
                <span className="text-stone-300 block font-semibold">Πυροσβεστική:</span>
                <span className="font-mono text-emerald-400">199</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Village Motto & Back to top */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-serif-heading">
                Επίσκεψη στην Πίνδο
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed mb-4">
                «Όποιος ανέβηκε στην Πίνδο και γεύτηκε το καθαρό νερό των πηγών της, κρατά για πάντα
                ένα κομμάτι της στην καρδιά του.»
              </p>
              <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700 text-xs text-emerald-300">
                🎿 <strong>Βασιλίτσα:</strong> 20' διαδρομή
                <br />🍄 <strong>Μανιτάρια:</strong> Δάση Πίνδου
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={scrollToTop}
                className="w-full py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold flex items-center justify-center gap-2 border border-stone-700 transition-colors"
              >
                <ChevronUp className="w-4 h-4" />
                <span>Επιστροφή στην Κορυφή</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} {villageInfo.name}. Όλα τα δικαιώματα διατηρούνται.
          </p>
          <div className="flex items-center gap-1">
            <span>Φτιαγμένο με</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
            <span>για το χωριό και τους ανθρώπους της Πίνδου</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
