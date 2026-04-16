import { Box, Button, Flex, IconButton, ScrollArea } from '@chakra-ui/react'
import throttle from 'lodash.throttle'
import { useEffect, useRef, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const initialFilterList = [
  {
    title: '전체',
    selected: true,
  },
  {
    title: '음악',
    selected: false,
  },
  {
    title: '믹스',
    selected: false,
  },
  {
    title: '게임',
    selected: false,
  },
  {
    title: '라이브',
    selected: false,
  },
  {
    title: '팟캐스트',
    selected: false,
  },
  {
    title: '최근에 업로드된 동영상',
    selected: false,
  },
  {
    title: '감상한 동영상',
    selected: false,
  },
  {
    title: '새로운 맞춤 동영상',
    selected: false,
  },
]

const FilterButtonList = () => {
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const [filterList, setFilterList] = useState(initialFilterList)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const [isScrollAtStart, setIsScrollAtStart] = useState(false)
  const [isScrollAtEnd, setIsScrollAtEnd] = useState(false)

  // 필터 버튼 클릭 이벤트 핸들러
  const handleFilterButtonClick = (title: string) => {
    const copyFilterList = filterList.map((filter) => {
      return filter.title === title ? { ...filter, selected: true } : { ...filter, selected: false }
    })
    setFilterList(copyFilterList)
  }

  // 현재 스크롤 위치를 계산해서 화살표 버튼 표시 유무를 결정하는 함수
  const calculateScrollLocation = () => {
    if (!scrollAreaRef.current) return
    const { scrollLeft, clientWidth, scrollWidth } = scrollAreaRef.current
    setIsScrollAtStart(scrollLeft <= 2)
    setIsScrollAtEnd(scrollLeft + clientWidth >= scrollWidth - 2)
  }

  // 스크롤 이벤트 핸들러
  const onScrollHandler = () => {
    if (!isOverflowing) return
    calculateScrollLocation()
  }

  // 스크롤 이동 함수
  const scrollBy = (amount: number) => {
    scrollAreaRef.current?.scrollBy({ left: amount, behavior: 'smooth' })
  }

  useEffect(() => {
    // 현재 ScrollArea가 스크롤 가능한 상태인지 아닌지 체크하는 함수
    const checkOverflow = () => {
      if (scrollAreaRef.current) {
        const { scrollWidth, clientWidth } = scrollAreaRef.current
        setIsOverflowing(scrollWidth > clientWidth)
      }
    }

    // ScrollArea의 resize 이벤트 감지 핸들러
    const observer = new ResizeObserver(
      throttle(() => {
        checkOverflow()
        calculateScrollLocation()
      }, 200)
    )

    // ScrollArea resize 이벤트 리스너 등록
    if (scrollAreaRef.current) {
      observer.observe(scrollAreaRef.current)
    }

    // 화면 첫 렌더링 시 overflow 확인 및 스크롤 위치 계산
    checkOverflow()
    calculateScrollLocation()

    // 클린업 함수에서 ScrollArea resize 이벤트 리스너 해제
    return () => observer.disconnect()
  }, [])

  return (
    <Box w={'full'} px={4}>
      <Box pos={'relative'} w={'full'}>
        <IconButton
          display={isOverflowing && !isScrollAtStart ? 'inline-flex' : 'none'}
          size={'sm'}
          borderRadius={'3xl'}
          variant={'subtle'}
          pos={'absolute'}
          left={0}
          top={'50%'}
          transform={'translateY(-50%)'}
          zIndex={15}
          bg={{ base: 'white', _dark: 'black' }}
          onClick={() => scrollBy(-150)}
        >
          <FaAngleLeft />
        </IconButton>
        <ScrollArea.Root>
          <ScrollArea.Viewport ref={scrollAreaRef} onScroll={onScrollHandler}>
            <ScrollArea.Content>
              <Flex gap={3} px={2}>
                {filterList.map((filter) => (
                  <Button
                    key={filter.title}
                    variant={filter.selected ? 'solid' : 'subtle'}
                    colorPalette={'gray'}
                    rounded={10}
                    px={3}
                    size={'sm'}
                    onClick={() => handleFilterButtonClick(filter.title)}
                    fontWeight={'bold'}
                  >
                    {filter.title}
                  </Button>
                ))}
              </Flex>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
        </ScrollArea.Root>
        <IconButton
          display={isOverflowing && !isScrollAtEnd ? 'inline-flex' : 'none'}
          size={'sm'}
          borderRadius={'3xl'}
          variant={'subtle'}
          pos={'absolute'}
          right={0}
          top={'50%'}
          transform={'translateY(-50%)'}
          zIndex={15}
          bg={{ base: 'white', _dark: 'black' }}
          onClick={() => scrollBy(150)}
        >
          <FaAngleRight />
        </IconButton>
      </Box>
    </Box>
  )
}
export default FilterButtonList
