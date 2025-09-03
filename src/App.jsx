import { Routes, Route } from 'react-router'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'


import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { AuthLayout } from './components'
import AllPost from './pages/AllPost'
import AddPost from './pages/AddPost'
import EditPost from './pages/EditPost'
import Post from './pages/Post'
import Dashboard from "./pages/Dashboard"




// SEE THE WHOLE THING FROM THE MAIN.JSX FILE(for self practice) !!!!!!!!!!


function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()


  useEffect(() => {


    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))


  }, [])



  return !loading ? (


    <Routes>




      <Route element={<Layout />}>


        <Route element={<Home />} path='/' />

        <Route element={<About />} path="/about" />

        <Route
          element={
            <AuthLayout authentication={false}>
              <Login />
            </AuthLayout>
          }
          path="/login"
        />

        <Route
          element={
            <AuthLayout authentication={false}>
              <Signup />
            </AuthLayout>
          }
          path="/signup"
        />


        {/* Protected Routes */}

        <Route
          path="/all-post"
          element={
            <AuthLayout authentication={true}>
              <AllPost />
            </AuthLayout>
          }
        />

        <Route
          path="/dashboard"
          element={
            <AuthLayout authentication={true}>
              <Dashboard />
            </AuthLayout>
          }
        />

        <Route
          path="/add-post"
          element={
            <AuthLayout authentication={true}>
              <AddPost />
            </AuthLayout>
          }
        />


        <Route
          path="/edit-post/:slug"
          element={
            <AuthLayout authentication={true}>
              <EditPost />
            </AuthLayout>
          }
        />


        <Route path="/post/:slug" element={<Post />} />


      </Route>

      <Route element={<NotFound />} path="/*" />




    </Routes>


  ) : null
}

export default App
