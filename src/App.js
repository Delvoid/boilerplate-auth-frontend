import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import {
  Home,
  Error,
  Register,
  Login,
  Verify,
  Dashboard,
  ProtectedRoute,
  ForgotPassword,
  ResetPassword,
  Profile,
  Users,
  User,
} from './pages'

import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/register" element={<Register />} exact></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute component={Dashboard} roles={['admin', 'user']} />
          }
          exact
        ></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute component={Profile} roles={['admin', 'user']} />
          }
          exact
        ></Route>
        <Route
          path="/users"
          element={<ProtectedRoute component={Users} roles={['admin']} />}
          exact
        ></Route>
        <Route
          path="/users/:id"
          element={<ProtectedRoute component={User} roles={['admin']} />}
          exact
        ></Route>

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
          exact
        ></Route>
        <Route path="/user/verify-email" element={<Verify />} exact></Route>
        <Route
          path="/user/reset-password"
          element={<ResetPassword />}
          exact
        ></Route>
        <Route path="*" element={<Error />} exact></Route>
      </Routes>
    </Router>
  )
}

export default App
