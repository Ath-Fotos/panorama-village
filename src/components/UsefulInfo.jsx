import {
  AlertTriangle,
  Car,
  Clock,
  Compass,
  Info,
  MapPin,
  Mountain,
  Phone,
  Snowflake,
  TreePine,
} from 'lucide-react';
import { useState } from 'react';
import { accessInfo, hikingTrails, nearbyActivities, usefulPhones } from '../data/villageData';

export default function UsefulInfo() {
  const [activeTab, setActiveTab] = useState('trails');

  const tabs = [
    { id: 'trails', label: 'Πεζοπορίες & Μονοπάτια', icon: Compass },
    { id: 'access', label: 'Πρόσβαση & Οδηγίες', icon: Car },
    { id: 'activities', label: 'Δραστηριότητες & Αξιοθέατα', icon: Mountain },
    { id: 'phones', label: 'Χρήσιμα Τηλέφωνα & Υπηρεσίες', icon: Phone },
  ];

  const activityIcons = {
    Snowflake: Snowflake,
    TreePine: TreePine,
    Compass: Compass,
    Mountain: Mountain,
  };

  return (
    <section id="info" className="py-20 bg-stone-100/60 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Info className="w-3.5 h-3.5 text-emerald-700" />
            <span>Οδηγός Επισκέπτη</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-stone-900 mb-4">
            Χρήσιμες Πληροφορίες, Πεζοπορίες & Δραστηριότητες
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Όλα όσα χρειάζεστε για να οργανώσετε το ταξίδι σας στο Πανόραμα: Οδηγίες πρόσβασης,
            σηματοδοτημένα μονοπάτια, κοντινές εξορμήσεις και χρήσιμα τηλέφωνα.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-md scale-102'
                    : 'bg-white text-stone-700 hover:bg-stone-200/70 border border-stone-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-300' : 'text-stone-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Hiking Trails */}
        {activeTab === 'trails' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {hikingTrails.map((trail) => (
                <div
                  key={trail.id}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-stone-200/80 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold border ${trail.difficultyColor}`}
                      >
                        Δυσκολία: {trail.difficulty}
                      </span>
                      <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        {trail.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-serif-heading text-stone-900 mb-3">
                      {trail.name}
                    </h3>

                    <p className="text-stone-600 text-sm leading-relaxed mb-5">
                      {trail.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 p-3 bg-stone-50 rounded-xl mb-5 border border-stone-100">
                      <div>
                        <span className="text-stone-400 block text-[10px] uppercase">Απόσταση</span>
                        <strong className="text-stone-800">{trail.distance}</strong>
                      </div>
                      <div>
                        <span className="text-stone-400 block text-[10px] uppercase">
                          Υψομετρική Διαφορά
                        </span>
                        <strong className="text-stone-800">{trail.elevationGain}</strong>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-xs font-bold text-stone-800 block mb-2">
                        Κύρια Αξιοθέατα Διαδρομής:
                      </span>
                      <ul className="space-y-1.5 text-xs text-stone-600">
                        {trail.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                      Αφετηρία: {trail.startPoint}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Hiking Safety Tips Banner */}
            <div className="bg-emerald-950 text-emerald-50 rounded-2xl p-5 sm:p-6 border border-emerald-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Compass className="w-8 h-8 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white font-serif-heading text-base">
                    Συμβουλές Ασφάλειας στο Βουνό
                  </h4>
                  <p className="text-xs text-emerald-200 mt-0.5">
                    Φροντίστε να έχετε κατάλληλα ορειβατικά παπούτσια, νερό, αντιανεμικό και να
                    ενημερώνετε για τη διαδρομή σας.
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="shrink-0 px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold"
              >
                Ζητήστε Οδηγό Μονοπατιών
              </a>
            </div>
          </div>
        )}

        {/* Tab 2: Access & Road Directions */}
        {activeTab === 'access' && (
          <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accessInfo.routes.map((route) => (
                <div
                  key={route.from}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                      <Car className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold font-serif-heading text-stone-900 mb-3">
                      {route.from}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{route.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Winter driving warning & gas stations */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-200 bg-amber-50/40">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 font-serif-heading text-base mb-2">
                    Χρήσιμες Συμβουλές Οδήγησης & Χειμερινή Περίοδος
                  </h4>
                  <ul className="space-y-2 text-sm text-stone-700">
                    {accessInfo.winterTips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Activities & Sights */}
        {activeTab === 'activities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in max-w-5xl mx-auto">
            {nearbyActivities.map((act) => {
              const IconComp = activityIcons[act.icon] || Mountain;
              return (
                <div
                  key={act.title}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-stone-200/80 transition-all flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-100">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg font-bold font-serif-heading text-stone-900">
                        {act.title}
                      </h3>
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 text-[11px] font-semibold mb-2">
                      📍 {act.distance}
                    </span>
                    <p className="text-stone-600 text-sm leading-relaxed">{act.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 4: Useful Phones */}
        {activeTab === 'phones' && (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden animate-fade-in">
            <div className="p-6 bg-emerald-900 text-white flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold font-serif-heading">
                  Τηλεφωνικός Κατάλογος & Υπηρεσίες
                </h3>
                <p className="text-xs text-emerald-200 mt-1">
                  Σημαντικά τηλέφωνα επικοινωνίας για κατοίκους και επισκέπτες του Πανοράματος
                </p>
              </div>
              <Phone className="w-8 h-8 text-emerald-300 opacity-80" />
            </div>

            <div className="divide-y divide-stone-100">
              {usefulPhones.map((item) => (
                <div
                  key={item.name}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-stone-900 text-sm sm:text-base">
                      {item.name}
                    </h4>
                    <p className="text-xs text-stone-500">{item.note}</p>
                  </div>
                  <a
                    href={`tel:${item.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-2 font-mono font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100 text-sm self-start sm:self-auto"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{item.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
