import FilterButtonList from '@/components/filter-button-list'
import VideoThumbnail from '@/components/video-thumbnail'
import { thumbnailMockData } from '@/mock/thumbnail-mock'
import { Box, Grid, GridItem } from '@chakra-ui/react'

const MainPage = () => {
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
      <Grid
        templateColumns={{
          base: 'repeat(1, minmax(0, 1fr))',
          mobileMax: 'repeat(2, minmax(0, 1fr))',
          tabletMid: 'repeat(3, minmax(0, 1fr))',
          desktopMax: 'repeat(4, minmax(0, 1fr))',
        }}
        pt={'50px'}
        px={4}
        pb={4}
      >
        {thumbnailMockData.map((data, idx) => {
          return (
            <GridItem key={`thumbnail-${data.title}`}>
              <VideoThumbnail {...data} lazyLoading={idx > 6 ? true : false} fetchPriority={idx < 3 ? true : false} />
            </GridItem>
          )
        })}
      </Grid>
    </>
  )
}
export default MainPage
