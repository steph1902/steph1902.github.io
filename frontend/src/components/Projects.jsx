
import React from 'react';
import { Box, Heading, Grid, Card, CardBody, Image, Text, Button, HStack, Flex } from '@chakra-ui/react';
import data from '../data/portfolio.json';

const Projects = () => {
  return (
    <Box as="section" id="projects" p={8}>
      <Heading as="h2" size="xl" mb={8}>Projects</Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {data.projects.map((project, index) => (
          <Card key={index} overflow="hidden">
            {project.image && (
              <Image src={project.image} alt={project.title} h="200px" objectFit="cover" />
            )}
            {!project.image && (
              <Flex bg="teal.500" h="200px" align="center" justify="center">
                <Heading as="h3" size="lg" color="white">{project.title}</Heading>
              </Flex>
            )}
            <CardBody>
              <Heading as="h3" size="md">{project.title}</Heading>
              <Text mt={2}>{project.description}</Text>
              <HStack mt={4} spacing={2} flexWrap="wrap">
                {project.tech.map((tech, i) => (
                  <Text key={i} fontSize="sm" bg="gray.200" px={2} py={1} borderRadius="md" color="gray.700">{tech}</Text>
                ))}
              </HStack>
              <HStack mt={4} spacing={4}>
                <Button as="a" href={project.demo} target="_blank" rel="noopener noreferrer" colorScheme="teal" size="sm">Demo</Button>
                <Button as="a" href={project.repo} target="_blank" rel="noopener noreferrer" variant="outline" size="sm">Repo</Button>
              </HStack>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
