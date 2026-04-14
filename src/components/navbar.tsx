import {
  Button,
  Group,
  HStack,
  IconButton,
  Input,
  Link as ChakraLink,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import throttle from 'lodash.throttle'
import React, { useEffect, useRef, useState, type ChangeEvent } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaPlus } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GoBell } from 'react-icons/go'
import { IoLogoYoutube, IoMdArrowBack } from 'react-icons/io'
import { LuSearch } from 'react-icons/lu'
import { TiMicrophoneOutline } from 'react-icons/ti'
import { Link, useNavigate } from 'react-router'

const SEARCH_BAR_OPEN_WIDTH = 657

const Navbar = () => {
  const navigate = useNavigate()

  const stackRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [search, setSearch] = useState('')
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
  const [isLargeWindow, setIsLargeWindow] = useState(window.innerWidth >= SEARCH_BAR_OPEN_WIDTH)

  const isAttached = useBreakpointValue({ base: isSearchBarOpen ? true : false, searchBarOpen: true })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      navigate(`/search?q=${encodeURIComponent(search)}`)
      inputRef.current?.blur()
    }
  }

  const handleInputBackButtonClick = () => {
    setIsSearchBarOpen(false)
  }

  const handleSearchButtonClick = () => {
    if (isSearchBarOpen) {
      navigate(`/search?q=${encodeURIComponent(search)}`)
      inputRef.current?.blur()
    } else {
      if (window.innerWidth < SEARCH_BAR_OPEN_WIDTH) {
        setIsSearchBarOpen(true)
      } else {
        navigate(`/search?q=${encodeURIComponent(search)}`)
        inputRef.current?.blur()
      }
    }
  }

  const handleSearchBarFocus = () => {
    setIsSearchBarOpen(true)
  }

  useEffect(() => {
    const resizeHandler = throttle(() => {
      if (window.innerWidth >= SEARCH_BAR_OPEN_WIDTH && !isLargeWindow) {
        setIsLargeWindow(true)
      } else if (window.innerWidth < SEARCH_BAR_OPEN_WIDTH && isLargeWindow) {
        setIsLargeWindow(false)
      }
    })

    const currentInput = inputRef.current
    window.addEventListener('resize', resizeHandler)

    return () => {
      const isFocus = document.activeElement === currentInput
      if (isLargeWindow && !isFocus) {
        setIsSearchBarOpen(false)
      }
      window.removeEventListener('resize', resizeHandler)
    }
  }, [isLargeWindow])

  return (
    <>
      <HStack w={'full'} p={2} justify={{ base: 'start', searchBarOpen: 'space-between' }} ref={stackRef}>
        {/* 메뉴 및 유튜브 아이콘 */}
        <HStack
          align={'center'}
          display={{ base: isSearchBarOpen ? 'none' : 'inline-flex', searchBarOpen: 'inline-flex' }}
        >
          <IconButton borderRadius={30} variant={'ghost'}>
            <GiHamburgerMenu />
          </IconButton>
          <ChakraLink outline={'none'} textDecoration={'none'} asChild>
            <Link to={'/'}>
              <IoLogoYoutube size={25} color={'red'} />
              <Text fontWeight={'bold'}>Youtube</Text>
            </Link>
          </ChakraLink>
        </HStack>

        <IconButton
          variant={'ghost'}
          borderRadius={30}
          display={{ base: isSearchBarOpen ? 'inline-flex' : 'none', searchBarOpen: 'none' }}
          onClick={handleInputBackButtonClick}
        >
          <IoMdArrowBack />
        </IconButton>

        {/* 검색창 */}
        <HStack
          gap={{ base: 0, searchBarOpen: 5 }}
          flex={1}
          maxW={{ base: 'none', searchBarOpen: 600 }}
          justify={'flex-end'}
          mx={{ base: isSearchBarOpen ? 'auto' : 'none', searchBarOpen: 'none' }}
        >
          <Group attached={isAttached} w={{ base: isSearchBarOpen ? 'full' : 'auto', searchBarOpen: 'full' }}>
            <Input
              ref={inputRef}
              name='search'
              display={{ base: isSearchBarOpen ? 'block' : 'none', searchBarOpen: 'block' }}
              borderRadius={30}
              placeholder='검색'
              _placeholder={{ color: 'gray' }}
              value={search}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={handleSearchBarFocus}
            />
            <IconButton
              w={50}
              variant={{ base: isSearchBarOpen ? 'surface' : 'ghost', searchBarOpen: 'surface' }}
              borderRadius={30}
              onClick={handleSearchButtonClick}
            >
              <LuSearch />
            </IconButton>
          </Group>

          <IconButton borderRadius={30} variant={{ base: 'ghost', searchBarOpen: 'surface' }}>
            <TiMicrophoneOutline />
          </IconButton>
        </HStack>

        {/* 음성, 만들기, 프로필 아이콘 */}
        <HStack display={{ base: isSearchBarOpen ? 'none' : 'inline-flex', searchBarOpen: 'inline-flex' }}>
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
