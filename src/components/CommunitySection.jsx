import { Camera, CheckCircle2, Heart, Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function CommunitySection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [contributionModalOpen, setContributionModalOpen] = useState(false);
  const [contribSubmitted, setContribSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const handleContribSubmit = (e) => {
    e.preventDefault();
    setContribSubmitted(true);
    setTimeout(() => {
      setContribSubmitted(false);
      setContributionModalOpen(false);
    }, 2500);
  };

  return (
    <section id="community" className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Subtle nature pattern background overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Newsletter Box */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <Badge variant="emeraldDark" className="gap-1.5 py-1 px-3">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                <span>Κοινότητα & Απόδημοι</span>
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-white mb-4">
              Μείνετε Συνδεδεμένοι με το Χωριό
            </h2>

            <p className="text-emerald-100/80 text-base sm:text-lg mb-8 leading-relaxed">
              Εγγραφείτε στο ενημερωτικό δελτίο των απανταχού Πανοραμιτών. Λάβετε πρώτοι τα νέα για
              τις εκδηλώσεις, τα ανταμώματα και τις δράσεις του Πολιτιστικού Συλλόγου κατευθείαν στο
              email σας.
            </p>

            <form onSubmit={handleSubscribe} className="max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Το email σας (π.χ. info@example.gr)"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-emerald-900/60 border border-emerald-700/60 text-white placeholder-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold shrink-0 shadow-lg gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Εγγραφή</span>
                </Button>
              </div>

              {subscribed && (
                <div className="mt-3 text-xs text-emerald-300 flex items-center gap-1.5 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Ευχαριστούμε! Η εγγραφή σας ολοκληρώθηκε επιτυχώς.</span>
                </div>
              )}
            </form>
          </div>

          {/* Share Content / Photos Card */}
          <div className="lg:col-span-5">
            <Card className="bg-emerald-900/60 border-emerald-700/50 p-6 sm:p-8 backdrop-blur-md text-white">
              <div className="w-12 h-12 rounded-2xl bg-emerald-800 flex items-center justify-center text-emerald-300 mb-4 border border-emerald-600/40">
                <Camera className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold font-serif-heading text-white mb-2">
                Έχετε Φωτογραφίες ή Ιστορίες;
              </h3>

              <p className="text-xs sm:text-sm text-emerald-200/80 mb-6 leading-relaxed">
                Συμβάλλετε στον εμπλουτισμό του ψηφιακού αρχείου του Πανοράματος. Στείλτε μας παλιές
                ή νέες φωτογραφίες, παραδοσιακές συνταγές ή ιστορικές μαρτυρίες.
              </p>

              <Button
                variant="secondary"
                onClick={() => setContributionModalOpen(true)}
                className="w-full bg-white hover:bg-stone-100 text-stone-900 font-semibold shadow-md gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-800" />
                <span>Αποστολή Φωτογραφίας / Υλικού</span>
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Contribution Dialog */}
      <Dialog open={contributionModalOpen} onOpenChange={setContributionModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Αποστολή Υλικού στον Πολιτιστικό Σύλλογο</DialogTitle>
          </DialogHeader>

          {contribSubmitted ? (
            <div className="py-8 text-center animate-in fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-stone-900 mb-1">Σας ευχαριστούμε πολύ!</h4>
              <p className="text-sm text-stone-600">
                Το μήνυμα και το υλικό σας παραλήφθηκαν και θα αξιολογηθούν από την επιτροπή του
                Συλλόγου.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContribSubmit} className="space-y-4 mt-2">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Ονοματεπώνυμο
                </label>
                <input
                  type="text"
                  required
                  placeholder="π.χ. Νικόλαος Γεωργίου"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.gr"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Τηλέφωνο (Προαιρετικό)
                  </label>
                  <input
                    type="tel"
                    placeholder="69XXXXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Τίτλος / Θέμα
                </label>
                <input
                  type="text"
                  required
                  placeholder="π.χ. Παλιά φωτογραφία από το πανηγύρι του 1965"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Περιγραφή & Ιστορικά Στοιχεία
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Γράψτε μερικά λόγια για τη φωτογραφία, τα πρόσωπα που απεικονίζονται ή την ιστορία..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                ></textarea>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-500">
                💡{' '}
                <em>
                  Μπορείτε επίσης να στείλετε αρχεία υψηλής ανάλυσης απευθείας στο email του
                  συλλόγου: info@panorama-grevena.gr
                </em>
              </div>

              <DialogFooter className="gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setContributionModalOpen(false)}
                >
                  Ακύρωση
                </Button>
                <Button type="submit" variant="emerald">
                  Υποβολή
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
