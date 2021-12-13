import { useState } from 'react'
import axios from 'axios'
import FormRow from '../components/FormRow'
import useLocalState from '../utils/localState'
import LockKey from '../assets/lock-key.svg'
import url from '../utils/url'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
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
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    hideAlert()
    if (!email) {
      showAlert({
        text: 'Please provide email',
      })
      setLoading(false)
      return
    }
    try {
      const { data } = await axios.post(`${url}/api/v1/auth/forgot-password`, {
        email,
      })
      showAlert({ text: data.msg, type: 'success' })
      setSuccess(true)
    } catch (error) {
      showAlert({
        text: 'Something went wrong, please try again',
      })
      setSuccess(true)
    }
    setLoading(false)
  }

  return (
    <div className="flex justify-center p-4">
      {alert.show && (
        <div
          className={` py-4 px-6 rounded-lg items-center shadow  ${
            alert.type === 'danger' ? 'bg-red-200 text-red-900' : ''
          }
          ${alert.type === 'success' ? 'bg-green-200 text-green-900' : ''}`}
        >
          {alert.text}
        </div>
      )}
      {!success && (
        <div className="flex justify-between py-6 px-8 mt-20  bg-white rounded-lg shadow-2xl">
          <div className="md:w-1/2">
            <form
              className={loading ? 'form form-loading' : 'form'}
              onSubmit={handleSubmit}
            >
              <div className="text-4xl font-bold mb-4">
                Forgot your password?
              </div>
              <p className="mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, praesentium!
              </p>
              {/* single form row */}
              <FormRow
                type="email"
                name="email"
                label="Email Address"
                placeholder="your-email@mail.com"
                value={email}
                handleChange={handleChange}
              />
              {/* end of single form row */}
              <button
                type="submit"
                className="bg-green-400 w-full px-4 py-2 rounded text-white hover:bg-green-500"
                disabled={loading}
              >
                {loading ? 'Please Wait...' : 'Reset Password'}
              </button>
            </form>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img src={LockKey} alt="Lock" className="w-96" />
          </div>
        </div>
      )}
    </div>
  )
}

export default ForgotPassword
