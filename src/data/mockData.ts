import { CrewMember, TargetSpecies, Tournament, SponsorshipTier, WaterStory } from '../types';

export const TARGET_SPECIES: TargetSpecies[] = [
  {
    name: 'Marlin Azul',
    scientificName: 'Makaira nigricans',
    speed: '80 km/h en ataque',
    depth: '0 - 150m (Termoclina)',
    recordCatch: '642 lbs (291 kg) - Los Sueños 2024',
    description: 'El ápice de la pesca deportiva de altura. Requiere líneas de 80-130 lbs, lectura milimétrica de gradientes térmicos y reacción instantánea de la embarcación.',
    season: 'Octubre - Abril'
  },
  {
    name: 'Atún Aleta Amarilla',
    scientificName: 'Thunnus albacares',
    speed: '75 km/h crucero de combate',
    depth: '50 - 250m en cantiles submarinos',
    recordCatch: '284 lbs (128 kg) - Cabo San Lucas',
    description: 'Fuerza bruta inagotable y resistencia metabólica. Detectados mediante radar de aves Furuno a más de 12 millas náuticas.',
    season: 'Todo el año'
  },
  {
    name: 'Mahi Mahi (Dorado)',
    scientificName: 'Coryphaena hippurus',
    speed: '92 km/h sprint acrobático',
    depth: '0 - 30m líneas de sargazo',
    recordCatch: '68 lbs (30.8 kg) - Mar Caribe',
    description: 'Rápidos, voraces y con saltos acrobáticos espectaculares sobre el agua turquesa. Clave en torneos de velocidad y puntos acumulados.',
    season: 'Mayo - Septiembre'
  },
  {
    name: 'Pez Vela del Pacífico',
    scientificName: 'Istiophorus platypterus',
    speed: '110 km/h récord marino',
    depth: 'Superficie / Aguas azules',
    recordCatch: '142 lbs (64 kg) - Tag & Release',
    description: 'El pez más veloz del planeta. Su aleta dorsal imponente y saltos parabólicos exigen temple absoluto del angler y aceleración limpia de proa.',
    season: 'Noviembre - Marzo'
  }
];

export const CREW_MEMBERS: CrewMember[] = [
  {
    id: 'francisco-el-negro-salazar',
    name: 'Francisco "El Negro" Salazar',
    role: 'Capitán',
    badge: 'Capitán',
    experience: 'Navegación en Mar Abierto',
    favoriteSpecies: 'Marlin Azul',
    personalRecord: 'Marlin Azul',
    bio: 'Capitán del Katrin Fishing Team. Líder de navegación, estrategia marina y maniobras en mar abierto.',
    quote: 'El mar exige respeto, instinto y hermandad en cada jornada.',
    certifications: ['Patrón de Pesca Offshore'],
    gear: 'Consola de Navegación Katrin 45',
    avatarSeed: 'captain-francisco',
    photoUrl: '/crew/francisco.jpg',
    photoFallback: 'https://lituozmsdcrsgvkdityk.supabase.co/storage/v1/object/public/Imagenes/IMG_5347.jpeg'
  },
  {
    id: 'frank-salazar',
    name: 'Frank Salazar',
    role: 'Pescador',
    badge: 'Pescador',
    experience: 'Pesca Deportiva y Recreacional',
    favoriteSpecies: 'Pez Vela',
    personalRecord: 'Pez Vela del Pacífico',
    bio: 'Pescador del Katrin Fishing Team. Disciplina y rendimiento en cubierta.',
    quote: 'La pasión por el mar se vive en cada tiro de línea.',
    certifications: ['Pesca Deportiva IGFA'],
    gear: 'Aparejos de Alta Gama',
    avatarSeed: 'angler-frank',
    photoUrl: '/crew/frank.jpg',
    photoFallback: 'https://lituozmsdcrsgvkdityk.supabase.co/storage/v1/object/public/Imagenes/IMG_5347_1.jpeg'
  },
  {
    id: 'luis-salazar',
    name: 'Luis Salazar',
    role: 'Pescador',
    badge: 'Pescador',
    experience: 'Pesca Deportiva y Recreacional',
    favoriteSpecies: 'Atún Aleta Amarilla',
    personalRecord: 'Atún Aleta Amarilla',
    bio: 'Pescador del Katrin Fishing Team. Concentración y agilidad en combate con grandes pelágicos.',
    quote: 'Trabajo en equipo y devoción por la pesca deportiva.',
    certifications: ['Pesca Deportiva IGFA'],
    gear: 'Equipos de Combate Offshore',
    avatarSeed: 'angler-luis',
    photoUrl: '/crew/luis.jpg',
    photoFallback: 'https://lituozmsdcrsgvkdityk.supabase.co/storage/v1/object/public/Imagenes/IMG_5347_2.jpeg'
  },
  {
    id: 'jose-alejandro-salazar',
    name: 'José Alejandro Salazar',
    role: 'Pescador',
    badge: 'Pescador',
    experience: 'Pesca Deportiva y Recreacional',
    favoriteSpecies: 'Mahi Mahi / Dorado',
    personalRecord: 'Dorado en convergencias marinas',
    bio: 'Pescador del Katrin Fishing Team. Preparación, técnica y camaradería a bordo.',
    quote: 'Cada salida es una nueva historia en el mar.',
    certifications: ['Pesca Deportiva IGFA'],
    gear: 'Líneas y Señuelos Profesionales',
    avatarSeed: 'angler-jose',
    photoUrl: '/crew/jose_alejandro.jpg',
    photoFallback: 'https://lituozmsdcrsgvkdityk.supabase.co/storage/v1/object/public/Imagenes/IMG_0285.jpeg'
  },
  {
    id: 'rafael-shicho-spluguez',
    name: 'Rafael "Shicho" Spluguez',
    role: 'Pescador',
    badge: 'Pescador',
    experience: 'Pesca Deportiva y Recreacional',
    favoriteSpecies: 'Grandes Pelágicos',
    personalRecord: 'Offshore Trolling',
    bio: 'Pescador del Katrin Fishing Team. Destreza náutica, aparejos y energía en cubierta.',
    quote: 'El compromiso con el equipo y la faena marina se demuestran en el agua.',
    certifications: ['Pesca Deportiva IGFA'],
    gear: 'Equipos Offshore Profesionales',
    avatarSeed: 'angler-rafael',
    photoUrl: '/crew/rafael_shicho.jpg',
    photoFallback: 'https://lituozmsdcrsgvkdityk.supabase.co/storage/v1/object/public/Imagenes/IMG_5687.jpeg'
  }
];

