import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedSection } from '../components/home/FeaturedSection';
import { LatestUpdates } from '../components/home/LatestUpdates';

export function Home() {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <FeaturedSection />
      <LatestUpdates />
    </div>
  );
}