import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { getAllIssues, Issue } from '../services/api/get-all-issues'
import { searchIssue } from '../services/api/search-issue'

interface IssuesContextProviderProps {
  children: ReactNode
}

interface IsseusContextData {
  issues: Issue[]
  findIssueByNumber: (data: number) => Issue | undefined
  findIssueByText: (data: string) => Promise<void>
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

  const findIssueByText = useCallback(async (query: string) => {
    searchIssue(query).then(setIssues)
  }, [])

  return (
    <IssuesContext.Provider
      value={{ issues, findIssueByNumber, findIssueByText }}
    >
      {props.children}
    </IssuesContext.Provider>
  )
}

export const useIssues = () => useContext(IssuesContext)
