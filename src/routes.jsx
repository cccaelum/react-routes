import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Header from './templates/Header'

const router = createBrowserRouter(
  [{
    path: "/",
    element: <Header />,
    children: [
       {path:"/", element:<Home />},
       {path:"/projects", element:<Projects />},
       {path:"/resume", element:<Resume />}
    ]
  }]
)

export default router