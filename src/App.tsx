/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CrewSection } from './components/CrewSection';
import { VesselSection } from './components/VesselSection';
import { Season2026Section } from './components/Season2026Section';
import { TournamentsSection } from './components/TournamentsSection';
import { SponsorshipLanding } from './components/SponsorshipLanding';
import { WaterStoriesSection } from './components/WaterStoriesSection';
import { ContactAndSocialSection } from './components/ContactAndSocialSection';
import { TechnicalFooter } from './components/TechnicalFooter';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'sponsorship-landing'>('home');
  const [selectedTierForLanding, setSelectedTierForLanding] = useState<string>('oro');

  const handleOpenSponsorshipLanding = (tier: string = 'oro') => {
    setSelectedTierForLanding(tier);
    setCurrentView('sponsorship-landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-neutral-200 selection:text-black">
      {/* Navigation Bar */}
      <Navbar
        onGoToSponsorshipLanding={() => handleOpenSponsorshipLanding('oro')}
        onGoHome={handleGoHome}
      />

      <main className="w-full">
        {currentView === 'sponsorship-landing' ? (
          /* Dedicated Landing de Planes de Patrocinio con Formulario de Contacto */
          <SponsorshipLanding
            initialTier={selectedTierForLanding}
            onBackToHome={handleGoHome}
          />
        ) : (
          /* Exact alternating sections order */
          <>
            {/* Inicio / Hero [OSCURO] */}
            <Hero
              onExploreSponsorship={() => handleOpenSponsorshipLanding('oro')}
            />

            {/* 1. Sobre nosotros [BLANCO] (Incluye la galería de fotos de Instagram al pie) */}
            <AboutSection />

            {/* 2. La tripulación [OSCURO] */}
            <CrewSection />

            {/* 3. El barco [BLANCO] */}
            <VesselSection />

            {/* 4. Temporada 2026 con el número de especies capturadas [OSCURO] */}
            <Season2026Section />

            {/* 5. Torneos y competiciones [BLANCO] */}
            <TournamentsSection
              onGoToSponsorshipLanding={handleOpenSponsorshipLanding}
            />

            {/* 6. Historias en el agua [OSCURO] */}
            <WaterStoriesSection />

            {/* 7. El contacto y redes [BLANCO] */}
            <ContactAndSocialSection />
          </>
        )}
      </main>

      {/* Footer Técnico [OSCURO] */}
      <TechnicalFooter />
    </div>
  );
}
