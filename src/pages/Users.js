import { useState, useEffect, useCallback } from 'react'

import axios from 'axios'
import url from '../utils/url'

import useLocalState from '../utils/localState'
import { Link } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([])
  const { showAlert, loading, setLoading } = useLocalState()

  const getUsers = useCallback(async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`${url}/api/v1/users/`)
      setUsers(data.users)

      setLoading(false)
    } catch (error) {
      console.log({ error })
      showAlert({ text: error.response.data.msg })
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getUsers()
  }, [getUsers])

  if (loading) {
    return (
      <div className="p-4 lg:w-1/3 md:w-2/3 m-auto justify-center">
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className="p-4 lg:w-1/3 md:w-2/3 m-auto justify-center">
      <div className="py-6 px-8 mt-20  bg-blue-100 rounded-lg shadow-xl">
        <div className="text-3xl font-bold mb-8">
          User List ({users.length})
        </div>
        {users.map((user) => (
          <Link to={`/users/${user._id}`} key={user._id}>
            <div>{user.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Users
