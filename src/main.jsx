import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CampPage from './pages/CampPage'
import PreschoolPage from './pages/PreschoolPage'
import ContactPage from './pages/ContactPage'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'camp',
        element: <CampPage />,
      },
      {
        path: 'preschool',
        element: <PreschoolPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      }
    ],
  },
])

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
