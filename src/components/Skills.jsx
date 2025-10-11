
import React from 'react';
import { Box, Heading, VStack, HStack, Text, Progress } from '@chakra-ui/react';
import data from '../data/portfolio.json';

const Skills = () => {
  return (
    <VStack as="section" id="skills" spacing={8} align="start" p={8}>
      <Heading as="h2" size="xl">Skills</Heading>
      <VStack spacing={4} align="stretch" w="100%">
        {data.skills.map((skill, index) => (
          <Box key={index} w="100%">
            <HStack justify="space-between">
              <Text fontWeight="bold">{skill.name}</Text>
              <Text>{skill.level}/{skill.max}</Text>
            </HStack>
            <Progress value={(skill.level / skill.max) * 100} size="lg" colorScheme="teal" />
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};

export default Skills;
