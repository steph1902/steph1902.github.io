
import React from 'react';
import { Box, Flex, Heading, Link, Spacer } from '@chakra-ui/react';
import data from '../data/portfolio.json';

const Header = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          {data.profile.name}
        </Heading>
      </Flex>

      <Spacer />

      <Box>
        <Link href="#about" p={2}>
          About
        </Link>
        <Link href="#skills" p={2}>
          Skills
        </Link>
        <Link href="#projects" p={2}>
          Projects
        </Link>
        <Link href="#contact" p={2}>
          Contact
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
