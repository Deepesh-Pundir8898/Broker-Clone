import HomePage from "./routes/HomePage/HomePage"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import ForRent from './routes/ForRent/ForRent'
import ListPage from './routes/listPage/ListPage'
import Layout from './routes/Layout/Layout'
import SinglePage from './routes/singlePage/SinglePage'
import Profile from "./routes/ProfilePage/Profile"


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[{
        path: '/',
        element: <HomePage />,
      },
      {
        path:'/listPage',
        element:<ListPage />
      },
      {
        path:'/property/:id',
        element:<SinglePage />
      },
      {
        path:'/forRent',
        element:<ForRent />
      },
      {
        path:'/:id',
        element:<SinglePage />
      },
      {
        path:'/profile',
        element:<Profile />
      }
    ]
    },  
  ])

  return (
    
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
