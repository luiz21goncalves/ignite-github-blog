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
import * as S from './styles'

export function PostDetailsHeader() {
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

        <Link
          href="http://github.com/luiz21goncalves"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver no github
          <FaExternalLinkAlt size={12} />
        </Link>
      </S.Header>

      <h1>JavaScript data types and data structures</h1>

      <S.Footer>
        <div>
          <FaGithub size={16} color={gray400} />
          <span>luiz21goncalves</span>
        </div>

        <div>
          <FaCalendarDay size={16} color={gray400} />
          <span>Há 1 dia</span>
        </div>

        <div>
          <FaComment size={16} color={gray400} />
          <span>5 comentários</span>
        </div>
      </S.Footer>
    </S.Container>
  )
}
