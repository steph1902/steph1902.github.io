
import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import data from '../data/portfolio.json';

const About = () => {
  return (
    <VStack as="section" id="about" spacing={4} align="start" p={8}>
      <Heading as="h2" size="xl">About Me</Heading>
      <Text fontSize="lg">{data.about}</Text>
      {data.profile.resume && (
        <Button as="a" href={data.profile.resume} target="_blank" rel="noopener noreferrer" colorScheme="teal">
          Download Resume
        </Button>
      )}
    </VStack>
  );
};

export default About;
