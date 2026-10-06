export interface CrewMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  experience: string;
  favoriteSpecies: string;
  personalRecord: string;
  bio: string;
  quote: string;
  certifications: string[];
  gear: string;
  avatarSeed: string;
  photoUrl?: string;
  photoFallback?: string;
}

export interface TargetSpecies {
  name: string;
  scientificName: string;
  speed: string;
  depth: string;
  recordCatch: string;
  description: string;
  season: string;
}

export interface Tournament {
  id: string;
  name: string;
  location: string;
  date: string;
  daysRemaining: number;
  purse: string;
  targetSpecies: string[];
  status: 'Confirmado' | 'Campeón Defensor' | 'Clasificado' | 'Prioridad Oro';
  previousResult: string;
  edition: string;
}

export interface SponsorshipTier {
  id: string;
  name: string;
  subtitle: string;
  investment: string;
  featured?: boolean;
  idealFor: string;
  benefits: {
    icon: string;
    text: string;
  }[];
  impressionsEstimated: string;
  vipDays: number;
}

export interface WaterStory {
  id: string;
  title: string;
  species: string;
  weight: string;
  coordinates: string;
  waterTemp: string;
  lureOrBait: string;
  releaseStatus: 'Liberación Satelital' | 'Tag & Release' | 'Pesaje Oficial';
  timestamp: string;
  location: string;
  caption: string;
  aspect: 'square' | 'vertical' | 'horizontal';
  likes: number;
  shares: number;
}
