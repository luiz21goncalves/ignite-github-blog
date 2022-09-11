import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

api.defaults.headers.common.Authorization = import.meta.env.VITE_API_TOKEN
