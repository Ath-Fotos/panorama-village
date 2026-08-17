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
      {/* Background Image & Nature Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
          alt="Οροσειρά Πίνδου και Πανόραμα Γρεβενών"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom"
        />
        {/* Layered overlays for dramatic mountain ambiance & text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-900/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Top Tag */}
        <div className="inline-flex justify-center mb-6">
          <Badge
            variant="emeraldDark"
            className="px-4 py-1.5 text-xs sm:text-sm font-semibold gap-2 backdrop-blur-md shadow-lg border-emerald-500/40 text-emerald-300"
          >
            <MapPin className="w-4 h-4 text-emerald-400" />
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

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button
            variant="emerald"
            size="lg"
            className="w-full sm:w-auto gap-2 group shadow-xl"
            asChild
          >
            <a href="#events">
              <Calendar className="w-5 h-5 text-emerald-200" />
              <span>Προσεχείς Εκδηλώσεις & Νέα</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <Button
            variant="glass"
            size="lg"
            className="w-full sm:w-auto gap-2 text-stone-100"
            asChild
          >
            <a href="#info">
              <Compass className="w-5 h-5 text-amber-400" />
              <span>Πεζοπορίες & Οδηγός Πρόσβασης</span>
            </a>
          </Button>
        </div>

        {/* Key Statistics / Highlights Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {stats.map((item) => (
            <Card
              key={item.label}
              className="bg-stone-900/70 hover:bg-stone-900/90 border-stone-800/80 p-4 backdrop-blur-md text-left transition-all hover:border-emerald-700/50 group text-white"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-lg bg-stone-800/80 group-hover:bg-stone-800 transition-colors">
                  {iconMap[item.icon]}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white font-serif-heading">
                {item.value}
              </div>
              <div className="text-xs text-stone-300 mt-0.5">{item.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
