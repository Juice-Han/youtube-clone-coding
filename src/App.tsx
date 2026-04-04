import Header from '@/components/header'
import { ColorModeButton } from '@/components/ui/color-mode'
import { Box, Separator } from '@chakra-ui/react'

const App = () => {
  return (
    <Box mt={104}>
      <Header />
      <Separator />
      <ColorModeButton />
    </Box>
  )
}
export default App
