import { useQuery } from '@tanstack/react-query'

import { api } from '../../../services/api'
import { User } from '../types'

const USER_NAME = 'luiz21goncalves'

async function getMyUser() {
  const { data } = await api.get<User>(`/users/${USER_NAME}`)

  console.log({ data })

  return data
}

export function useFetchMyUser() {
  return useQuery(['me'], getMyUser)
}
