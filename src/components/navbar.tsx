import { Button, Group, HStack, IconButton, Input, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import { CgProfile } from 'react-icons/cg'
import { FaPlus } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GoBell } from 'react-icons/go'
import { IoLogoYoutube } from 'react-icons/io'
import { LuSearch } from 'react-icons/lu'
import { TiMicrophoneOutline } from 'react-icons/ti'

const Navbar = () => {
  const isAttached = useBreakpointValue({ base: false, md: true })
  return (
    <>
      <HStack w={'full'} p={2} justify={'space-between'}>
        {/* 메뉴 및 유튜브 아이콘 */}
        <HStack align={'center'}>
          <IconButton borderRadius={30} variant={'ghost'}>
            <GiHamburgerMenu />
          </IconButton>
          <Link textDecoration={'none'}>
            <IoLogoYoutube size={25} color={'red'} />
            <Text fontWeight={'bold'}>Youtube</Text>
          </Link>
        </HStack>

        {/* 검색창 */}
        <HStack gap={{ base: 0, md: 5 }} flex={1} maxW={600} justify={'flex-end'}>
          <Group attached={isAttached} w={{ base: 'auto', md: 'full' }}>
            <Input
              display={{ base: 'none', md: 'block' }}
              borderRadius={30}
              placeholder='검색'
              _placeholder={{ color: 'gray' }}
            />
            <IconButton w={50} variant={{ base: 'ghost', md: 'surface' }} borderRadius={30}>
              <LuSearch />
            </IconButton>
          </Group>

          <IconButton borderRadius={30} variant={{ base: 'ghost', md: 'surface' }}>
            <TiMicrophoneOutline />
          </IconButton>
        </HStack>

        {/* 음성, 만들기, 프로필 아이콘 */}
        <HStack>
          <Button borderRadius={30} variant={'ghost'}>
            <FaPlus /> 만들기
          </Button>

          <IconButton borderRadius={30} variant={'ghost'}>
            <GoBell />
          </IconButton>

          <IconButton borderRadius={30} variant={'ghost'}>
            <CgProfile />
          </IconButton>
        </HStack>
      </HStack>
    </>
  )
}
export default Navbar
