import { system } from '@/lib/theme'

type SystemConfig = typeof system

declare module '@chakra-ui/react' {
  interface SystemContext extends SystemConfig {}
}
