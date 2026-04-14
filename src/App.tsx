import Header from '@/components/header'
import { ColorModeButton } from '@/components/ui/color-mode'
import MainPage from '@/pages/main-page'
import SearchPage from '@/pages/search-page'
import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <Box mt={112}>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
      <ColorModeButton />
    </Box>
  )
}
export default App
