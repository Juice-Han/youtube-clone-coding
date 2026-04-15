import type { ThumbnailMockDataType } from '@/mock/thumbnail-mock'
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'

const VideoSearchResult = ({
  title,
  channelName,
  hits,
  uploadedDate,
  thumbnail,
  profileImage,
  description,
  lazyLoading,
  fetchPriority,
}: ThumbnailMockDataType & { lazyLoading: boolean; fetchPriority: boolean }) => {
  return (
    <Flex direction='row' p={2} gap={4} align={'start'} maxH={'300px'}>
      <Box
        h={'full'}
        maxH={'284px'}
        minW={'250px'}
        maxW={'1/2'}
        aspectRatio={16 / 9}
        flexShrink={0}
        overflow={'hidden'}
        borderRadius={20}
      >
        <Image
          src={thumbnail}
          w={'full'}
          h={'full'}
          alt={`${title} 썸네일 사진`}
          objectFit={'cover'}
          draggable={false}
          loading={lazyLoading ? 'lazy' : 'eager'}
          fetchPriority={fetchPriority ? 'high' : 'auto'}
        />
      </Box>
      <Flex direction={'column'} align={'start'} gap={0} cursor={'pointer'} flex={1}>
        <Flex direction={'row'} w={'full'} justify={'space-between'}>
          <Text fontSize={'lg'} fontWeight={'semibold'}>
            {title}
          </Text>
          <IconButton variant={'ghost'} borderRadius={30}>
            <BsThreeDots />
          </IconButton>
        </Flex>

        <Text fontSize={'xs'} color={'gray.600'} fontWeight={'semibold'} _dark={{ color: 'gray.300' }}>
          {hits} · {uploadedDate}
        </Text>
        <Flex direction={'row'} gap={2} my={2} align={'center'}>
          <Image
            src={profileImage}
            alt={`${channelName} 프로필 이미지`}
            boxSize={'25px'}
            flexShrink={0}
            borderRadius={'full'}
            fit={'cover'}
            mt={'3px'}
            loading={lazyLoading ? 'lazy' : 'eager'}
            fetchPriority={fetchPriority ? 'high' : 'auto'}
          />
          <Text
            color={{ base: 'gray.600', _hover: 'gray.900' }}
            fontSize={'xs'}
            _dark={{ color: 'gray.400', _hover: { color: 'gray.300' } }}
          >
            {channelName}
          </Text>
        </Flex>

        <Text lineClamp={2} color={'gray.600'} fontSize={'xs'} _dark={{ color: 'gray.400' }}>
          {description}
        </Text>
      </Flex>
    </Flex>
  )
}
export default VideoSearchResult
