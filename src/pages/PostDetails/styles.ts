import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const Preview = styled(ReactMarkdown)`
  padding: 2.5rem 2rem;

  ol,
  li {
    list-style-position: inside;
  }

  a {
    color: ${({ theme }) => theme['blue-500']};

    &:hover {
      text-decoration: underline;
    }
  }
`
