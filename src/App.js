import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasicLayout from './layout/BasicLayout'
import routes, { unauthemticatedRoutes } from './routes'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {routes.map(route => {
            return (
              <Route
                path={route.path}
                element={<BasicLayout>{route.component}</BasicLayout>}
              />
            )
          })}

          {unauthemticatedRoutes.map(route => {
            return <Route path={route.path} element={route.component} />
          })}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
