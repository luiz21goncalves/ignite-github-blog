import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { FONT_SIZES } from '../../../../constants'

export const PostCardWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const PostCardContainer = styled.article`
  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 10px;
  padding: 2rem;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 4;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`

export const PostCardHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 20%;
  gap: 1rem;
  margin-bottom: 1.25rem;

  strong {
    color: ${({ theme }) => theme['gray-50']};
    font-size: ${FONT_SIZES[20]};
    font-weight: 700;
  }

  time {
    font-size: ${FONT_SIZES[14]};
  }
`
