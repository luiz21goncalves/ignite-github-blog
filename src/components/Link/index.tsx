import { AnchorHTMLAttributes, ReactNode } from 'react'

import * as S from './styles'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}

export function Link(props: LinkProps) {
  const { children, ...attrs } = props

  return <S.LinkContainer {...attrs}>{children}</S.LinkContainer>
}
