import { api } from '.'

export interface User {
  name: string
  company?: string
  bio: string
  followers: number
  html_url: string
  avatar_url: string
}

const USER_NAME = 'luiz21goncalves'

export async function getUser() {
  const { data } = await api.get<User>(`/users/${USER_NAME}`)

  return data
}
