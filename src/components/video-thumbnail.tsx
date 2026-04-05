import { AspectRatio, Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'

const VideoThumbnail = () => {
  return (
    <Flex
      role='group'
      className='group'
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
      <VStack p={4} zIndex={10}>
        <AspectRatio w={'full'} ratio={16 / 9}>
          <Image
            src='https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D'
            borderRadius={20}
            alt='강아지 사진'
            objectFit={'cover'}
          />
        </AspectRatio>
        <HStack w={'full'} justify={'start'} align={'start'} gap={4}>
          <Image
            src='https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D'
            alt='프로필 이미지'
            boxSize={'40px'}
            flexShrink={0}
            borderRadius={'full'}
            fit={'cover'}
            mt={'3px'}
          />
          <VStack align={'start'} gap={0}>
            {/* 영상 제목 */}
            <Text fontWeight={'bold'}>
              강아지가 좋아하는 음악🐶💖강아지 수면 음악 20시간🐶🎵강아지 분리불안 & 스트레스 완화🎵집에 혼자있는
              강아지를 위한 음악🎵외출할때 출근할때 꼭 틀어주세요 by 힐링메이트
            </Text>
            {/* 부가 정보 (작성자, 조회수, 업로드 시간) */}
            <HStack gap={2}>
              <Text color={{ base: 'gray.500', _dark: 'gray.300' }} fontSize={'sm'}>
                시골 강아디
              </Text>
              <Text color={{ base: 'gray.500', _dark: 'gray.300' }} fontSize={'sm'}>
                {'‣'} 2.8만
              </Text>
              <Text color={{ base: 'gray.500', _dark: 'gray.300' }} fontSize={'sm'}>
                3일 전
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  )
}
export default VideoThumbnail
