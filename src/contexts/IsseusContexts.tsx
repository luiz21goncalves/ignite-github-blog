import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { getAllIssues, Issue } from '../services/api/get-all-issues'

interface IssuesContextProviderProps {
  children: ReactNode
}

interface IsseusContextData {
  issues: Issue[]
  findIssueByNumber: (data: number) => Issue | undefined
}

const IssuesContext = createContext({} as IsseusContextData)

export function IssuesContextProvider(props: IssuesContextProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    getAllIssues().then(setIssues)
  }, [])

  const findIssueByNumber = useCallback(
    (number: number) => {
      return issues.find((issue) => issue.number === number)
    },
    [issues],
  )

  return (
    <IssuesContext.Provider value={{ issues, findIssueByNumber }}>
      {props.children}
    </IssuesContext.Provider>
  )
}

export const useIssues = () => useContext(IssuesContext)
