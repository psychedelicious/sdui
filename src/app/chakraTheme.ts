import { extendTheme } from '@chakra-ui/react';

const activeLabelStyles = {};

export const chakraTheme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
              transform: 'scale(0.85) translateY(-24px)',
            },
          },
        },
      },
    },
  },
});
