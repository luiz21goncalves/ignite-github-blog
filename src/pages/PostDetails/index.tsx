import { useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { useIssues } from '../../contexts/IsseusContexts'
import { PostDetailsHeader } from './components/PostDetailsHeader'
import * as S from './styles'

export function PostDetails() {
  const { postId } = useParams()
  const { findIssueByNumber } = useIssues()

  if (!postId) {
    return null
  }

  const issue = findIssueByNumber(Number(postId))

  if (!issue) {
    return null
  }

  return (
    <main>
      <PostDetailsHeader
        comments={issue.comments}
        link={issue.html_url}
        title={issue.title}
        createdAt={new Date(issue.created_at)}
        username={issue.user.login}
      />

      <S.Preview
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...attrs }) {
            const match = /language-(\w+)/.exec(className || '')

            if (!inline && match) {
              return (
                <SyntaxHighlighter
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...attrs}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              )
            }

            return <code className={className}>{children}</code>
          },
        }}
      >
        {issue.body}
      </S.Preview>
    </main>
  )
}
