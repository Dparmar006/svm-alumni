import ListAlumni from './pages/Alumni/ListAlumni'
import Dashboard from './pages/Dashboard/Dashboard'
import ListIndustries from './pages/Industries/ListIndustries'
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';

const routes = [
  {
    title: 'Dashboard',
    component: <Dashboard />,
    path: '/'
  },
  {
    title: 'Alumni',
    component: <ListAlumni />,
    path: '/alumni'
  },
  {
    title: 'Industries',
    component: <ListIndustries />,
    path: '/industries'
  },
  {    
    title: 'Login',
    component: <Login />,
    path: '/login'
  },
  {    
    title: 'SignUp',
    component: <SignUp />,
    path: '/SignUp'
  }
]

export default routes
