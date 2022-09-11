import { api } from '.'

const OWNER = 'luiz21goncalves'
const REPO = 'ignite-github-blog'

export interface Issues {
  id: number
  html_url: string
  number: number
  title: string
  created_at: string
  body: string
  user: {
    login: string
  }
}

export async function getAllIssues() {
  const { data } = await api.get(`/repos/${OWNER}/${REPO}/issues`)

  return data
}
