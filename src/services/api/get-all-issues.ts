import { api } from '.'

const OWNER = 'luiz21goncalves'
const REPO = 'ignite-github-blog'

export interface Issue {
  id: number
  html_url: string
  number: number
  title: string
  created_at: string
  body: string
  user: {
    login: string
  }
  comments: number
}

export async function getAllIssues() {
  const { data } = await api.get(`/repos/${OWNER}/${REPO}/issues`)

  return data
}
