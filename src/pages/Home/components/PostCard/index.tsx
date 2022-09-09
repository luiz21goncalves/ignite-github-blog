import * as S from './styles'

export function PostCard() {
  return (
    <S.PostCardContainer>
      <S.PostCardHeader>
        <strong>JavaScript data types and data structures</strong>

        <time>Há 1 dia</time>
      </S.PostCardHeader>

      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have.
      </p>
    </S.PostCardContainer>
  )
}
