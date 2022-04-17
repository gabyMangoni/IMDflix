import React from 'react';
import { Spinner, Flex } from '@chakra-ui/react';

const Loading = () => {
  return (
    <>
      <Flex align={'center'} justify={'center'}>
        <Spinner
          mx={'auto'}
          thickness='4px'
          //speed='0.65s'
          emptyColor='gray.800'
          color='brand.yellow'
          size='lg'
        />
      </Flex>
    </>
  );
};

export default Loading;
