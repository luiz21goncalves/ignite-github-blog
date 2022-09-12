import { api } from '.'
import { GITHUB } from '../../constants'
import { Issue } from './get-all-issues'

interface SearchIssueResponse {
  items: Issue[]
}

export async function searchIssue(query: string) {
  const { data } = await api.get<SearchIssueResponse>('/search/issues?', {
    params: { q: `${query} repo:${GITHUB.username}/${GITHUB.repo}` },
  })

  return data.items
}
