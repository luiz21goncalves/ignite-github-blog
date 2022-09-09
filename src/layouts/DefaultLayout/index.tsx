import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import * as S from './styles'

export function DefaultLaytout() {
  return (
    <>
      <Header />
      <S.DefaultLayoutContainer>
        <Outlet />
      </S.DefaultLayoutContainer>
    </>
  )
}
