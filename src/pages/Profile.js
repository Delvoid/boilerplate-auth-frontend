import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context'
import UpdateUser from '../components/UpdateUser'
import UpdateUserPassword from '../components/UpdateUserPassword'
import UserToken from '../components/UserToken'

const Profile = React.memo(() => {
  const { fetchUser, isLoading, getUserToken } = useGlobalContext()

  const getUser = () => {
    fetchUser()
    getUserToken()
  }

  useEffect(() => {
    getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return (
      <div className="p-4 lg:w-1/3 md:w-2/3 m-auto justify-center">
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <div className="container m-auto ">
      <UpdateUser />
      <UpdateUserPassword />
      <UserToken />
    </div>
  )
})

export default Profile
