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
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { accessInfo, hikingTrails, nearbyActivities, usefulPhones } from '@/data/villageData';

export default function UsefulInfo() {
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
          <div className="flex justify-center mb-3">
            <Badge variant="emerald" className="gap-1.5 py-1 px-3">
              <Info className="w-3.5 h-3.5 text-emerald-700" />
              <span>Οδηγός Επισκέπτη</span>
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-stone-900 mb-4">
            Χρήσιμες Πληροφορίες, Πεζοπορίες & Δραστηριότητες
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Όλα όσα χρειάζεστε για να οργανώσετε το ταξίδι σας στο Πανόραμα: Οδηγίες πρόσβασης,
            σηματοδοτημένα μονοπάτια, κοντινές εξορμήσεις και χρήσιμα τηλέφωνα.
          </p>
        </div>

        {/* Base UI Tabs */}
        <Tabs defaultValue="trails" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="flex-wrap h-auto gap-2 p-1.5 bg-stone-200/70">
              <TabsTrigger value="trails" className="gap-2">
                <Compass className="w-4 h-4" />
                <span>Πεζοπορίες & Μονοπάτια</span>
              </TabsTrigger>
              <TabsTrigger value="access" className="gap-2">
                <Car className="w-4 h-4" />
                <span>Πρόσβαση & Οδηγίες</span>
              </TabsTrigger>
              <TabsTrigger value="activities" className="gap-2">
                <Mountain className="w-4 h-4" />
                <span>Δραστηριότητες & Αξιοθέατα</span>
              </TabsTrigger>
              <TabsTrigger value="phones" className="gap-2">
                <Phone className="w-4 h-4" />
                <span>Χρήσιμα Τηλέφωνα</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab 1: Hiking Trails */}
          <TabsContent value="trails" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {hikingTrails.map((trail) => (
                <Card key={trail.id} className="flex flex-col justify-between">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${trail.difficultyColor}`}
                      >
                        Δυσκολία: {trail.difficulty}
                      </span>
                      <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        {trail.duration}
                      </span>
                    </div>
                    <CardTitle>{trail.name}</CardTitle>
                  </CardHeader>

                  <CardContent className="pb-4">
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      {trail.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 p-3 bg-stone-50 rounded-xl mb-4 border border-stone-100">
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

                    <div>
                      <span className="text-xs font-bold text-stone-800 block mb-2">
                        Κύρια Σημεία:
                      </span>
                      <ul className="space-y-1 text-xs text-stone-600">
                        {trail.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="text-xs text-stone-500 pt-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                      Αφετηρία: {trail.startPoint}
                    </span>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Hiking Safety Banner */}
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
              <Button variant="emerald" size="sm" asChild>
                <a href="#contact">Ζητήστε Οδηγό Μονοπατιών</a>
              </Button>
            </div>
          </TabsContent>

          {/* Tab 2: Access */}
          <TabsContent value="access" className="space-y-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accessInfo.routes.map((route) => (
                <Card key={route.from} className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 border border-amber-100">
                    <Car className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-serif-heading text-stone-900 mb-3">
                    {route.from}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{route.description}</p>
                </Card>
              ))}
            </div>

            <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-200">
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
          </TabsContent>

          {/* Tab 3: Activities */}
          <TabsContent
            value="activities"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {nearbyActivities.map((act) => {
              const IconComp = activityIcons[act.icon] || Mountain;
              return (
                <Card key={act.title} className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-100">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-serif-heading text-stone-900 mb-1">
                      {act.title}
                    </h3>
                    <Badge variant="secondary" className="mb-2">
                      📍 {act.distance}
                    </Badge>
                    <p className="text-stone-600 text-sm leading-relaxed">{act.desc}</p>
                  </div>
                </Card>
              );
            })}
          </TabsContent>

          {/* Tab 4: Useful Phones */}
          <TabsContent value="phones" className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-stone-200/80">
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
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
