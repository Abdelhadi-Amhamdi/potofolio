import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom'
import ThemeContextProvider, {ThemeContext} from './contexts.js'
import {useContext } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Nav from './components/Nav'
import Hero, { Orbit } from './components/Hero'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails.js'
import Articles from './components/Articles.js'
import Footer from './components/Footer.js'
import Certifes from './components/Certificates.js'

const queryClient = new QueryClient()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main />}>
      <Route index element={<MainPage />} />
      <Route path=':project_name' element={<ProjectDetails />}></Route>
    </Route>
  )
)



function MainPage() {
  return (
    <div className='max-w-[1000px] mx-auto'>
      <Hero />
      <Projects />
      <Articles />
      <Certifes />
      <Orbit />
    </div>
  )
}

function Main() {
  const theme = useContext(ThemeContext)
  return (
      <div className={`${theme?.theme == 'light' ? "bg-white text-black/80" : "bg-black text-white"} bg-ascii w-full h-full overflow-x-hidden overflow-y-scroll`}>
        <Nav />
        <Outlet />
        <Footer />
      </div>
  )
}


function App() {
  return (
    <div className='p-0 m-0 box-border overflow-hidden w-[100vw] h-[100vh]'>
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
