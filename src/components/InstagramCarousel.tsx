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
      <div className="absolute inset-y-0 left-0 z-10 hidden sm:flex items-center pointer-events-none -ml-4">
        <button
          onClick={() => scroll('left')}
          aria-label="Desplazar a la izquierda"
          className="pointer-events-auto p-2.5 bg-neutral-900/90 hover:bg-black text-white border border-neutral-700/80 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 shadow-xl"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 z-10 hidden sm:flex items-center pointer-events-none -mr-4">
        <button
          onClick={() => scroll('right')}
          aria-label="Desplazar a la derecha"
          className="pointer-events-auto p-2.5 bg-neutral-900/90 hover:bg-black text-white border border-neutral-700/80 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 shadow-xl"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pure Images: ONLY the photos and direct links */}
      <div
        ref={scrollContainerRef}
        className="w-full flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth pb-2"
      >
        {INSTAGRAM_POSTS.map((post) => (
          <a
            key={post.id}
            href={post.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/item relative shrink-0 w-[220px] sm:w-[250px] md:w-[270px] aspect-square overflow-hidden bg-neutral-100 border border-neutral-200 hover:border-neutral-900 transition-all snap-start block shadow-sm"
          >
            <img
              src={post.imageUrl}
              alt={post.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/item:scale-105"
            />

            {/* Hover Instagram icon indicator */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-11 h-11 rounded-full bg-black/75 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shadow-lg">
                <Instagram className="w-5 h-5" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
