import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      rouge: '#EC4C4C',
      yellow: '#edbf17',
      cyan: '#8DCAFF',
      gray1: '#D8D8D8',
      blue: '#3B82BF',
      footer: '#edbf17',
    },
  },
  a: {
    color: 'teal.500',
    _hover: {
      textDecoration: 'underline',
    },
  },
  textStyles: {
    title: {
      // you can also use responsive styles
      fontSize: ['xl', '2xl'],
      textAlign: 'left',
      fontWeight: '600',
      maxW: '3xl',
    },
    subtitle: {
      // you can also use responsive styles
      fontSize: 'lg',
      textAlign: 'left',
      fontWeight: '600',
    },
    text: {
      // you can also use responsive styles
      fontSize: 'xs',
      color: 'gray.500',
    },
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
        color: 'black',
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        md: {
          h: '30px',
          fontSize: 'sm',
          px: '25px',
        },
      },
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#222222',
        color: '#ffffff',
      },
    },
  },
});

export default theme;
