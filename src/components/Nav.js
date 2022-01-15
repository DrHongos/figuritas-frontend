import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Image,
  Stack,
  useColorMode,
  Center,
  HStack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {Link} from 'react-router-dom';
import { useWeb3Context } from "../contexts/Web3Context";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { connectWeb3, account, disconnectWeb3 } = useWeb3Context();

  return (
    <>
      <Box style={{"backgroundColor":"#E5E5E5"}} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack>
            <Image src="./assets/LOGO.png" alt="logo" width="30px" />
            <Link to='/'>
              <p style={{
                color: "#3C3838",
                fontFamily: "Rubik",
                fontSize: "18px",
                lineHeight: "21px",
                letterSpacing: "4%",
                fontWeight: 800,
              }}>Figuritas</p>
            </Link>
          </HStack>


          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} alignItems={'center'}>
              <Link to='/explore'>
                <p style={{
                  color: "#3C3838",
                  fontFamily: "Rubik",
                  fontSize: "16px",
                  lineHeight: "19px",
                  letterSpacing: "4%",
                  fontWeight: 700,
                  fontStyle: 'bold',
                }}>Explore</p>
              </Link>
              <Link to='/create'>
                <p style={{
                  color: "#3C3838",
                  fontFamily: "Rubik",
                  fontSize: "16px",
                  lineHeight: "19px",
                  letterSpacing: "4%",
                  fontWeight: 700,
                  fontStyle: 'bold',
                }}>Create</p>
              </Link>
              <Link to='/trade'>
                <p style={{
                  color: "#3C3838",
                  fontFamily: "Rubik",
                  fontSize: "16px",
                  lineHeight: "19px",
                  letterSpacing: "4%",
                  fontWeight: 700,
                  fontStyle: 'bold',
                }}>TradeCourt</p>
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
