import { formatRelativeDate, longFormatDate } from '../../../../utils'
import * as S from './styles'

export function PostCard() {
  const createdAt = new Date()

  return (
    <S.PostCardWrapper to="/post/1">
      <S.PostCardContainer>
        <S.PostCardHeader>
          <strong>JavaScript data types and data structures</strong>

          <time
            title={longFormatDate(createdAt)}
            dateTime={createdAt.toISOString()}
          >
            {formatRelativeDate(createdAt)}
          </time>
        </S.PostCardHeader>

        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have.
        </p>
      </S.PostCardContainer>
    </S.PostCardWrapper>
  )
}
