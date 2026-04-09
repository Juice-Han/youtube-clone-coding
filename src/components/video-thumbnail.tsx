import type { ThumbnailMockDataType } from '@/mock/thumbnail-mock'
import { AspectRatio, Box, HStack, Image, Text, VStack } from '@chakra-ui/react'

const VideoThumbnail = ({
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
    <Box className='group' w={'full'} pos={'relative'} _hover={{ cursor: 'pointer' }}>
      {/* 호버 시 배경 그림자 애니메이션 박스 */}
      <Box
        zIndex={5}
        w={'full'}
        h={'full'}
        p={2}
        _groupHover={{ p: 0 }}
        pos={'absolute'}
        transition={'padding 0.3s ease'}
      >
        <Box
          w={'full'}
          h={'full'}
          bg={'gray.300'}
          opacity={0}
          _groupHover={{ opacity: 100 }}
          borderRadius={30}
          transition={'opacity 0.3s ease'}
          _dark={{ bg: 'gray.700' }}
        />
      </Box>

      {/* 메인 컨텐츠 */}
      <Box w={'full'} p={2} zIndex={10} pos={'relative'}>
        {/* 썸네일 사진 */}
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

        {/* 썸네일 외 정보 */}
        <HStack w={'full'} justify={'start'} align={'start'} gap={4} mt={2}>
          {/* 채널 프로필 이미지 */}
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

          {/* 영상 상세 정보 */}
          <VStack flex={1} align={'start'} gap={0} minW={0}>
            {/* 영상 제목 */}
            <Text w={'full'} fontWeight={'bold'}>
              {title}
            </Text>

            {/* 부가 정보 (작성자, 조회수, 업로드 시간) */}
            <Text
              w={'full'}
              color={'gray.800'}
              fontSize={'sm'}
              whiteSpace={'pre'}
              overflow={'hidden'}
              textOverflow={'ellipsis'}
              _dark={{ color: 'gray.300' }}
            >
              {`${channelName}  ‣ ${hits}   ${uploadedDate}`}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Box>
  )
}
export default VideoThumbnail
