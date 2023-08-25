import React from 'react';
import './App.css'
import TechSection from './components/TechSection';
import ExpertiseSection from './components/ExpertiseSection';
import ContactSection from './components/ContactSection';
import MainCanvasSection from './components/MainCanvas';

function App() {

  return (
    <>
      <MainCanvasSection />
      <ExpertiseSection />
      <TechSection />
      <ContactSection />
    </>
  )
}

export default App
