import { ArrowRight, Calendar, Car, Compass, MapPin, Mountain, Snowflake } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { stats, villageInfo } from '@/data/villageData';

export default function Hero() {
  const iconMap = {
    Mountain: <Mountain className="w-5 h-5 text-emerald-400" />,
    Car: <Car className="w-5 h-5 text-amber-400" />,
    Snowflake: <Snowflake className="w-5 h-5 text-sky-400" />,
    Compass: <Compass className="w-5 h-5 text-rose-400" />,
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Image & Dark Ambiance Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
          alt="Οροσειρά Πίνδου και Πανόραμα Γρεβενών"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom"
        />
        {/* Deep dark gradient overlay for crystal clear contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-900/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Top Tag */}
        <div className="inline-flex justify-center mb-6">
          <Badge
            variant="emeraldDark"
            className="px-4 py-2 text-xs sm:text-sm font-semibold gap-2 backdrop-blur-md shadow-xl border-emerald-500/40 text-emerald-300 bg-stone-950/90"
          >
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Οροσειρά Πίνδου • Νομός Γρεβενών • Υψόμετρο 1.050μ.</span>
          </Badge>
        </div>

        {/* Main Headings */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-serif-heading tracking-tight mb-4 text-stone-50 drop-shadow-md">
          {villageInfo.name}
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-emerald-300 font-medium font-serif-heading italic mb-6">
          «{villageInfo.subtitle}»
        </p>

        {/* Descriptive Text */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-200 leading-relaxed mb-10 text-balance">
          {villageInfo.heroDescription}
        </p>

        {/* Call to Actions - Spacious, comfortable width and generous padding */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-3xl mx-auto px-2">
          <Button
            variant="emerald"
            size="hero"
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-bold shadow-2xl group flex-1 max-w-md"
            asChild
          >
            <a href="#events" className="flex items-center justify-center gap-2.5">
              <Calendar className="w-5 h-5 text-emerald-200 shrink-0" />
              <span>Προσεχείς Εκδηλώσεις & Νέα</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          </Button>

          <Button
            variant="glass"
            size="hero"
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-bold shadow-2xl border border-stone-600/80 bg-stone-900/90 hover:bg-stone-800 text-stone-100 flex-1 max-w-md"
            asChild
          >
            <a href="#info" className="flex items-center justify-center gap-2.5">
              <Compass className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Πεζοπορίες & Οδηγός Πρόσβασης</span>
            </a>
          </Button>
        </div>

        {/* Key Statistics / Highlights Cards - High Contrast & High Readability */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {stats.map((item) => (
            <Card
              key={item.label}
              className="bg-stone-950/90 hover:bg-stone-900 border-stone-800 p-5 backdrop-blur-md text-left transition-all hover:border-emerald-700/60 shadow-2xl group text-white"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 group-hover:border-stone-700 transition-colors shadow-inner">
                  {iconMap[item.icon]}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-stone-50 font-serif-heading tracking-tight mb-1">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-stone-300 leading-snug">
                {item.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
