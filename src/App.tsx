import MenubarLayout from '@/layouts/menubar-layout'
import MainPage from '@/pages/main-page'
import SearchPage from '@/pages/search-page'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MenubarLayout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/search' element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
