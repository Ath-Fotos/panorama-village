import { ArrowRight, BookOpen, Clock, Share2, User } from 'lucide-react';
import { useState } from 'react';
import { articles } from '../data/villageData';
import Modal from './Modal';

export default function ArticlesSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = (_article) => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>Ιστορία & Παράδοση</span>
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
          <div className="mb-12 bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 transition-all hover:shadow-xl group">
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
                  <span className="px-3.5 py-1.5 rounded-full bg-emerald-800 text-white text-xs font-bold shadow-md">
                    Προτεινόμενο Άρθρο
                  </span>
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
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(featuredArticle)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-semibold shadow-md transition-all group/btn"
                  >
                    <span>Ανάγνωση Άρθρου</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-xs text-stone-400 font-medium">{featuredArticle.date}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-stone-200/80 p-6 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="h-52 rounded-xl overflow-hidden mb-5 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-sm text-stone-200 text-xs">
                    {article.readTime}
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
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors group/btn"
                >
                  <span>Διαβάστε ολόκληρο το άρθρο</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for full article reading */}
        <Modal
          isOpen={!!selectedArticle}
          onClose={() => setSelectedArticle(null)}
          title={selectedArticle?.title || ''}
        >
          {selectedArticle && (
            <div>
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

              <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleShare(selectedArticle)}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-emerald-800"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copiedLink ? 'Ο σύνδεσμος αντιγράφηκε!' : 'Κοινοποίηση άρθρου'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
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
