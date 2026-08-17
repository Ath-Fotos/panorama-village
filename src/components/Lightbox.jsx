import { ChevronLeft, ChevronRight, Tag, X } from 'lucide-react';
import { useEffect } from 'react';

export default function Lightbox({ photo, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    if (photo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 backdrop-blur-md p-4">
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 text-stone-300 hover:text-white bg-stone-900/60 hover:bg-stone-800 rounded-full transition-colors border border-stone-700"
        aria-label="Κλείσιμο"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      {hasPrev && (
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-stone-200 hover:text-white bg-stone-900/70 hover:bg-stone-800 rounded-full transition-transform hover:scale-110 border border-stone-700"
          aria-label="Προηγούμενη φωτογραφία"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      )}

      {/* Next Button */}
      {hasNext && (
        <button
          type="button"
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-stone-200 hover:text-white bg-stone-900/70 hover:bg-stone-800 rounded-full transition-transform hover:scale-110 border border-stone-700"
          aria-label="Επόμενη φωτογραφία"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      )}

      {/* Main Image View */}
      <div className="max-w-5xl w-full flex flex-col items-center">
        <div className="relative overflow-hidden rounded-xl max-h-[75vh] shadow-2xl">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-stone-100 max-w-2xl px-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-2">
            <Tag className="w-3 h-3" />
            {photo.categoryLabel}
          </div>
          <h4 className="text-xl font-bold font-serif-heading text-white">{photo.title}</h4>
          <p className="text-sm text-stone-300 mt-1">{photo.description}</p>
        </div>
      </div>
    </div>
  );
}
