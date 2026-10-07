import React from 'react';

// Handcrafted, authentic maritime visuals inspired by high-end offshore sportfishing and Costa Del Mar

export const OFFICIAL_LOGO_URL = '/katrin-logo-white.svg';
export const OFFICIAL_LOGO_FALLBACK = 'https://lituozmsdcrsgvkdityk.supabase.co/storage/v1/object/public/Imagenes/Katrin%20FT%20White%202%20(1).svg';

export const KatrinLogo: React.FC<{
  className?: string;
  imgClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showTagline?: boolean;
}> = ({ className = '', imgClassName = '', size = 'md' }) => {
  const [src, setSrc] = React.useState(OFFICIAL_LOGO_URL);

  const heightClass =
    imgClassName
      ? imgClassName
      : size === 'sm'
      ? 'h-6 sm:h-7'
      : size === 'lg'
      ? 'h-10 sm:h-12'
      : size === 'xl'
      ? 'h-14 sm:h-16 md:h-20'
      : size === 'hero'
      ? 'h-24 sm:h-32 md:h-40 lg:h-48'
      : 'h-8 sm:h-9';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={src}
        alt="Katrin Fishing Team"
        referrerPolicy="no-referrer"
        onError={() => {
          if (src !== OFFICIAL_LOGO_FALLBACK) {
            setSrc(OFFICIAL_LOGO_FALLBACK);
          }
        }}
        className={`${heightClass} w-auto max-w-full object-contain filter brightness-100 contrast-105`}
      />
    </div>
  );
};

export const SpeciesIcon: React.FC<{ name: string; className?: string }> = ({ name, className = 'w-6 h-6' }) => {
  if (name.includes('Marlin')) {
    return (
      <svg viewBox="0 0 64 64" fill="none" className={className} stroke="currentColor" strokeWidth="2">
        {/* Marlin with elongated bill & high dorsal */}
        <path d="M2 30 C14 28 24 22 36 20 C46 18 56 22 62 14" strokeLinecap="round" />
        <path d="M62 14 C52 26 44 32 34 34 C26 36 18 34 10 38 L4 44 L6 36 L2 30 Z" fill="currentColor" fillOpacity="0.15" />
        {/* Sail/Dorsal fin */}
        <path d="M24 22 L28 10 L34 16 L40 12 L44 19" strokeLinecap="round" strokeLinejoin="round" />
        {/* Tail fin */}
        <path d="M4 44 L2 52 L8 46 L14 42" strokeLinecap="round" />
      </svg>
    );
  }
  if (name.includes('Atún') || name.includes('Tuna')) {
    return (
      <svg viewBox="0 0 64 64" fill="none" className={className} stroke="currentColor" strokeWidth="2">
        {/* Hydrodynamic torpedo body of yellowfin tuna */}
        <ellipse cx="32" cy="32" rx="24" ry="12" fill="currentColor" fillOpacity="0.15" />
        <path d="M8 32 C14 22 28 20 44 24 C54 27 58 32 58 32 C58 32 52 38 42 40 C26 44 14 40 8 32 Z" />
        {/* Long sickle pectoral & anal fins */}
        <path d="M36 21 L44 8 L38 23" strokeLinecap="round" />
        <path d="M36 43 L42 56 L34 41" strokeLinecap="round" />
        {/* Crescent caudal tail */}
        <path d="M8 32 L2 20 M8 32 L2 44" strokeLinecap="round" />
      </svg>
    );
  }
  if (name.includes('Mahi') || name.includes('Dorado')) {
    return (
      <svg viewBox="0 0 64 64" fill="none" className={className} stroke="currentColor" strokeWidth="2">
        {/* Bull mahi blunt square forehead & tapering body */}
        <path d="M56 24 C56 16 48 18 42 20 C30 24 18 28 8 32 C18 36 28 38 40 38 C50 38 56 36 56 24 Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M56 24 C56 16 48 18 42 20 C30 24 18 28 8 32 C18 36 28 38 40 38 C50 38 56 36 56 24 Z" />
        {/* Continuous dorsal crest */}
        <path d="M50 18 C38 18 26 22 12 30" strokeLinecap="round" strokeDasharray="3 2" />
        {/* Forked tail */}
        <path d="M8 32 L2 22 M8 32 L2 42" strokeLinecap="round" />
      </svg>
    );
  }
  // Pez Vela / Sailfish default
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <path d="M2 32 C16 30 30 26 44 22 L62 16" strokeLinecap="round" />
      <path d="M62 16 C50 26 40 30 30 32 C20 34 12 34 6 38" />
      {/* Massive spread sail fin */}
      <path d="M18 28 C22 10 32 6 42 12 C44 14 46 22 46 22" fill="currentColor" fillOpacity="0.2" />
      <path d="M6 38 L2 48 M6 38 L2 28" strokeLinecap="round" />
    </svg>
  );
};

