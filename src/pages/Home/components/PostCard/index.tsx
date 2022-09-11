import { formatRelativeDate, longFormatDate } from '../../../../utils'
import * as S from './styles'

interface PostCardProps {
  number: number
  title: string
  content: string
  createdAt: string
}

export function PostCard(props: PostCardProps) {
  const { number, content, createdAt, title } = props

  const formattedDate = new Date(createdAt)

  return (
    <S.PostCardWrapper to={`/post/${number}`}>
      <S.PostCardContainer>
        <S.PostCardHeader>
          <strong>{title}</strong>

          <time
            title={longFormatDate(formattedDate)}
            dateTime={formattedDate.toISOString()}
          >
            {formatRelativeDate(formattedDate)}
          </time>
        </S.PostCardHeader>

        <p>{content}</p>
      </S.PostCardContainer>
    </S.PostCardWrapper>
  )
}
