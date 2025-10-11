
import React from 'react';
import { Box, Heading, Grid, Card, CardBody, Image, Text, Button, HStack } from '@chakra-ui/react';
import data from '../data/portfolio.json';

const Projects = () => {
  return (
    <Box as="section" id="projects" p={8}>
      <Heading as="h2" size="xl" mb={8}>Projects</Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {data.projects.map((project, index) => (
          <Card key={index} overflow="hidden">
            <Image src={project.image} alt={project.title} />
            <CardBody>
              <Heading as="h3" size="md">{project.title}</Heading>
              <Text mt={2}>{project.description}</Text>
              <HStack mt={4} spacing={2}>
                {project.tech.map((tech, i) => (
                  <Text key={i} fontSize="sm" bg="gray.200" px={2} py={1} borderRadius="md">{tech}</Text>
                ))}
              </HStack>
              <HStack mt={4} spacing={4}>
                <Button as="a" href={project.demo} target="_blank" rel="noopener noreferrer" colorScheme="teal">Demo</Button>
                <Button as="a" href={project.repo} target="_blank" rel="noopener noreferrer" variant="outline">Repo</Button>
              </HStack>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
