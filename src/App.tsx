import Header from '@/components/header'
import { ColorModeButton } from '@/components/ui/color-mode'
import MainPage from '@/pages/main-page'
import { Box } from '@chakra-ui/react'

const App = () => {
  return (
    <Box mt={104}>
      <Header />
      <MainPage />
      <ColorModeButton />
    </Box>
  )
}
export default App
