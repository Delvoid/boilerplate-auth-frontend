import React, { useState } from 'react'
import axios from 'axios'
import FormRow from '../components/FormRow'
import useLocalState from '../utils/localState'

const UpdateUserPassword = React.memo(() => {
  const [values, setValues] = useState({
    oldPassword: '',
    newPassword: '',
  })

  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmitPassword = async (e) => {
    e.preventDefault()
    hideAlert()
    setLoading(true)
    const { oldPassword, newPassword } = values
    const passwords = { oldPassword, newPassword }
    try {
      await axios.patch(`/api/v1/users/updateUserPassword`, passwords)
      showAlert({
        text: `Password updated!`,
        type: 'success',
      })
      setValues({ oldPassword: '', newPassword: '' })
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
        <div className="flex justify-center m-auto">
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
        <div className="py-6 px-8   bg-white rounded shadow-xl">
          <div className="text-3xl font-bold mb-8"> Change Password</div>
          <form
            className={loading ? 'form form-loading' : 'form'}
            onSubmit={onSubmitPassword}
          >
            <FormRow
              type="password"
              name="oldPassword"
              value={values.oldPassword}
              label="Old Password"
              handleChange={handleChange}
            />
            <FormRow
              type="password"
              name="newPassword"
              label="New Password"
              value={values.newPassword}
              handleChange={handleChange}
            />

            <button
              type="submit"
              className="bg-green-400 w-full px-4 py-2 rounded text-white hover:bg-green-500 "
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Change Password'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
})

export default UpdateUserPassword
