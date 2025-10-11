import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box>
      <Header />
      <Box as="main" p={4}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>
    </Box>
  );
}

export default App;
