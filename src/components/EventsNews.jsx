import { ArrowRight, Bell, Calendar, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
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
import { categories, newsAndEvents } from '@/data/villageData';

export default function EventsNews() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [savedEventId, setSavedEventId] = useState(null);

  const filteredItems =
    activeCategory === 'all'
      ? newsAndEvents
      : newsAndEvents.filter((item) => item.category === activeCategory);

  const handleSaveToCalendar = (item) => {
    setSavedEventId(item.id);
    setTimeout(() => {
      setSavedEventId(null);
    }, 3500);
  };

  return (
    <section id="events" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex justify-center mb-3">
            <Badge variant="emerald" className="gap-1.5 py-1 px-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Ημερολόγιο Χωριού</span>
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-stone-900 mb-4">
            Νέα, Ανακοινώσεις & Πολιτιστικές Εκδηλώσεις
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Μάθετε πρώτοι για τα παραδοσιακά ανταμώματα, τις γιορτές της Πίνδου, τις δράσεις του
            Πολιτιστικού Συλλόγου και τα έργα στο χωριό μας.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              type="button"
              variant={activeCategory === cat.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* News & Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className={`overflow-hidden flex flex-col group ${
                item.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div
                className={`relative overflow-hidden ${item.featured ? 'h-64 sm:h-80' : 'h-52'}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

                {/* Badges on image */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <Badge variant="emeraldDark" className="shadow-md">
                    {item.badge}
                  </Badge>
                  <Badge variant="default" className="bg-stone-900/80 backdrop-blur-sm">
                    {item.categoryLabel}
                  </Badge>
                </div>

                {/* Date on image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-stone-300">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-stone-900 mb-3 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed mb-6">{item.summary}</p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                  <Button
                    variant="link"
                    onClick={() => setSelectedItem(item)}
                    className="inline-flex items-center gap-1.5 font-semibold text-emerald-800 hover:text-emerald-950 group/btn"
                  >
                    <span>Αναλυτικό Πρόγραμμα & Νέα</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant={savedEventId === item.id ? 'emerald' : 'secondary'}
                    size="sm"
                    onClick={() => handleSaveToCalendar(item)}
                  >
                    {savedEventId === item.id ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Αποθηκεύτηκε!</span>
                      </>
                    ) : (
                      <>
                        <Bell className="w-3.5 h-3.5 text-stone-500" />
                        <span>Υπενθύμιση</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Base UI Dialog for Event Details */}
        <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
          <DialogContent>
            {selectedItem && (
              <div>
                <DialogHeader>
                  <DialogTitle>{selectedItem.title}</DialogTitle>
                </DialogHeader>

                <div className="mt-4">
                  <div className="rounded-xl overflow-hidden mb-5 max-h-72">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-stone-50 rounded-xl mb-6 text-xs text-stone-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-700" />
                      <span>
                        <strong>Ημερομηνία:</strong> {selectedItem.date} ({selectedItem.time})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-700" />
                      <span>
                        <strong>Τοποθεσία:</strong> {selectedItem.location}
                      </span>
                    </div>
                  </div>

                  <div className="whitespace-pre-line text-sm text-stone-700 leading-relaxed">
                    {selectedItem.content}
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="default" onClick={() => setSelectedItem(null)}>
                    Κλείσιμο
                  </Button>
                </DialogFooter>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
