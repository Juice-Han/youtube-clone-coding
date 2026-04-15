import VideoSearchResult from '@/components/video-search-result'
import { thumbnailMockData } from '@/mock/thumbnail-mock'
import { Flex } from '@chakra-ui/react'
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
      <Flex direction={'column'} p={4} maxW={'1250px'} mx={'auto'}>
        {filteredVideoData.map((data, idx) => {
          return (
            <VideoSearchResult
              key={`${data.title} 영상`}
              lazyLoading={idx > 6 ? true : false}
              fetchPriority={idx < 3 ? true : false}
              {...data}
            />
          )
        })}
      </Flex>
    </>
  )
}
export default SearchPage
