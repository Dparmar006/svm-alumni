import AlumniDetails from './pages/Alumni/AlumniDetails'
import ListAlumni from './pages/Alumni/ListAlumni'
import Dashboard from './pages/Dashboard/Dashboard'
import ListIndustries from './pages/Industries/ListIndustries'
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import LandingPage from './pages/Landing Page/Components/Landing Page'
import IndustriesDetails from './pages/Industries/IndustriesDetails';

const routes = [
  {
    title: 'Dashboard',
    component: <Dashboard />,
    path: '/'
  },
  // alumni
  {
    title: 'Alumni',
    component: <ListAlumni />,
    path: '/alumni'
  },
  {
    title: 'Alumni Details',
    component: <AlumniDetails />,
    path: '/alumni/:id'
  },
  
  //industry

  {
    title: 'Industries',
    component: <ListIndustries />,
    path: '/industries'
  },
  {
    title: 'Industry Details',
    component: <IndustriesDetails />,
    path: '/industries/:id'
  },
  
]

export const unauthemticatedRoutes = [
  {
    title: 'LandingPage',
    component: <LandingPage />,
    path: '/landingpage'
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
