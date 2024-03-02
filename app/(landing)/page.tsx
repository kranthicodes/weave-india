import Image from 'next/image';
import Hero from './components/Hero';
import Press from './components/Press';
import Process from './components/Process';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Press />
      <Process />
    </main>
  );
}
