import { useParams } from 'react-router-dom'

export function PostDetails() {
  const { postId } = useParams()

  return (
    <main>
      <h1>{postId}</h1>
    </main>
  )
}
