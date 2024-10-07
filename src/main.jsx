import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter ,createRoutesFromElements ,Route ,RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './layout'
import Home from './pages/Home/Home'
import Other from './pages/Other/Other'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="other" element={<Other/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
