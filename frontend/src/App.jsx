import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Box, Container } from '@chakra-ui/react';

function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Header />
      <Container as="main" maxW="container.xl" py={8}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </Box>
  );
}

export default App;