// Full-width Hero Visual Canvas with dynamic spray and offshore yacht
export const HeroOffshoreScene: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
      {/* Deep ocean background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020b17] via-[#031b33] to-[#010811]"></div>

      {/* Sun flare and polarized sky reflection */}
      <div className="absolute -top-24 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none"></div>

      {/* Bathymetry underwater contour lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15 stroke-cyan-400/50 fill-none" preserveAspectRatio="none">
        <path d="M0,150 Q400,220 800,160 T1600,240 T2400,180" strokeWidth="1" />
        <path d="M0,280 Q350,340 750,290 T1550,330 T2400,300" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M0,450 Q450,520 900,430 T1700,490 T2400,420" strokeWidth="1.5" />
        <path d="M0,600 Q500,680 1000,580 T1800,640 T2400,590" strokeWidth="1" />
        <path d="M0,750 Q600,820 1200,740 T2000,790 T2400,760" strokeWidth="2" strokeDasharray="6 3" />
      </svg>

      {/* High-speed offshore sportfishing boat custom vector illustration */}
      <div className="absolute bottom-6 right-0 md:right-8 lg:right-16 w-full max-w-[850px] opacity-85">
        <svg viewBox="0 0 1000 480" className="w-full h-auto drop-shadow-2xl">
          <defs>
            <linearGradient id="hullGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
            <linearGradient id="sprayGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="glassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Ocean wakes and spray at 38 knots */}
          <path d="M50 440 Q 220 380 440 430 Q 650 360 980 450 L 980 480 L 50 480 Z" fill="url(#sprayGrad)" opacity="0.7" />
          <path d="M120 420 C 260 360, 480 390, 720 425 C 840 435, 920 400, 1000 440" stroke="#ffffff" strokeWidth="4" fill="none" opacity="0.6" />
          <path d="M220 430 C 340 395, 520 410, 680 430" stroke="#38bdf8" strokeWidth="3" fill="none" opacity="0.8" />

          {/* Sportfisher Hull (Aggressive bow flare and sheer line) */}
          <path d="M320 390 L 760 380 L 890 320 L 840 310 L 700 325 L 360 340 Z" fill="url(#hullGrad)" stroke="#38bdf8" strokeWidth="1.5" />
          {/* Deck & Cockpit Gunwale */}
          <path d="M340 345 L 680 330 L 780 295 L 420 315 Z" fill="#e2e8f0" opacity="0.9" />

          {/* Teak Cockpit Sole */}
          <polygon points="350,345 520,336 505,372 342,376" fill="#b45309" opacity="0.7" />

          {/* Deckhouse / Express Bridge */}
          <path d="M520 335 L 690 320 L 710 260 L 560 270 Z" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
          {/* Bridge Enclosure Glass (Polarized Tint) */}
          <polygon points="580,274 695,263 680,314 570,323" fill="url(#glassGrad)" />

          {/* Hardtop & Tuna Tower (Brushed Aluminum Pipework) */}
          <path d="M540 265 L 720 250 L 710 244 L 530 258 Z" fill="#f8fafc" stroke="#94a3b8" />
          {/* Tuna Tower Legs */}
          <line x1="560" y1="245" x2="620" y2="150" stroke="#cbd5e1" strokeWidth="2.5" />
          <line x1="680" y1="245" x2="650" y2="150" stroke="#cbd5e1" strokeWidth="2.5" />
          <line x1="580" y1="200" x2="660" y2="195" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Tower Upper Driving Station */}
          <rect x="615" y="138" width="40" height="15" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="635" cy="132" r="3" fill="#ffffff" />
          {/* Radar Scanner (Garmin Fantom Open-Array rotating) */}
          <rect x="610" y="125" width="55" height="4" fill="#f8fafc" rx="1" />
          <line x1="637" y1="125" x2="637" y2="134" stroke="#cbd5e1" strokeWidth="2" />

          {/* Triple-Spreader Tournament Outriggers (Rupp Marine 41ft) */}
          <line x1="550" y1="260" x2="260" y2="110" stroke="#e2e8f0" strokeWidth="2.5" />
          <line x1="380" y1="172" x2="410" y2="190" stroke="#0284c7" strokeWidth="1" />
          <line x1="320" y1="140" x2="350" y2="158" stroke="#0284c7" strokeWidth="1" />
          {/* Outrigger Tag Lines / Hal-Locks */}
          <line x1="260" y1="110" x2="360" y2="350" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />

          {/* Fighting Chair in Cockpit (Release Marine Teak) */}
          <rect x="420" y="338" width="12" height="18" fill="#d97706" rx="1" />
          <line x1="426" y1="356" x2="426" y2="368" stroke="#cbd5e1" strokeWidth="3" />

          {/* Water Roostertail & Displacement White Foam */}
          <ellipse cx="880" cy="400" rx="90" ry="25" fill="#ffffff" opacity="0.4" />
          <ellipse cx="640" cy="420" rx="180" ry="30" fill="#38bdf8" opacity="0.3" />
        </svg>
      </div>

      {/* Subtle vignette scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
    </div>
  );
};

// Realistic Crew Avatar SVG Canvas (Costa Del Mar style)
export const CrewAvatarCanvas: React.FC<{ seed: string; name?: string; role?: string }> = ({ seed }) => {
  const isCaptain = seed.includes('captain') || seed.includes('francisco');
  const isFrank = seed.includes('frank');
  const isLuis = seed.includes('luis');
  const isJose = seed.includes('jose');

  const shirtColor = isCaptain
    ? '#091526' // Deep offshore navy
    : isFrank
    ? '#042f2e' // Deep oceanic teal
    : isLuis
    ? '#1c1917' // Graphite / obsidian
    : '#172554'; // Marine cobalt blue

  const lensColor = isCaptain
    ? ['#10b981', '#065f46'] // Green emerald mirror 580G
    : isFrank
    ? ['#06b6d4', '#0369a1'] // Blue mirror 580G
    : isLuis
    ? ['#f59e0b', '#b45309'] // Silver / sunrise amber
    : ['#38bdf8', '#1e40af']; // Polarized ocean sky

  return (
    <div className="relative w-full h-full overflow-hidden bg-neutral-900 group">
      {/* Background coastal light gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${isCaptain ? 'from-slate-800 to-sky-950' : isFrank ? 'from-teal-900 to-neutral-950' : isLuis ? 'from-zinc-800 to-neutral-950' : 'from-blue-900 to-neutral-950'}`}></div>

      {/* Offshore sunlight flare */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-400/20 rounded-full blur-2xl"></div>

      {/* Styled vector portrait */}
      <svg viewBox="0 0 200 240" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105">
        <defs>
          <linearGradient id={`lensGrad-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={lensColor[0]} />
            <stop offset="100%" stopColor={lensColor[1]} />
          </linearGradient>
        </defs>

        {/* Ocean horizon line behind */}
        <line x1="0" y1="120" x2="200" y2="120" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" />
        <line x1="0" y1="124" x2="200" y2="124" stroke="#ffffff" strokeWidth="0.5" opacity="0.2" strokeDasharray="3 4" />

        {/* Shoulders & Technical UV Shirt */}
        <path d="M30 240 C30 190 60 170 100 170 C140 170 170 190 170 240 Z" fill={shirtColor} />
        {/* Zipper / Collar */}
        <path d="M96 170 L96 200 M104 170 L104 200" stroke="#38bdf8" strokeWidth="1.5" />
        {/* Neck */}
        <rect x="88" y="130" width="24" height="45" fill="#fcd34d" opacity="0.8" rx="4" />

        {/* Head shape */}
        <ellipse cx="100" cy="110" rx="34" ry="42" fill="#f59e0b" opacity="0.75" />

        {/* Pro Team Offshore Cap */}
        <g>
          <path d="M64 96 C64 68 136 68 136 96 Z" fill={isCaptain ? '#020617' : '#0f172a'} />
          {/* Cap bill visor */}
          <path d="M58 96 Q100 88 142 96 L148 102 Q100 93 52 102 Z" fill="#1e293b" />
          {/* Emblem on cap */}
          <circle cx="100" cy="80" r="4" fill={isCaptain ? '#38bdf8' : '#22d3ee'} />
        </g>

        {/* Polarized Nautical Shades */}
        <g>
          {/* Frame */}
          <rect x="70" y="100" width="26" height="16" rx="2" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          <rect x="104" y="100" width="26" height="16" rx="2" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          {/* Bridge */}
          <line x1="96" y1="106" x2="104" y2="106" stroke="#09090b" strokeWidth="3" />
          {/* Dark Marine Sunglasses Lenses */}
          <rect x="72" y="102" width="22" height="12" fill={`url(#lensGrad-${seed})`} />
          <rect x="106" y="102" width="22" height="12" fill={`url(#lensGrad-${seed})`} />
          {/* Subtle reflection slash */}
          <line x1="74" y1="103" x2="80" y2="113" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
          <line x1="108" y1="103" x2="114" y2="113" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
        </g>

        {/* Saltwater droplets / wind aura */}
        <circle cx="150" cy="85" r="1.5" fill="#38bdf8" opacity="0.6" />
        <circle cx="45" cy="140" r="1" fill="#ffffff" opacity="0.5" />
        <circle cx="165" cy="160" r="1" fill="#ffffff" opacity="0.4" />
      </svg>
    </div>
  );
};

// Catch & Action Illustration for Water Stories
export const CatchActionCardVisual: React.FC<{ type: string; title: string }> = ({ type, title }) => {
  return (
    <div className="relative w-full h-full min-h-[260px] bg-neutral-950 overflow-hidden group">
      {/* Dynamic oceanic gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-slate-900 to-sky-950"></div>

      {/* Underwater light rays */}
      <div className="absolute -top-12 left-1/3 w-28 h-64 bg-cyan-400/10 rotate-12 blur-xl"></div>
      <div className="absolute -top-12 left-1/2 w-20 h-64 bg-emerald-400/10 rotate-6 blur-xl"></div>

      {/* Water action graphic */}
      <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-700 group-hover:scale-105">
        <svg viewBox="0 0 300 200" className="w-full h-full max-h-[180px] drop-shadow-lg">
          {/* Surface waves */}
          <path d="M 0 100 Q 75 75 150 100 T 300 100" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M 0 115 Q 85 95 170 115 T 300 115" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.3" />

          {/* Saltwater splash erupting */}
          <path d="M 120 100 Q 140 40 170 25 Q 160 55 180 100" fill="#ffffff" opacity="0.3" />
          <circle cx="150" cy="40" r="3" fill="#ffffff" opacity="0.8" />
          <circle cx="170" cy="30" r="2" fill="#38bdf8" opacity="0.9" />
          <circle cx="135" cy="50" r="2.5" fill="#67e8f9" opacity="0.7" />

          {/* Central Fish or Action Silhouette based on title */}
          {title.includes('Marlin') || title.includes('Vela') ? (
            <g transform="translate(70, 40) rotate(-15)">
              <path d="M 0 60 C 30 50, 70 30, 110 30 L 150 15" stroke="#22d3ee" strokeWidth="3" fill="none" />
              <path d="M 150 15 C 120 35, 90 50, 60 55 C 30 60, 10 65, 0 60 Z" fill="#0284c7" />
              <path d="M 35 45 L 55 15 L 75 35" stroke="#38bdf8" strokeWidth="2" fill="#0891b2" opacity="0.8" />
              <path d="M 0 60 L -15 45 M 0 60 L -15 75" stroke="#22d3ee" strokeWidth="2.5" />
            </g>
          ) : title.includes('Atún') || title.includes('Tuna') ? (
            <g transform="translate(80, 50)">
              <ellipse cx="70" cy="40" rx="60" ry="25" fill="#0369a1" />
              <path d="M 85 18 L 105 0 L 92 20" fill="#fbbf24" />
              <path d="M 85 62 L 105 80 L 92 60" fill="#fbbf24" />
              <path d="M 10 40 L -8 20 M 10 40 L -8 60" stroke="#38bdf8" strokeWidth="3" />
            </g>
          ) : (
            <g transform="translate(60, 45)">
              {/* Offshore Boat Stern & Rods */}
              <polygon points="20,110 180,110 160,50 40,50" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
              <line x1="60" y1="50" x2="30" y2="10" stroke="#e2e8f0" strokeWidth="2" />
              <line x1="140" y1="50" x2="170" y2="10" stroke="#e2e8f0" strokeWidth="2" />
              <circle cx="100" cy="70" r="14" fill="#0284c7" opacity="0.4" />
            </g>
          )}
        </svg>
      </div>

      {/* Dark scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
    </div>
  );
};
