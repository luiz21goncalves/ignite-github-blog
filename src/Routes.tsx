import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { IssuesContextProvider } from './contexts/IsseusContexts'
import { DefaultLaytout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { PostDetails } from './pages/PostDetails'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLaytout />}>
          <Route
            path="/"
            element={
              <IssuesContextProvider>
                <Home />
              </IssuesContextProvider>
            }
          />

          <Route path="/post/:postId" element={<PostDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