export const TOURNAMENTS: Tournament[] = [
  {
    id: 'bisbees-black-blue',
    name: "Bisbee's Black & Blue",
    location: 'Cabo San Lucas, Baja California Sur',
    date: '20 - 24 Octubre 2026',
    daysRemaining: 17,
    purse: '$4,250,000 USD',
    targetSpecies: ['Marlin Azul', 'Marlin Negro', 'Atún'],
    status: 'Campeón Defensor',
    previousResult: '1er Lugar Marlin Jackpot (2025)',
    edition: '46ª Edición'
  },
  {
    id: 'los-suenos-triple-crown',
    name: 'Los Sueños Signature Triple Crown',
    location: 'Bahía Herradura, Costa Rica',
    date: '15 - 18 Noviembre 2026',
    daysRemaining: 43,
    purse: '$1,400,000 USD',
    targetSpecies: ['Pez Vela', 'Marlin Azul', 'Dorado'],
    status: 'Confirmado',
    previousResult: '2º Lugar General por Equipos (44 Releases)',
    edition: '22ª Edición'
  },
  {
    id: 'white-marlin-open',
    name: 'White Marlin Open',
    location: 'Ocean City, Maryland, USA',
    date: '03 - 07 Agosto 2026',
    daysRemaining: 304,
    purse: '$10,500,000 USD',
    targetSpecies: ['White Marlin', 'Blue Marlin', 'Tuna'],
    status: 'Clasificado',
    previousResult: 'Top 5 Tuna Division (198 lbs)',
    edition: '53ª Edición'
  },
  {
    id: 'casa-de-campo-cup',
    name: 'Marina Casa de Campo Blue Marlin Classic',
    location: 'La Romana, República Dominicana',
    date: '12 - 16 Mayo 2026',
    daysRemaining: 221,
    purse: '$850,000 USD',
    targetSpecies: ['Marlin Azul', 'Pez Vela', 'Wahoo'],
    status: 'Prioridad Oro',
    previousResult: 'Ganador Mejor Embarcación y Mayor Puntuación Diaria',
    edition: '11ª Edición'
  }
];

