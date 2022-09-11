import styled from 'styled-components'

import { FONT_SIZES } from '../../../../constants'

export const ProfileContainer = styled.section`
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
  background-color: ${({ theme }) => theme['gray-700']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
`

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h1 {
    font-weight: 700;
    font-size: ${FONT_SIZES[24]};
    color: ${({ theme }) => theme['gray-50']};
  }
`

export const ProfileFooter = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  gap: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      color: ${({ theme }) => theme['gray-100']};
    }
  }
`
