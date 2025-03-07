import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './homepage.jsx'
import Page2 from './page2'
import Catch from './catch.jsx'

const router = createBrowserRouter([
        {path: '/',
        element : <Home/>,
        errorElement : <Catch/>
        },
        {path:"/content",
        element : <Page2/>,
        }
    ])

    


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <>
        <RouterProvider router={router}></RouterProvider>
        </>
  </StrictMode>,
)
