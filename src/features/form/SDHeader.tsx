import {
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';

import { FaSun, FaMoon, FaGithub } from 'react-icons/fa';

const SDHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex minWidth='max-content' alignItems='center' gap='1'>
      <Heading size={'md'}>Stable Diffusion Dream Server</Heading>

      <Spacer />

      <IconButton
        aria-label='Link to Github'
        variant='link'
        fontSize={20}
        size={'sm'}
        icon={
          <Link isExternal href='http://github.com/lstein/stable-diffusion'>
            <FaGithub />
          </Link>
        }
      />

      <IconButton
        aria-label='Toggle Dark Mode'
        onClick={toggleColorMode}
        variant='link'
        size={'sm'}
        fontSize={18}
        icon={colorMode == 'light' ? <FaSun /> : <FaMoon />}
      />
    </Flex>
  );
};

export default SDHeader;