export const SPONSORSHIP_TIERS: SponsorshipTier[] = [
  {
    id: 'oro',
    name: 'Patrocinador Oro',
    subtitle: 'Máxima Visibilidad y Cobertura Audiovisual Exclusiva',
    investment: '$300 - $400 (Monetario)',
    featured: true,
    idealFor: 'Marcas que buscan presencia principal y contenido audiovisual exclusivo',
    benefits: [
      { icon: 'shirt', text: 'Logo principal en el pecho o espalda de la camisa.' },
      { icon: 'video', text: '1 Reel exclusivo en Instagram/YouTube producido profesionalmente.' },
      { icon: 'instagram', text: 'Mención en todas las historias del torneo.' },
      { icon: 'flag', text: 'Bandera en la lancha.' }
    ],
    impressionsEstimated: 'Presencia completa en indumentaria, lancha y cobertura audiovisual',
    vipDays: 1
  },
  {
    id: 'plata',
    name: 'Patrocinador Plata',
    subtitle: 'Presencia en Indumentaria y Resumen Oficial',
    investment: '$150 - $200 (Monetario)',
    featured: false,
    idealFor: 'Marcas que desean presencia destacada en camisa y video resumen',
    benefits: [
      { icon: 'shirt', text: 'Logo secundario en mangas de la camisa.' },
      { icon: 'film', text: 'Aparición destacada en el aftermovie o video resumen del torneo.' },
      { icon: 'share-2', text: 'Mención en redes sociales durante el pesaje.' }
    ],
    impressionsEstimated: 'Visibilidad en mangas y difusión digital durante el pesaje',
    vipDays: 0
  },
  {
    id: 'aliado',
    name: 'Aliado Estratégico',
    subtitle: 'Product Placement y Difusión en Altamar',
    investment: 'Intercambio (Hielo, Cervezas, Agua, Comida)',
    featured: false,
    idealFor: 'Marcas de provisiones, bebidas, hidratación y alimentos para jornadas de pesca',
    benefits: [
      { icon: 'camera', text: 'Product placement (fotografías de calidad consumiendo/usando el producto en altamar).' },
      { icon: 'instagram', text: 'Menciones en historias de Instagram durante los dos días de navegación.' }
    ],
    impressionsEstimated: 'Contenido real de consumo en altamar y menciones en vivo',
    vipDays: 0
  }
];

export const WATER_STORIES: WaterStory[] = [
  {
    id: 'batalla-anochecer-gigante-azul',
    title: 'BATALLA HASTA EL ANOCHECER CON EL GIGANTE AZUL',
    species: 'Marlin Azul',
    location: 'Puerto la Cruz',
    date: '28 de septiembre, 2026',
    timestamp: '28 de septiembre, 2026',
    caption: 'Cinco horas de tensión pura hasta las 8PM. Frank Salazar retó al Big Blue llevando al límite la caña de 30 lbs. Al intentar embarcarlo a la fuerza, lo reventamos.',
    aspect: 'horizontal',
    photoUrl: '/stories/gigante_azul.jpeg',
    photoFallback: 'https://lituozmsdcrsgvkdityk.supabase.co/storage/v1/object/public/Imagenes/AAC597F0-5A2B-44C0-9D6D-115F341F4470.JPEG'
  }
];

export const VESSEL_SPECS = {
  model: "Katrin 45' Custom Express Sportfisher",
  builder: 'Custom Marine Yacht Works',
  length: '45 ft (13.72 m)',
  beam: '15.6 ft (4.75 m)',
  draft: '3.8 ft (1.15 m)',
  engines: 'Twin MAN i6-800 Turbocharged Marine Diesels (1,600 HP)',
  cruisingSpeed: '32 Nudos',
  maxSpeed: '39.5 Nudos',
  fuelCapacity: '750 Galones (2,840 Litros) - Rango de 480 MN',
  electronics: [
    'Furuno CSH-8L Omni Sonar 360° Full-Circle',
    'Dual Garmin GPSMAP 8617 Multifunction Displays',
    'Garmin Fantom 126 Open-Array Radar (Ultra High Definition)',
    'Airmar CM599LHW 3kW Chirp Deep-Drop Transducer',
    'FLIR M364C Pan-Tilt High Resolution Thermal Camera'
  ],
  cockpitGear: [
    'Release Marine Trillion Series Teak Fighting Chair con Rocket Launcher',
    'Rupp Marine Triple Spreader Hydraulic Outriggers (41 ft)',
    'Dual Miya Epoch US-9 Electric Teaser Reels integrados en Hardtop',
    'Seakeeper 6 Active Gyrostabilizer (Reducción de balanceo del 92%)',
    'Tanque de vivero de 90 galones con flujo laminar presurizado'
  ]
};
