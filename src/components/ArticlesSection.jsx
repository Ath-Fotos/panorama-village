import { ArrowRight, BookOpen, Clock, Share2, User } from 'lucide-react';
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
import { articles } from '@/data/villageData';

export default function ArticlesSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <section id="articles" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex justify-center mb-3">
            <Badge variant="emerald" className="gap-1.5 py-1 px-3">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              <span>Ιστορία & Παράδοση</span>
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-stone-900 mb-4">
            Άρθρα & Αφηγήσεις για το Χωριό
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Ανακαλύψτε τις ρίζες μας: Οι παλιοί μαστόροι της πέτρας, οι αυθεντικές γεύσεις της
            Πίνδου και η συνύπαρξη με την άγρια φύση.
          </p>
        </div>

        {/* Featured Main Article */}
        {featuredArticle && (
          <Card className="mb-12 overflow-hidden shadow-lg hover:shadow-xl group p-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image col */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <Badge variant="emeraldDark" className="shadow-md">
                    Προτεινόμενο Άρθρο
                  </Badge>
                </div>
              </div>

              {/* Text col */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-emerald-700" />
                      {featuredArticle.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading text-stone-900 mb-4 group-hover:text-emerald-800 transition-colors leading-tight">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <Button
                    variant="emerald"
                    onClick={() => setSelectedArticle(featuredArticle)}
                    className="group/btn"
                  >
                    <span>Ανάγνωση Άρθρου</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>

                  <span className="text-xs text-stone-400 font-medium">{featuredArticle.date}</span>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherArticles.map((article) => (
            <Card key={article.id} className="p-6 flex flex-col justify-between group">
              <div>
                <div className="h-52 rounded-xl overflow-hidden mb-5 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3">
                    <Badge variant="default" className="bg-stone-900/80 backdrop-blur-sm">
                      {article.readTime}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                  <User className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="text-xl font-bold font-serif-heading text-stone-900 mb-3 group-hover:text-emerald-800 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed mb-6">{article.summary}</p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <Button
                  variant="link"
                  onClick={() => setSelectedArticle(article)}
                  className="font-semibold text-emerald-800 hover:text-emerald-950 group/btn"
                >
                  <span>Διαβάστε ολόκληρο το άρθρο</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Base UI Dialog for Article Reading */}
        <Dialog open={!!selectedArticle} onOpenChange={(open) => !open && setSelectedArticle(null)}>
          <DialogContent>
            {selectedArticle && (
              <div>
                <DialogHeader>
                  <DialogTitle>{selectedArticle.title}</DialogTitle>
                </DialogHeader>

                <div className="mt-4">
                  <div className="rounded-xl overflow-hidden mb-6 max-h-80">
                    <img
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-stone-50 rounded-xl mb-6 text-xs text-stone-600">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-stone-800">
                        Συγγραφέας: {selectedArticle.author}
                      </span>
                      <span>•</span>
                      <span>{selectedArticle.readTime}</span>
                    </div>
                    <span>{selectedArticle.date}</span>
                  </div>

                  <div className="whitespace-pre-line text-sm sm:text-base text-stone-700 leading-relaxed space-y-4">
                    {selectedArticle.content}
                  </div>
                </div>

                <DialogFooter className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleShare}
                    className="gap-1.5 text-stone-500 hover:text-emerald-800"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{copiedLink ? 'Αντιγράφηκε!' : 'Κοινοποίηση'}</span>
                  </Button>

                  <Button variant="default" onClick={() => setSelectedArticle(null)}>
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
