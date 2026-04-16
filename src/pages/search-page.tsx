import FilterButtonList from '@/components/filter-button-list'
import VideoSearchResult from '@/components/video-search-result'
import VideoThumbnail from '@/components/video-thumbnail'
import { thumbnailMockData } from '@/mock/thumbnail-mock'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { useNavigate, useSearchParams } from 'react-router'

const SearchPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q')

  if (q === null || q.trim() === '') {
    navigate('/')
  }

  const filteredVideoData = thumbnailMockData.filter((v) => v.title.includes(q!))

  return (
    <>
      <Box
        position={'fixed'}
        w={{ base: '100%', md: 'calc(100% - 80px)' }}
        left={{ base: 0, md: '64px' }}
        top={'68px'}
        zIndex={15}
        bg={'bg'}
        pb={3}
      >
        <FilterButtonList />
      </Box>
      <Box pt={50}>
        {filteredVideoData.length === 0 ? (
          <Center pt={3}>
            <Text>검색 결과가 존재하지 않습니다.</Text>
          </Center>
        ) : (
          <Flex direction={'column'} p={4} maxW={'1250px'} mx={'auto'}>
            {filteredVideoData.map((data, idx) => (
              <Box key={`${data.title} 영상`}>
                <Box display={{ base: 'block', sm: 'none' }}>
                  <VideoThumbnail
                    lazyLoading={idx > 6 ? true : false}
                    fetchPriority={idx < 3 ? true : false}
                    {...data}
                  />
                </Box>
                <Box display={{ base: 'none', sm: 'block' }}>
                  <VideoSearchResult
                    lazyLoading={idx > 6 ? true : false}
                    fetchPriority={idx < 3 ? true : false}
                    {...data}
                  />
                </Box>
              </Box>
            ))}
          </Flex>
        )}
      </Box>
    </>
  )
}
export default SearchPage
