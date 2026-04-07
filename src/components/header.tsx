import { VStack } from '@chakra-ui/react'
import FilterButtonList from './filter-button-list'
import Navber from './navbar'

const Header = () => {
  return (
    <VStack position='fixed' top={0} w={'full'} zIndex={100} bg='bg'>
      <Navber />
      <FilterButtonList />
    </VStack>
  )
}
export default Header
