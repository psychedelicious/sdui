import {
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';

import { FaSun, FaMoon, FaGithub } from 'react-icons/fa';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' pt={5}>
      <Heading size='md'>Stable Diffusion Dream Server</Heading>

      <Spacer />

      <IconButton
        aria-label='Link to Github'
        variant='link'
        fontSize={24}
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
        fontSize={24}
        icon={colorMode == 'light' ? <FaSun /> : <FaMoon />}
      />
    </Flex>
  );
};

export default Header;
