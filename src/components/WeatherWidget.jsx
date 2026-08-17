import { Clock, CloudSun, Droplets, Mountain, Wind } from 'lucide-react';
import { weatherData } from '../data/villageData';

export default function WeatherWidget() {
  return (
    <section className="relative z-20 -mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-stone-200/80 p-4 sm:p-6 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Weather Highlights */}
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600">
              <CloudSun className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-stone-900">
                  {weatherData.currentTemp}
                </span>
                <span className="text-sm font-semibold text-stone-700">
                  {weatherData.condition}
                </span>
              </div>
              <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5" />
                Ενημέρωση καιρικών συνθηκών: {weatherData.updatedAt}
              </p>
            </div>
          </div>

          {/* Environmental metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 text-xs text-stone-600 border-t lg:border-t-0 lg:border-l border-stone-200 pt-3 lg:pt-0 lg:pl-6 w-full lg:w-auto">
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-sky-500 shrink-0" />
              <div>
                <span className="text-stone-400 block text-[10px] uppercase tracking-wider">
                  Υγρασία
                </span>
                <span className="font-semibold text-stone-800">{weatherData.humidity}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-teal-500 shrink-0" />
              <div>
                <span className="text-stone-400 block text-[10px] uppercase tracking-wider">
                  Άνεμος
                </span>
                <span className="font-semibold text-stone-800">{weatherData.wind}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <Mountain className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <span className="text-stone-400 block text-[10px] uppercase tracking-wider">
                  Καθαρός Αέρας
                </span>
                <span className="font-semibold text-stone-800">100% Πίνδος</span>
              </div>
            </div>
          </div>

          {/* Road status badge */}
          <div className="w-full lg:w-auto bg-stone-50 border border-stone-200/80 rounded-xl px-4 py-2.5 flex items-center justify-between lg:justify-start gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold text-stone-800">{weatherData.roadStatus}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
