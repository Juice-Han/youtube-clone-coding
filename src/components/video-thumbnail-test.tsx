import type { ThumbnailMockDataType } from '@/mock/thumbnail-mock'
import { AspectRatio, Box, HStack, Image, Text, VStack } from '@chakra-ui/react'

const VideoThumbnailTest = ({
  title,
  channelName,
  hits,
  uploadedDate,
  thumbnail,
  profileImage,
  lazyLoading = false,
  fetchpriority = false,
}: ThumbnailMockDataType & { lazyLoading?: boolean; fetchpriority?: boolean }) => {
  return (
    <Box className='group' w={'full'} h={'full'} p={3} _hover={{ cursor: 'pointer' }}>
      <Box pos={'relative'}>
        <Box
          pos={'absolute'}
          left={0}
          top={0}
          zIndex={3}
          w={'full'}
          h={'full'}
          bg={'gray.700'}
          opacity={0}
          _groupHover={{
            w: 'calc(100% + 12px)',
            h: 'calc(100% + 12px)',
            left: '-6px',
            top: '-6px',
            opacity: 1,
          }}
          borderRadius={20}
          transition={'all'}
          transitionDuration={'0.3s'}
        />
        <Box pos={'relative'} zIndex={5}>
          <VStack w={'full'} justify={'start'}>
            <AspectRatio w={'full'} ratio={16 / 9}>
              <Image
                src={thumbnail}
                borderRadius={20}
                alt={`${title} 썸네일 사진`}
                objectFit={'cover'}
                draggable={false}
                loading={lazyLoading ? 'lazy' : 'eager'}
                fetchPriority={fetchpriority ? 'high' : 'auto'}
              />
            </AspectRatio>
            <HStack w={'full'} align={'start'}>
              <Image
                src={profileImage}
                alt={`${channelName} 프로필 이미지`}
                boxSize={'40px'}
                flexShrink={0}
                borderRadius={'full'}
                fit={'cover'}
                mt={'3px'}
                loading={lazyLoading ? 'lazy' : 'eager'}
                fetchPriority={fetchpriority ? 'high' : 'auto'}
              />
              <VStack flex={1} align={'start'} gap={0} minW={0}>
                {/* 영상 제목 */}
                <Text w={'full'} fontWeight={'bold'}>
                  {title}
                </Text>
                {/* 부가 정보 (작성자, 조회수, 업로드 시간) */}
                <Text
                  w={'full'}
                  color={{ base: 'gray.500', _dark: 'gray.300' }}
                  fontSize={'sm'}
                  whiteSpace={'nowrap'}
                  overflow={'hidden'}
                  textOverflow={'ellipsis'}
                >
                  {channelName} {`  ‣ ${hits}`} &nbsp;&nbsp; {uploadedDate}
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}
export default VideoThumbnailTest
