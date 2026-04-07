import VideoThumbnail from '@/components/video-thumbnail'
import { thumbnailMockData } from '@/mock/thumbnail-mock'
import { Grid, GridItem } from '@chakra-ui/react'

const MainPage = () => {
  return (
    <>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(3, 1fr)',
        }}
      >
        {thumbnailMockData.map((data, idx) => {
          return (
            <GridItem key={`thumbnail-${data.title}`}>
              <VideoThumbnail {...data} lazyLoading={idx > 6 ? true : false} fetchpriority={idx < 3 ? true : false} />
            </GridItem>
          )
        })}
      </Grid>
    </>
  )
}
export default MainPage
