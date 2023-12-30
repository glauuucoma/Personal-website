import './App.css';
import React from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { ContactForm } from './components/Contact'
import { Footer } from './components/Footer';
import './bootstrap.min.css'

function App() {
  return (
    <div className='App'>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <ContactForm/>
        <Footer />
    </div>
  );
}

export default App;