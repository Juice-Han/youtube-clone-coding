import type { ThumbnailMockDataType } from '@/mock/thumbnail-mock'
import { AspectRatio, Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'

const VideoThumbnail = ({ title, channelName, hits, uploadedDate, thumbnail, profileImage }: ThumbnailMockDataType) => {
  return (
    <Flex
      className='group'
      w={'full'}
      justify={'center'}
      align={'center'}
      pos={'relative'}
      _hover={{ cursor: 'pointer' }}
    >
      <Box
        zIndex={5}
        w={'full'}
        h={'full'}
        p={4}
        _groupHover={{ p: 0 }}
        pos={'absolute'}
        transition={'padding 0.3s ease'}
      >
        <Box
          w={'full'}
          h={'full'}
          bg={'transparent'}
          _groupHover={{ bg: 'gray.700' }}
          borderRadius={30}
          transition={'background 0.3s ease'}
        />
      </Box>
      <VStack w={'full'} p={4} zIndex={10}>
        <AspectRatio w={'full'} ratio={16 / 9}>
          <Image src={thumbnail} borderRadius={20} alt='강아지 사진' objectFit={'cover'} draggable={false} />
        </AspectRatio>
        <HStack w={'full'} justify={'start'} align={'start'} gap={4}>
          <Image
            src={profileImage}
            alt='프로필 이미지'
            boxSize={'40px'}
            flexShrink={0}
            borderRadius={'full'}
            fit={'cover'}
            mt={'3px'}
          />
          <VStack align={'start'} gap={0}>
            {/* 영상 제목 */}
            <Text fontWeight={'bold'} wordBreak={'keep-all'}>
              {title}
            </Text>
            {/* 부가 정보 (작성자, 조회수, 업로드 시간) */}
            <HStack gap={2}>
              <Text color={{ base: 'gray.500', _dark: 'gray.300' }} fontSize={'sm'}>
                {channelName}
              </Text>
              <Text color={{ base: 'gray.500', _dark: 'gray.300' }} fontSize={'sm'}>
                {'‣ '} {hits}
              </Text>
              <Text color={{ base: 'gray.500', _dark: 'gray.300' }} fontSize={'sm'}>
                {uploadedDate}
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  )
}
export default VideoThumbnail
