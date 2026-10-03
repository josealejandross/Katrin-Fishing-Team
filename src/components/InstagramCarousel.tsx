import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SocialIconInstagram } from './SocialIcons';

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
  const [isMouseDown, setIsMouseDown] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsMouseDown(true);
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    if (Math.abs(walk) > 4) {
      hasDraggedRef.current = true;
    }
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  const handleClickItem = (e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
    }
  };

  return (
    <div className="w-full pt-10 border-t border-neutral-200 relative group">
      {/* Overlay navigation arrows for desktop */}
      <div className="absolute inset-y-0 left-0 z-20 hidden md:flex items-center pointer-events-none -ml-4">
        <button
          onClick={() => scroll('left')}
          type="button"
          aria-label="Desplazar a la izquierda"
          className="pointer-events-auto p-2.5 bg-neutral-900/90 hover:bg-black text-white border border-neutral-700/80 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 shadow-xl cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 z-20 hidden md:flex items-center pointer-events-none -mr-4">
        <button
          onClick={() => scroll('right')}
          type="button"
          aria-label="Desplazar a la derecha"
          className="pointer-events-auto p-2.5 bg-neutral-900/90 hover:bg-black text-white border border-neutral-700/80 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 shadow-xl cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Strictly 1:1 square cards, full bleed on all devices */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`-mx-6 px-6 sm:mx-0 sm:px-0 flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth pb-3 touch-pan-x overscroll-x-contain ${
          isMouseDown ? 'cursor-grabbing select-none' : 'cursor-grab'
        }`}
      >
        {INSTAGRAM_POSTS.map((post) => (
          <a
            key={post.id}
            href={post.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClickItem}
            aria-label="Ver publicación en Instagram de Katrin Fishing"
            style={{ aspectRatio: '1 / 1' }}
            className="group/item relative shrink-0 w-[72vw] min-w-[220px] max-w-[280px] sm:w-[240px] md:w-[260px] lg:w-[275px] aspect-square bg-neutral-900 border border-neutral-200 hover:border-neutral-900 transition-all snap-start block shadow-sm overflow-hidden select-none"
          >
            {/* Absolute positioning guarantees 100% width and height coverage on all WebKit & mobile engines */}
            <img
              src={post.imageUrl}
              alt={post.alt}
              loading="lazy"
              draggable={false}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block'
              }}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/item:scale-105"
            />

            {/* Subtle Instagram badge on mobile/desktop */}
            <div className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 shadow-md pointer-events-none">
              <SocialIconInstagram className="w-3.5 h-3.5 text-white" />
            </div>

            {/* Hover overlay indicator on desktop */}
            <div className="absolute inset-0 z-20 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <div className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 flex items-center gap-2 text-white shadow-xl text-xs font-medium tracking-wide">
                <SocialIconInstagram className="w-4 h-4 text-white" />
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
