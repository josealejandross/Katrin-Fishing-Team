import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

interface InstagramPost {
  id: string;
  imageUrl: string;
  postUrl: string;
  alt: string;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'Dd9iPLfmoFh',
    imageUrl: '/instagram/Dd9iPLfmoFh.jpg',
    postUrl: 'https://www.instagram.com/katrinfishing/p/Dd9iPLfmoFh/?hl=es-la',
    alt: 'Katrin Fishing Instagram post 1'
  },
  {
    id: 'Dd5SZWPN_2V',
    imageUrl: '/instagram/Dd5SZWPN_2V.jpg',
    postUrl: 'https://www.instagram.com/katrinfishing/p/Dd5SZWPN_2V/?hl=es-la',
    alt: 'Katrin Fishing Instagram post 2'
  },
  {
    id: 'DOMXlCfjzvG',
    imageUrl: '/instagram/DOMXlCfjzvG.jpg',
    postUrl: 'https://www.instagram.com/katrinfishing/p/DOMXlCfjzvG/?hl=es-la',
    alt: 'Katrin Fishing Instagram post 3'
  },
  {
    id: 'DcJm-L6kWlh',
    imageUrl: '/instagram/DcJm-L6kWlh.jpg',
    postUrl: 'https://www.instagram.com/katrinfishing/p/DcJm-L6kWlh/?hl=es-la',
    alt: 'Katrin Fishing Instagram post 4'
  },
  {
    id: 'Dd5VyZPtPVt',
    imageUrl: '/instagram/Dd5VyZPtPVt.jpg',
    postUrl: 'https://www.instagram.com/katrinfishing/p/Dd5VyZPtPVt/?hl=es-la',
    alt: 'Katrin Fishing Instagram post 5'
  },
  {
    id: 'Dd9q8JWD-EZ',
    imageUrl: '/instagram/Dd9q8JWD-EZ.jpg',
    postUrl: 'https://www.instagram.com/katrinfishing/p/Dd9q8JWD-EZ/?hl=es-la',
    alt: 'Katrin Fishing Instagram post 6'
  },
  {
    id: 'BaCrUR6BMwj',
    imageUrl: '/instagram/BaCrUR6BMwj.jpg',
    postUrl: 'https://www.instagram.com/katrinfishing/p/BaCrUR6BMwj/?hl=es-la',
    alt: 'Katrin Fishing Instagram post 7'
  },
  {
    id: 'BaCrLk0hg2x',
    imageUrl: '/instagram/BaCrLk0hg2x.jpg',
    postUrl: 'https://www.instagram.com/katrinfishing/p/BaCrLk0hg2x/?hl=es-la',
    alt: 'Katrin Fishing Instagram post 8'
  }
];

export const InstagramCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full pt-10 border-t border-neutral-200 relative group">
      {/* Subtle overlay navigation arrows for desktop */}
      <div className="absolute inset-y-0 left-0 z-20 hidden md:flex items-center pointer-events-none -ml-4">
        <button
          onClick={() => scroll('left')}
          aria-label="Desplazar a la izquierda"
          className="pointer-events-auto p-2.5 bg-neutral-900/90 hover:bg-black text-white border border-neutral-700/80 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 shadow-xl"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 z-20 hidden md:flex items-center pointer-events-none -mr-4">
        <button
          onClick={() => scroll('right')}
          aria-label="Desplazar a la derecha"
          className="pointer-events-auto p-2.5 bg-neutral-900/90 hover:bg-black text-white border border-neutral-700/80 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 shadow-xl"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Strictly 1:1 square cards on all devices */}
      <div
        ref={scrollContainerRef}
        className="-mx-6 px-6 sm:mx-0 sm:px-0 flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth pb-3 touch-pan-x overscroll-x-contain"
      >
        {INSTAGRAM_POSTS.map((post) => (
          <a
            key={post.id}
            href={post.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver publicación en Instagram de Katrin Fishing"
            style={{ aspectRatio: '1 / 1' }}
            className="group/item relative shrink-0 w-[68vw] max-w-[260px] sm:w-[240px] md:w-[260px] aspect-square bg-neutral-900 border border-neutral-200 hover:border-neutral-900 transition-all snap-start block shadow-sm overflow-hidden"
          >
            {/* High-resolution photo filling the full 1:1 square seamlessly */}
            <img
              src={post.imageUrl}
              alt={post.alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/item:scale-105"
            />

            {/* Subtle Instagram badge on mobile/desktop */}
            <div className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 shadow-md">
              <Instagram className="w-3.5 h-3.5" />
            </div>

            {/* Hover overlay indicator on desktop */}
            <div className="absolute inset-0 z-20 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 flex items-center gap-2 text-white shadow-xl text-xs font-medium tracking-wide">
                <Instagram className="w-4 h-4 text-white" />
                <span>Ver en Instagram</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Subtle indicator hint on mobile */}
      <div className="sm:hidden flex items-center justify-between text-[11px] text-neutral-400 pt-2 px-1 font-medium">
        <span>Galería de Instagram</span>
        <span>Desliza para ver más →</span>
      </div>
    </div>
  );
};
