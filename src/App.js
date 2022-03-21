import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasicLayout from './Layout/BasicLayout'
import routes from './routes'

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
