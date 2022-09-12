import { api } from '.'
import { GITHUB } from '../../constants'

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
  const { data } = await api.get(
    `/repos/${GITHUB.username}/${GITHUB.repo}/issues`,
  )

  return data
}
