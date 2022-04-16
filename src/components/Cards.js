import React, { useEffect, useState, useRef } from 'react';
import { Container, Box, SimpleGrid, Input } from '@chakra-ui/react';

import Card from './Card';
import Loading from './Loading';

const Cards = () => {
  const [allImages, setImages] = useState([]);
  const [expression, setExpression] = useState(['Marvel']);

  const [loading, setLoading] = useState(false);

  const inputTag = useRef();

  useEffect(() => {
    const endpoint = async () => {
      try {
        const apiKey = 'k_x6l6lsfo';
        const url = `https://imdb-api.com/es/API/Search/${apiKey}/${expression}`;
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results);
        setLoading(false);
        setImages(data.results);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };

    endpoint();
  }, [expression]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputTag.current.value;
    setExpression(inputValue);
    inputTag.current.value = '';
  };

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
