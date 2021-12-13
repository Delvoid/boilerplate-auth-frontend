import React, { useState } from 'react'
import axios from 'axios'
import url from '../utils/url'

import FormRow from '../components/FormRow'
import { Link } from 'react-router-dom'
import useLocalState from '../utils/localState'
import UserImg from '../assets/user-reg.svg'

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})

  const {
    alert,
    showAlert,
    loading,
    setLoading,
    success,
    setSuccess,
    hideAlert,
  } = useLocalState()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    hideAlert()
    setLoading(true)
    const { name, email, password } = values
    const registerNewUser = { name, email, password }

    try {
      const { data } = await axios.post(
        `${url}/api/v1/auth/register`,
        registerNewUser
      )

      setSuccess(true)
      setValues({ name: '', email: '', password: '' })
      showAlert({ text: data.msg, type: 'success' })
    } catch (error) {
      const { msg, validationErrors } = error.response.data
      setErrors(validationErrors)
      showAlert({ text: msg || 'there was an error' })
    }
    setLoading(false)
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
        {!success && (
          <div className="flex justify-between py-6 px-8 mt-20  bg-white rounded-lg shadow-2xl">
            <div className="md:w-2/3">
              <div className="text-3xl font-bold">Create Account</div>
              <p className="text-sm font-thin text-gray-500 mb-8">
                Already a have an account?{' '}
                <Link
                  to="/login"
                  className="login-link underline text-purple-800"
                >
                  Log In
                </Link>
              </p>
              <form
                className={loading ? 'form form-loading' : 'form'}
                onSubmit={onSubmit}
              >
                {/* single form row */}

                <FormRow
                  type="name"
                  name="name"
                  value={values.name}
                  label="Username"
                  handleChange={handleChange}
                  error={errors?.name}
                />

                {/* single form row */}
                <FormRow
                  type="email"
                  name="email"
                  value={values.email}
                  label="Email Address"
                  placeholder="placeholder@mail.com"
                  handleChange={handleChange}
                  error={errors?.email}
                />
                {/* end of single form row */}
                {/* single form row */}
                <FormRow
                  type="password"
                  name="password"
                  value={values.password}
                  label="Password"
                  handleChange={handleChange}
                  error={errors?.password}
                />
                {/* end of single form row */}
                <button
                  type="submit"
                  className="bg-green-400 w-full px-4 py-2 rounded text-white hover:bg-green-500"
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Register'}
                </button>
              </form>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img src={UserImg} alt="user" className="w-96" />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Register
