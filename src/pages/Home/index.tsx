import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import * as S from './styles'

export function Home() {
  return (
    <>
      <Profile />

      <SearchForm />

      <S.HomeContent>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </S.HomeContent>
    </>
  )
}
