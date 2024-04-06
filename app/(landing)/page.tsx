import Image from 'next/image';
import Hero from './components/Hero';
import Press from './components/Press';
import Process from './components/Process';
import Testimonial from './components/Testimonial';
import ExploreGallery from './components/ExploreGallery';
import ComingSoon from './components/ComingSoon';
import Collaborate from './components/Collaborate';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Press />
      <Process />
      <Testimonial />
      <ExploreGallery />
      <ComingSoon />
      <Collaborate />
    </main>
  );
}
