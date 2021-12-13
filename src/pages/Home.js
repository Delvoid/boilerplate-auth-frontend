import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import AuthImg from '../assets/undraw_auth.svg'
import FeaturesImg from '../assets/features_overview.svg'
import {
  HiOutlineUserAdd,
  HiOutlineMail,
  HiOutlineLogin,
  HiLockClosed,
  HiOutlineLogout,
  HiOutlineUsers,
  HiOutlineUser,
  HiOutlineCog,
} from 'react-icons/hi'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { SiHashnode } from 'react-icons/si'

const Home = () => {
  const { user } = useGlobalContext()
  return (
    <>
      <header className="container m-auto flex flex-col items-center px-12 h-screen">
        <div className="header__title flex-1 gap-x-12 content-center justify-center items-start justify-items-start  text-white">
          <h1 className="text-7xl mb-8 font-bold">
            JWT Authentication Boilerplate
          </h1>
          <h4 className="text-3xl font-thin mb-8 text-gray-300">
            Save time on your next great idea! With a basic express auth flow.
          </h4>
          <Link
            to="/login"
            className="bg-green-500 px-6 py-4 text-5xl rounded text-white hover:bg-green-600"
          >
            Try now
          </Link>

          <img
            src={AuthImg}
            className="header__img items-center"
            alt="Undraw auth right"
          />
        </div>
      </header>
      <section
        className="container m-auto px-12 h-screen grid grid-cols-2 gap-x-16 text-white"
        id="section-features"
      >
        <div>
          <img
            src={FeaturesImg}
            className="w-full items-center"
            alt="Features overview"
          />
        </div>
        <div className="flex flex-col flex-1 mb-24">
          <header>
            <h1 className="text-6xl font-bold mb-2">Product features</h1>
            <h4 className="text-xl font-thin text-gray-300">
              Here are some of the build in features.
            </h4>
          </header>
          <div className="features flex flex-1 flex-col justify-between py-10">
            <div className="flex justify-start items-center gap-4">
              <div className="bg-blue-800 p-2 rounded-full">
                <HiOutlineUserAdd className="text-xl" />
              </div>
              <div>Register a user</div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="bg-blue-800 p-2 rounded-full">
                <HiOutlineMail className="text-xl" />
              </div>
              <div>Verify users email</div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="bg-blue-800 p-2 rounded-full">
                <HiOutlineLogin className="text-xl" />
              </div>
              <div>User login</div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="bg-blue-800 p-2 rounded-full">
                <HiLockClosed className="text-xl" />
              </div>
              <div>Forgot/Reset password</div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="bg-blue-800 p-2 rounded-full">
                <HiOutlineLogout className="text-xl" />
              </div>
              <div>Logout</div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="bg-blue-800 p-2 rounded-full">
                <HiOutlineUsers className="text-xl" />
              </div>
              <div>View all users</div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="bg-blue-800 p-2 rounded-full">
                <HiOutlineUser className="text-xl" />
              </div>
              <div>View a single user</div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="bg-blue-800 p-2 rounded-full">
                <HiOutlineCog className="text-xl" />
              </div>
              <div>Update user settings</div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container m-auto px-12 grid grid-cols-2 gap-x-12 text-gray-900 mb-12"
        id="section-features"
      >
        <div className="flex flex-1 bg-white rounded-md px-8 py-6 shadow-2xl">
          <header className="flex flex-1 flex-col ">
            <h1 className="text-6xl font-bold mb-8">Backend Repo</h1>
            <div className="flex flex-1 flex-col justify-between">
              <h4 className="text-xl font-thin text-gray-500 mb-6">
                The backend api is created using Node Js, Express, mongoDB and
                uses JSON web tokens along with cookies. It has full
                intergration tests using Jest.
              </h4>

              <a
                href="https://github.com/Delvoid/boilerplate-auth-express"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center  bg-green-500 px-4 py-2 text-2xl rounded text-white hover:bg-green-600"
              >
                View on github
              </a>
            </div>
          </header>
        </div>
        <div className="flex flex-1 bg-white rounded-md px-8 py-6 shadow-2xl">
          <header className="flex flex-1 flex-col ">
            <h1 className="text-6xl font-bold mb-8">Frontend Repo</h1>
            <div className="flex flex-1 flex-col justify-between ">
              <h4 className="text-xl font-thin text-gray-500 mb-6">
                The frontend project is built using ReactJs using the context
                API and Tailwind CSS for the styling.
              </h4>

              <a
                href="https://github.com/Delvoid/boilerplate-auth-express"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center  bg-green-500 px-4 py-2 text-2xl rounded text-white hover:bg-green-600"
              >
                View on github
              </a>
            </div>
          </header>
        </div>
      </section>
      <footer className="container m-auto flex flex-col items-center justify-center mt-20 mb-10 text-white">
        <div className="flex space-x-6 mb-6">
          <a
            href="https://github.com/delvoid"
            target="_blank"
            rel="noreferrer"
            className="text-4xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/Delvoid"
            target="_blank"
            rel="noreferrer"
            className="text-4xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/david-hough-45226268/"
            target="_blank"
            rel="noreferrer"
            className="text-4xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://delvoid.hashnode.dev/"
            target="_blank"
            rel="noreferrer"
            className="text-4xl"
          >
            <SiHashnode />
          </a>
        </div>
        <p class="footer__copyright mb-2">
          &copy; Copyright by <strong>Delvoid</strong>. Created to learn NodeJs
          and ReactJs
        </p>
        <p className=" text-xs text-gray-400">
          {' '}
          Disclaimer this was created for me to learn NodeJs, JSON webtokens and
          React. I would not recommend using this in production
        </p>
      </footer>
    </>
  )
}

export default Home
