import { useSearchParams } from 'react-router'

const SearchPage = () => {
  const [searchParams] = useSearchParams()
  return <div>{searchParams.get('q')}</div>
}
export default SearchPage
