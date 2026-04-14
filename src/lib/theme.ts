import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    breakpoints: {
      mobileMax: '571px',
      searchBarOpen: '657px',
      tabletMid: '961px',
      desktopMax: '1824px',
    },
  },
})

export const system = createSystem(defaultConfig, config)
