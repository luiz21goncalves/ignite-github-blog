import { AnchorHTMLAttributes } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

import * as S from './styles'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: string
}

export function Link(props: LinkProps) {
  const { children, ...attrs } = props

  return (
    <S.LinkContainer {...attrs}>
      {children}

      <FaExternalLinkAlt />
    </S.LinkContainer>
  )
}
