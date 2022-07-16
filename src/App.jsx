import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import TechStack from './components/techstack/TechStack';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;