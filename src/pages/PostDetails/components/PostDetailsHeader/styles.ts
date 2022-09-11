import styled from 'styled-components'

import { FONT_SIZES } from '../../../../constants'

export const Container = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme['gray-700']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  h1 {
    font-size: ${FONT_SIZES[24]};
    color: ${({ theme }) => theme['gray-50']};
  }
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  gap: 24px;
  margin-top: 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span,
    time {
      color: ${({ theme }) => theme['gray-100']};
    }
  }
`
