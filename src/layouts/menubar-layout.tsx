import { Box, Flex, Icon, IconButton, Text } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { SiYoutubeshorts } from 'react-icons/si'
import { BsCollectionPlay } from 'react-icons/bs'
import { Outlet } from 'react-router'
import { CgProfile } from 'react-icons/cg'
import { IoHome } from 'react-icons/io5'
import Header from '@/components/header'

const MenubarLayout = () => {
  const menuButtonList = [
    { icon: <IoHome />, name: '홈' },
    { icon: <SiYoutubeshorts />, name: 'shorts' },
    { icon: <BsCollectionPlay />, name: '구독' },
    { icon: <CgProfile />, name: '내 페이지' },
  ]
  return (
    <Flex direction={'column'} pt={68}>
      <Header />
      <Flex direction={'row'} p={1}>
        {/* 메뉴바 */}
        <Box w={'64px'} h={'full'} display={{ base: 'none', md: 'block' }}>
          <Box position={'fixed'} left={0} top={'68px'} w={'inherit'} p={1}>
            <Flex direction={'column'} w={'full'} h={'full'} gap={0} flexShrink={0}>
              {menuButtonList.map((menuButton) => {
                return (
                  <MenuButton key={`${menuButton.name} 메뉴`} name={menuButton.name}>
                    {menuButton.icon}
                  </MenuButton>
                )
              })}
            </Flex>
          </Box>
        </Box>

        {/* outlet */}
        <Box flex={1} minW={0}>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  )
}

const MenuButton = ({ children, name }: { children: ReactNode; name: string }) => {
  return (
    <IconButton
      borderRadius={10}
      variant={'ghost'}
      flexDirection={'column'}
      h={'auto'}
      py={3}
      gap={1}
      _hover={{ bg: 'gray.200' }}
      _dark={{ _hover: { bg: 'gray.800' } }}
    >
      <Icon w={6} h={6}>
        {children}
      </Icon>
      <Text fontSize={10}>{name}</Text>
    </IconButton>
  )
}

export default MenubarLayout
