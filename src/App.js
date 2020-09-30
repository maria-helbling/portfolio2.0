import React from 'react';
import './App.css';
import Hero from './Components/Hero'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Intro from './Components/Intro'
import Nav from './Components/Nav'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Fab from '@material-ui/core/Fab'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'

function App() {
  return (
    <div>
      <Hero />
      <Nav/>
      <Intro/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Education/>
      <Footer/>
      <Fab color="primary" aria-label="resume">
        <DescriptionOutlinedIcon />
      </Fab>
    </div>
  );
}

export default App;
