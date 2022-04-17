import { useFetch } from '../hook/useFetch';
import { Container, Box, SimpleGrid, Input } from '@chakra-ui/react';

import Card from './Card';
import Loading from './Loading';

const Cards = () => {
  const [allImages, loading, expression, inputTag, handleSubmit] = useFetch();

  return (
    <>
      <Box minH={'85vh'} w={'full'}>
        <Container maxW='container.lg' mt='5'>
          <form onSubmit={handleSubmit}>
            <label>
              <Input
                type='text'
                ref={inputTag}
                placeholder='Search en IMDflix'
                bg={'#ffffff'}
                border={0}
                color={'gray.900'}
                w={'full'}
                m={1}
                h={'30'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
            </label>
          </form>

          <Box fontSize={{ base: 'xl', md: '2xl' }} mt={'7'}>
            Películas {'&'} Series {'>'} {expression}
          </Box>
          <Box p={0}>
            {loading && <Loading />}

            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 4, lg: 5 }}
              spacing={4}
              alignItems='flex-start'
            >
              {allImages.map((img) => {
                return <Card {...img} key={img.id} />;
              })}
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Cards;
