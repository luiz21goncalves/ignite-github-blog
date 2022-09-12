import { api } from '.'
import { GITHUB } from '../../constants'

export interface User {
  name: string
  company?: string
  bio: string
  followers: number
  html_url: string
  avatar_url: string
}

export async function getUser() {
  const { data } = await api.get<User>(`/users/${GITHUB.username}`)

  return data
}
