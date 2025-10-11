
import React from 'react';
import { Box, Heading, VStack, HStack, Link, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import data from '../data/portfolio.json';

const Contact = () => {
  return (
    <VStack as="section" id="contact" spacing={8} align="center" p={8}>
      <Heading as="h2" size="xl">Contact Me</Heading>
      <HStack spacing={8}>
        <Link href={`mailto:${data.contact.email}`} isExternal>
          <IconButton
            aria-label="Email"
            icon={<FaEnvelope />}
            size="lg"
            isRound
          />
        </Link>
        <Link href={data.contact.linkedin} isExternal>
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="lg"
            isRound
          />
        </Link>
        <Link href={data.contact.github} isExternal>
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub />}
            size="lg"
            isRound
          />
        </Link>
      </HStack>
    </VStack>
  );
};

export default Contact;
