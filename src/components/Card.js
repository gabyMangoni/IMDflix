import React from 'react';
import PropTypes from 'prop-types';
import { Box, Center, Image, Tooltip } from '@chakra-ui/react';

const Card = ({ id, image, title, description, resultType, ...props }) => (
  <Center py={4} {...props} key={id}>
    <Box
      maxW={'200px'}
      w={'full'}
      bg={'gray.800'}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
    >
      <Tooltip
        label={(title, description)}
        closeOnClick={false}
        hasArrow
        bg={'brand.yellow'}
        color={'black'}
      >
        <Image
          h={'120px'}
          w={'full'}
          transition='0.3s ease-in-out'
          _hover={{
            transform: 'scale(1.07)',
          }}
          src={image}
          cursor={'pointer'}
          objectFit={'cover'}
          objectPosition='center 0px'
        />
      </Tooltip>
    </Box>
  </Center>
);

Card.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
