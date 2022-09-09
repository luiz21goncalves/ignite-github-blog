import styled from 'styled-components'

import { FONT_SIZES } from '../../../../constants'

export const SearchFormContainer = styled.form`
  margin-top: 4.5rem;
  margin-bottom: 3rem;
`

export const SearchFormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  p {
    font-size: ${FONT_SIZES[18]};
    font-weight: 700;
    color: ${({ theme }) => theme['gray-100']};
  }

  span {
    font-size: ${FONT_SIZES[14]};
    color: ${({ theme }) => theme['gray-300']};
  }
`

export const SearchFormInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme['gray-500']};
  padding: 0.75rem 1rem;
  border-radius: 6px;
  outline: none;
  transition: border-color 300ms;

  &::placeholder {
    color: ${({ theme }) => theme['gray-400']};
  }

  &:focus {
    border-color: ${({ theme }) => theme['blue-500']};
  }
`
