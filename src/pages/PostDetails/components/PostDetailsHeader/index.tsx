import {
  FaGithub,
  FaCalendarDay,
  FaComment,
  FaExternalLinkAlt,
  FaChevronLeft,
} from 'react-icons/fa'
import { Link as RouterRouterLink } from 'react-router-dom'
import { useTheme } from 'styled-components'

import { Link } from '../../../../components/Link'
import { formatRelativeDate, longFormatDate } from '../../../../utils'
import * as S from './styles'

interface PostDetailsHeaderProps {
  link: string
  title: string
  username: string
  comments: number
  createdAt: Date
}

export function PostDetailsHeader(props: PostDetailsHeaderProps) {
  const { link, title, username, createdAt, comments } = props

  const { 'gray-400': gray400 } = useTheme()

  return (
    <S.Container>
      <S.Header>
        <RouterRouterLink to="/">
          <Link>
            <FaChevronLeft size={12} />
            Voltar
          </Link>
        </RouterRouterLink>

        <Link href={link} target="_blank" rel="noopener noreferrer">
          Ver no github
          <FaExternalLinkAlt size={12} />
        </Link>
      </S.Header>

      <h1>{title}</h1>

      <S.Footer>
        <div>
          <FaGithub size={16} color={gray400} />
          <span>{username}</span>
        </div>

        <div>
          <FaCalendarDay size={16} color={gray400} />

          <time
            title={longFormatDate(createdAt)}
            dateTime={createdAt.toISOString()}
          >
            {formatRelativeDate(createdAt)}
          </time>
        </div>

        <div>
          <FaComment size={16} color={gray400} />
          <span>{comments} comentários</span>
        </div>
      </S.Footer>
    </S.Container>
  )
}
