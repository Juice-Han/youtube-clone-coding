import { VStack } from '@chakra-ui/react'
import FilterButtonList from './filter-button-list'
import Navbar from './navbar'

const Header = () => {
  return (
    <VStack position='fixed' top={0} w={'full'} zIndex={100} bg='bg' pb={3}>
      <Navbar />
      <FilterButtonList />
    </VStack>
  )
}
export default Header
