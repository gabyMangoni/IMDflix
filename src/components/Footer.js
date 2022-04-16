import React from 'react';
import { Box, Container, Stack, useColorModeValue } from '@chakra-ui/react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

import SocialButton from './SocialButton';

export default function SmallWithLogoLeft() {
  return (
    <Box bg={'brand.footer'} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        minH={'6vh'}
        as={Stack}
        maxW='6xl'
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Box color={'black'} fontSize={{ base: 'xl', md: 'xl' }}>
          IMDflix {new Date().getFullYear()} {''}
        </Box>
        <Stack direction='row' spacing={6}>
          <SocialButton label='Facebook' href={'#'}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label='Linkedin' href={'#'}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label='Instagram' href={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
