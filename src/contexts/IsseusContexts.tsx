import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { getAllIssues, Issues } from '../services/api/get-all-issues'

interface IssuesContextProviderProps {
  children: ReactNode
}

interface IsseusContextData {
  issues: Issues[]
}

const IssuesContext = createContext({} as IsseusContextData)

export function IssuesContextProvider(props: IssuesContextProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])

  useEffect(() => {
    getAllIssues().then(setIssues)
  }, [])

  return (
    <IssuesContext.Provider value={{ issues }}>
      {props.children}
    </IssuesContext.Provider>
  )
}

export const useIssues = () => useContext(IssuesContext)
