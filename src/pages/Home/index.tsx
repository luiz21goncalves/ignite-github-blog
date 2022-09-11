import { useIssues } from '../../contexts/IsseusContexts'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import * as S from './styles'

export function Home() {
  const { issues } = useIssues()

  return (
    <>
      <Profile />

      <SearchForm />

      <S.HomeContent>
        {issues.map((issue) => (
          <PostCard
            key={issue.id}
            content={issue.body}
            title={issue.title}
            number={issue.number}
            createdAt={issue.created_at}
          />
        ))}
      </S.HomeContent>
    </>
  )
}
