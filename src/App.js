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
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Hero />
      <Nav/>
      <Intro/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Education/>
      <Footer/>
      <Tooltip title="Resume" aria-lable="resume">
      <Fab color="primary" aria-label="resume" className={classes.absolute}>
        <DescriptionOutlinedIcon />
      </Fab>
      </Tooltip>
    </div>
  );
}

export default App;
