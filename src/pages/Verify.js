import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Verify = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const { isLoading } = useGlobalContext()
  const query = useQuery()

  const verifyToken = async () => {
    setLoading(true)
    try {
      await axios.post('/api/v1/auth/verify-email', {
        verificationToken: query.get('token'),
        email: query.get('email'),
      })
    } catch (error) {
      // console.log(error.response);
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (!isLoading) {
      verifyToken()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <div className="p-4 lg:w-1/3 md:w-2/3 m-auto justify-center">
        <h2>Loading...</h2>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 lg:w-1/3 md:w-2/3 m-auto justify-center">
        <div className="py-2 pt-10 px-10 mt-10 bg-white rounded-lg shadow-xl">
          <h4>
            There was an error, please double check your verification link{' '}
          </h4>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 lg:w-1/3 md:w-2/3 m-auto justify-center">
      <div className="py-6 px-8 mt-20  bg-blue-100 rounded-lg shadow-xl">
        <h2>Account Confirmed</h2>
        <Link
          to="/login"
          className="bg-green-400 px-4 py-2 rounded text-white hover:bg-green-500 "
        >
          Please login
        </Link>
      </div>
    </div>
  )
}

export default Verify
