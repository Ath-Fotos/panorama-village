import { ArrowRight, Bell, Calendar, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { categories, newsAndEvents } from '../data/villageData';
import Modal from './Modal';

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Ημερολόγιο Χωριού</span>
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
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* News & Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200/80 transition-all duration-300 flex flex-col group ${
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
                  <span className="px-3 py-1 rounded-full bg-emerald-800/90 text-white text-xs font-semibold shadow-md backdrop-blur-sm">
                    {item.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-stone-900/80 text-stone-200 text-xs font-medium backdrop-blur-sm">
                    {item.categoryLabel}
                  </span>
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
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors group/btn"
                  >
                    <span>Αναλυτικό Πρόγραμμα & Νέα</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSaveToCalendar(item)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      savedEventId === item.id
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
                    }`}
                  >
                    {savedEventId === item.id ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Αποθηκεύτηκε!</span>
                      </>
                    ) : (
                      <>
                        <Bell className="w-3.5 h-3.5 text-stone-500" />
                        <span>Υπενθύμιση</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for full event details */}
        <Modal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem?.title || ''}
        >
          {selectedItem && (
            <div>
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

              <div className="mt-8 pt-4 border-t border-stone-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium"
                >
                  Κλείσιμο
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
