import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {Link} from 'react-router-dom';
import { useWeb3Context } from "../contexts/Web3Context";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { connectWeb3, account, disconnectWeb3 } = useWeb3Context();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Figuritas</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Link to='/explore'>
                Explore
              </Link>
              <Link to='/create'>
                Create
              </Link>
              <Link to='/trade'>
                TradeCourt
              </Link>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                {!account?
                  <Button onClick={()=>connectWeb3()}>Connect wallet</Button>
                  :
                  <>
                    <MenuButton
                      as={Button}
                      rounded={'full'}
                      variant={'link'}
                      cursor={'pointer'}
                      minW={0}>
                      {account}
                    </MenuButton>
                    <MenuList alignItems={'center'}>
                      <br />
                      <Center>
                        Your account manager
                      </Center>
                      <br />
                      <MenuDivider />
                      <MenuItem>
                        <Link to='/myAlbums'>
                          My albums
                        </Link>
                      </MenuItem>
                      <Button onClick={()=>disconnectWeb3()}>Disconnect</Button>
                    </MenuList>
                  </>
                }

              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
