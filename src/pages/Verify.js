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
      <div className="page">
        <h2>Loading...</h2>
      </div>
    )
  }

  if (error) {
    return (
      <div className="page">
        <h4>There was an error, please double check your verification link </h4>
      </div>
    )
  }

  return (
    <div className="page">
      <h2>Account Confirmed</h2>
      <Link to="/login" className="btn">
        Please login
      </Link>
    </div>
  )
}

export default Verify
