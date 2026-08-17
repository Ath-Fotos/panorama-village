import { Camera, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import { photoGallery } from '../data/villageData';
import Lightbox from './Lightbox';

export default function PhotoGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryFilters = [
    { id: 'all', label: 'Όλες οι Φωτογραφίες' },
    { id: 'village', label: 'Το Χωριό & Καλντερίμια' },
    { id: 'landscape', label: 'Τοπία & Βουνά' },
    { id: 'nature', label: 'Μονοπάτια & Φύση' },
    { id: 'tradition', label: 'Παραδόσεις & Ανταμώματα' },
  ];

  const filteredPhotos =
    activeFilter === 'all' ? photoGallery : photoGallery.filter((p) => p.category === activeFilter);

  const handleOpenLightbox = (index) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    }
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex < filteredPhotos.length - 1) {
      setSelectedPhotoIndex(selectedPhotoIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-stone-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-emerald-700" />
            <span>Φωτογραφικό Κολάζ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-stone-900 mb-4">
            Στιγμές & Τοπία από το Πανόραμα
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Περιηγηθείτε στις φυσικές ομορφιές της Πίνδου, τα παραδοσιακά πέτρινα αρχοντικά, τα
            τοξωτά γεφύρια και τις ζεστές στιγμές των ανθρώπων του χωριού μας.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Dynamic Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[260px]">
          {filteredPhotos.map((photo, index) => {
            // Determine custom spanning for masonry collage look
            const isLarge = photo.aspect === 'large';
            const isTall = photo.aspect === 'tall';
            const isWide = photo.aspect === 'wide';

            return (
              <div
                key={photo.id}
                onClick={() => handleOpenLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 bg-stone-900 ${
                  isLarge ? 'sm:col-span-2 sm:row-span-2' : ''
                } ${isTall ? 'sm:row-span-2' : ''} ${isWide ? 'sm:col-span-2' : ''}`}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-emerald-300 text-[11px] font-semibold tracking-wide border border-stone-700/50">
                    {photo.categoryLabel}
                  </span>
                </div>

                {/* Hover zoom icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5" />
                </div>

                {/* Caption Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h4 className="text-lg sm:text-xl font-bold font-serif-heading mb-1 text-stone-50 drop-shadow">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-stone-300 line-clamp-2">{photo.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedPhotoIndex !== null && (
          <Lightbox
            photo={filteredPhotos[selectedPhotoIndex]}
            onClose={handleCloseLightbox}
            onPrev={handlePrevPhoto}
            onNext={handleNextPhoto}
            hasPrev={selectedPhotoIndex > 0}
            hasNext={selectedPhotoIndex < filteredPhotos.length - 1}
          />
        )}
      </div>
    </section>
  );
}
