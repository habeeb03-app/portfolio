import React, { useState } from 'react';
import { Background } from './components/layout/Background';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Timeline } from './components/sections/Timeline';
import { Contact } from './components/sections/Contact';
import { SectionTransition } from './components/layout/SectionTransition';
import { ContactModal } from './components/ui/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full bg-background selection:bg-secondary/30 selection:text-white">
      <Background />
      <Navbar />
      <main className="relative z-10 flex flex-col items-center overflow-hidden w-full">
        <div className="w-full">
          <SectionTransition>
            <Hero />
          </SectionTransition>
          
          <SectionTransition>
            <About />
          </SectionTransition>
          
          <SectionTransition>
            <Skills />
          </SectionTransition>
          
          <SectionTransition>
            <Projects />
          </SectionTransition>
          
          <SectionTransition>
            <Timeline />
          </SectionTransition>
          
          <SectionTransition>
            <Contact onOpenModal={() => setIsModalOpen(true)} />
          </SectionTransition>
        </div>
      </main>
      <Footer />
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
