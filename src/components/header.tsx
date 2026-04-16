import { VStack } from '@chakra-ui/react'
// import FilterButtonList from './filter-button-list'
import Navbar from './navbar'

const Header = () => {
  return (
    <VStack position='fixed' top={0} w={'full'} bg={'bg'} zIndex={100} pb={3}>
      <Navbar />
    </VStack>
  )
}
export default Header
