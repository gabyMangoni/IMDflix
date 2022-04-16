import React from 'react';
import {
  Box,
  Container,
  Flex,
  Avatar,
  HStack,
  // IconButton,
  Button,
  Menu,
  MenuButton,
  // MenuList,
  // MenuItem,
  // MenuDivider,
} from '@chakra-ui/react';

export default function withAction() {
  return (
    <>
      <Box px={4} minH={'5vh'} bg={'#000000'}>
        <Container maxW='container.lg'>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <HStack spacing={8} alignItems={'center'}>
              <Box
                color={'brand.yellow'}
                fontSize={{ base: 'xl', md: '2xl' }}
                cursor={'pointer'}
              >
                IMDflix
              </Box>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
              ></HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'sm'}
                    src={
                      'https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg'
                    }
                  />
                </MenuButton>
                {/* <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
              </Menu>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box p={1}></Box>
    </>
  );
}
