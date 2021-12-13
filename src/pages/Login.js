import { useState, useEffect } from 'react'
import axios from 'axios'
import FormRow from '../components/FormRow'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import useLocalState from '../utils/localState'
import Lock from '../assets/lock.svg'

const Login = () => {
  const { saveUser, user } = useGlobalContext()
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    hideAlert()
    setLoading(true)
    const { email, password } = values
    const loginUser = { email, password }
    try {
      const { data } = await axios.post(`/api/v1/auth/login`, loginUser)
      setValues({ name: '', email: '', password: '' })
      showAlert({
        text: `Welcome, ${data?.user?.name}. Redirecting to dashboard...`,
        type: 'success',
      })
      setLoading(false)
      saveUser(data.user)
      navigate('/dashboard')
    } catch (error) {
      console.log({ error })
      showAlert({ text: error.response.data.msg })
      setLoading(false)
    }
  }
  return (
    <>
      {alert.show && (
        <div className="flex justify-center m-auto -mb-10">
          <div
            className={`py-4 px-6 rounded-lg items-center shadow  ${
              alert.type === 'danger' && 'bg-red-200 text-red-900'
            }
        ${alert.type === 'success' && 'bg-green-200 text-green-900'}`}
          >
            {alert.text}
          </div>
        </div>
      )}
      <div className="flex justify-center p-4">
        <div className="flex justify-between py-6 px-8 mt-20  bg-white rounded-lg shadow-2xl">
          <div className="md:w-2/3">
            <div className="text-3xl font-bold">Login</div>

            <p className="text-sm font-thin text-gray-500 mb-10">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="register-link underline text-purple-800"
              >
                Register
              </Link>
            </p>
            <form
              className={loading ? 'form form-loading' : 'form'}
              onSubmit={onSubmit}
            >
              <FormRow
                type="email"
                name="email"
                label="Email Address"
                value={values.email}
                placeholder="placeholder@mail.com"
                handleChange={handleChange}
              />

              <FormRow
                type="password"
                name="password"
                label="Password"
                value={values.password}
                password="true"
                handleChange={handleChange}
              />

              <button
                type="submit"
                className="bg-green-400 w-full px-4 py-2 rounded text-white hover:bg-green-500 "
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Login'}
              </button>
            </form>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img src={Lock} alt="Lock" className="w-96" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
