import styled from 'styled-components'

import { FONT_SIZES } from '../../constants'

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: ${FONT_SIZES[12]};
  color: ${({ theme }) => theme['blue-500']};
  text-decoration: none;
  position: relative;
  cursor: pointer;

  &::after {
    transition: opacity 300ms ease-in-out;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    content: '';
    border-bottom: 1px solid ${({ theme }) => theme['blue-500']};
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
`
