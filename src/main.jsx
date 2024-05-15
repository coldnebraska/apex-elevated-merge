import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App'

// Importing Apex pages
import ErrorPage from './pages/apex_pages/ErrorPage'
import HomePage from './pages/apex_pages/HomePage'
import AboutPage from './pages/apex_pages/AboutPage'
import CampPage from './pages/apex_pages/CampPage'
import PreschoolPage from './pages/apex_pages/PreschoolPage'
import ContactPage from './pages/apex_pages/ContactPage'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/apex',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'services',
        element: <AboutPage />,
      },
      {
        path: 'xpel',
        element: <CampPage />,
      },
      {
        path: 'blog',
        element: <PreschoolPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      }
    ],
  },
  {
    path: '/elevated',
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
        path: 'services',
        element: <AboutPage />,
      },
      {
        path: 'brands',
        element: <CampPage />,
      },
      {
        path: 'financing',
        element: <PreschoolPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      }
    ],
  }
])

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
