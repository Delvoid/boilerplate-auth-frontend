import React, { useState } from 'react'
import axios from 'axios'
import FormRow from '../components/FormRow'
import { useGlobalContext } from '../context/context'
import useLocalState from '../utils/localState'

const UpdateUser = React.memo(() => {
  const { saveUser, user } = useGlobalContext()

  const [values, setValues] = useState({
    name: user.name,
    email: user.email,
  })

  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    hideAlert()
    setLoading(true)
    const { name, email } = values
    const loginUser = { name, email }
    try {
      const { data } = await axios.patch(`/api/v1/users/updateUser`, loginUser)
      showAlert({
        text: `Profile updated!`,
        type: 'success',
      })
      setTimeout(() => {
        hideAlert()
      }, 3000)
      saveUser(data.user)
      setLoading(false)
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
      <div className="p-4 lg:w-1/3 md:w-2/3 m-auto justify-center">
        <div className="py-6 px-8 mt-20  bg-white rounded shadow-xl">
          <div className="text-3xl font-bold mb-8"> Your Details</div>
          <form
            className={loading ? 'form form-loading' : 'form'}
            onSubmit={onSubmit}
          >
            <FormRow
              type="name"
              name="name"
              label="Name"
              value={values.name}
              handleChange={handleChange}
            />
            <FormRow
              type="email"
              name="email"
              label="Email Address"
              value={values.email}
              handleChange={handleChange}
            />

            <button
              type="submit"
              className="bg-green-400 w-full px-4 py-2 rounded text-white hover:bg-green-500 "
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Update'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
})

export default UpdateUser
