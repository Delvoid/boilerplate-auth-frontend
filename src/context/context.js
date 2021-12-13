import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [tokens, setTokens] = useState(null)

  const saveUser = (user) => {
    setUser(user)
  }

  const removeUser = () => {
    setUser(null)
  }

  const saveTokens = (tokens) => {
    setTokens(tokens)
  }

  const fetchUser = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get(`/api/v1/users/showMe`)
      saveUser(data.user)
      setIsLoading(false)
      return data.user
    } catch (error) {
      removeUser()
    }
  }

  const getUserToken = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get(`/api/v1/users/tokens/`)
      saveTokens(data.tokens)
      setIsLoading(false)
    } catch (error) {
      console.log({ error })
      setIsLoading(false)
    }
  }

  const logoutUser = async () => {
    try {
      await axios.delete('/api/v1/auth/logout')
      removeUser()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUser()
    if (user) {
      getUserToken()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        saveUser,
        user,
        logoutUser,
        fetchUser,
        tokens,
        setTokens,
        getUserToken,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
