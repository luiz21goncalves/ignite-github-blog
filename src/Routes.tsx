import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DefaultLaytout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLaytout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
