import { useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { PostDetailsHeader } from './components/PostDetailsHeader'
import * as S from './styles'

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| Feature    | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
| GFM        | 100% w/              |


~~~js
let number = 42;

console.log({ number })
~~~
`

export function PostDetails() {
  const { postId } = useParams()

  console.log({ postId })

  return (
    <main>
      <PostDetailsHeader />

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
        {markdown}
      </S.Preview>
    </main>
  )
}
