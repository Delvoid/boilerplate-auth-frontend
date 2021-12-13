import React from 'react'

import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

const Navbar = () => {
  const { user, logoutUser } = useGlobalContext()

  return (
    <nav>
      <div class="text-white container m-auto">
        <div class="flex justify-between h-16 px-10 items-center">
          <div class="flex items-center space-x-8">
            <h1 class="text-xl lg:text-2xl font-bold cursor-pointer">
              <Link to="/" className="home-link">
                DelvAuth
              </Link>
            </h1>
            {user && (
              <div class="hidden md:flex justify-around space-x-4">
                <Link
                  to="/dashboard"
                  class=" px-4 py-2 hover:bg-green-500 rounded text-gray-200"
                >
                  Dashboard
                </Link>
                {user.role === 'admin' && (
                  <Link
                    to="/users"
                    class=" px-4 py-2 hover:bg-green-500 rounded text-gray-200"
                  >
                    Users
                  </Link>
                )}
              </div>
            )}
          </div>
          {!user ? (
            <div class="flex space-x-4 items-center">
              <Link
                to="/login"
                class="text-gray-200 text-sm hover:bg-green-500 rounded px-4 py-2"
              >
                LOGIN
              </Link>
              <Link
                to="/register"
                class="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 text-sm"
              >
                SIGNUP
              </Link>
            </div>
          ) : (
            <div class="flex space-x-4 items-center">
              <button
                href="#"
                class="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 text-sm"
                onClick={() => {
                  logoutUser()
                }}
              >
                LOGOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
