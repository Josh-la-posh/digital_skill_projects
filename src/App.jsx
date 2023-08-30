import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Project from './pages/project/project'
import Contact from './pages/contact/contact'
import Home from './pages/home/home'
import Root from './pages/root'
import Service from './pages/service/service'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TodoApp from './pages/todo-app/todo-app'
import Login from './pages/account/login'
import Register from './pages/account/register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/project',
        element: <Project />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/services',
        element: <Service />
      },
      {
        path: '/todo',
        element: <TodoApp />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  },

]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
