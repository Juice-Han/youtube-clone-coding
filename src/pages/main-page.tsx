import VideoThumbnailTest from '@/components/ui/video-thumbnail-test'
import VideoThumbnail from '@/components/video-thumbnail'
import { thumbnailMockData } from '@/mock/thumbnail-mock'
import { Grid, GridItem } from '@chakra-ui/react'

const MainPage = () => {
  return (
    <>
      <Grid
        templateColumns={{
          base: 'repeat(1, minmax(0, 1fr))',
          mobileMax: 'repeat(2, minmax(0, 1fr))',
          tabletMid: 'repeat(3, minmax(0, 1fr))',
        }}
        p={4}
      >
        {thumbnailMockData.map((data, idx) => {
          return (
            <GridItem key={`thumbnail-${data.title}`}>
              <VideoThumbnail {...data} lazyLoading={idx > 6 ? true : false} fetchpriority={idx < 3 ? true : false} />
            </GridItem>
          )
        })}
        {/* <GridItem>
          <VideoThumbnail {...thumbnailMockData[0]} />
          <VideoThumbnailTest {...thumbnailMockData[0]} />
        </GridItem> */}
      </Grid>
    </>
  )
}
export default MainPage
