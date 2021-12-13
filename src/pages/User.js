import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import url from '../utils/url'

import useLocalState from '../utils/localState'

const User = () => {
  const [user, setUser] = useState([])
  const [tokens, setTokens] = useState([])
  const { showAlert, loading, setLoading } = useLocalState()
  const { id } = useParams()

  const getUser = useCallback(async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`${url}/api/v1/users/${id}`)
      setUser(data.user)
      const res = await axios.get(`${url}/api/v1/users/tokens/${id}`)
      setTokens(res.data.tokens)

      setLoading(false)
    } catch (error) {
      console.log({ error })
      showAlert({ text: error.response.data.msg })
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

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
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <h2>{user.role}</h2>
        <h2> Devices </h2>
        {tokens &&
          tokens.map((token) => (
            <div key={token._id}>
              <div>{token.user}</div>
              <div>{token.userAgent}</div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default User
