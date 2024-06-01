import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App'

// Importing Apex pages
import ErrorPage from './pages/apex_pages/ErrorPage'
import HomePage from './pages/apex_pages/HomePage'
import ServicesPage from './pages/apex_pages/ServicesPage'
import XpelPage from './pages/apex_pages/XpelPage'
import ContactPage from './pages/apex_pages/ContactPage'

import ElevatedHomePage from './pages/elevated_pages/HomePage'
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
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'xpel',
        element: <XpelPage />,
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
        element: <ElevatedHomePage />,
      },
      {
        path: 'about',
        element: <ServicesPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'brands',
        // element: <CampPage />,
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
