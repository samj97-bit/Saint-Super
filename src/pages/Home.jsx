import React from 'react';
import { Hero } from '../components/Hero';
import { ScrollStory } from '../components/ScrollStory';
import { WhyExist } from '../components/WhyExist';
import { Challenges } from '../components/Challenges';
import { Ecosystem } from '../components/Ecosystem';
import { ImpactTimeline } from '../components/ImpactTimeline';
import { FounderMessage } from '../components/FounderMessage';
import { Partners } from '../components/Partners';
import { PhotoGallery } from '../components/PhotoGallery';
import { VoicesOfImpact } from '../components/VoicesOfImpact';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <ScrollStory />
      <ImpactTimeline />
      <WhyExist />
      <Challenges />
      <Ecosystem />
      <FounderMessage />
      <VoicesOfImpact />
      <Partners />
      <PhotoGallery />
      <CTA />
    </>
  );
}
