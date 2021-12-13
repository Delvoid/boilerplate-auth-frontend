import React from 'react'
import { useGlobalContext } from '../context/context'
import { Link } from 'react-router-dom'
import Lock from '../assets/b-lock.svg'
import {
  HiOutlineCamera,
  HiArrowNarrowRight,
  HiDocumentText,
  HiOutlineLockClosed,
  HiPhotograph,
} from 'react-icons/hi'

const Dashboard = () => {
  const { user } = useGlobalContext()
  const { name, role } = user
  return (
    <div className="container m-auto px-10 items-center justify-center">
      <div className="py-2 pt-10 px-10 mt-10 bg-white rounded-t-lg shadow-xl">
        <div className="flex items-center mb-4 space-x-4 ">
          <div className="">
            <img src={Lock} alt="Lock" className="w-20" />
          </div>
          <div className="text-3xl font-bold">Dashboard</div>
          <Link
            to="/profile"
            className="bg-green-400 px-4 py-2 rounded text-white hover:bg-green-500 "
          >
            Profile
          </Link>
        </div>
        <p className="mb-4">
          Welcome, {name} - <span>{role}</span>
        </p>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et esse
          atque alias quaerat quia eum maiores molestiae culpa neque ipsa
          assumenda velit voluptatem suscipit possimus pariatur adipisci vitae
          doloribus dignissimos harum quae libero voluptatibus molestias, sint
          at? Id, voluptatibus mollitia. Ratione, itaque cupiditate soluta totam
          nobis placeat obcaecati id unde sit aperiam iusto, perspiciatis
          corrupti eligendi ipsum, similique voluptatem reprehenderit quisquam
          nemo nisi doloribus quod. Laborum a, error odit eaque similique dicta
          sit, qui dolorem quisquam dolorum magni iste fugit repellendus
          sapiente perspiciatis tenetur enim illo repellat alias sunt iure ullam
          perferendis. Labore nemo blanditiis architecto ipsa in iure maxime.
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 py-10 px-10 bg-gray-100 rounded-b-lg shadow-xl">
        <div className="md:border-r-2 md:border-b-2 md:border-gray-200 rounded px-4">
          <div className="flex items-center my-4">
            <HiDocumentText className=" text-4xl text-gray-400" />
            <span className="text-xl text-gray-800">Documentation</span>
          </div>
          <p className="mb-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            provident, explicabo magni voluptate omnis exercitationem blanditiis
            adipisci nisi sed laudantium eius praesentium, optio tenetur
            dignissimos?
          </p>
          <p className="text-sm font-thin text-gray-500 mb-8">
            <Link
              to="/dashboard"
              className="login-link text-base font-bold  text-purple-800 flex items-center"
            >
              Explore the documentation <HiArrowNarrowRight />
            </Link>
          </p>
        </div>
        <div className=" md:border-b-2 md:border-gray-200 rounded px-4">
          <div className="flex items-center my-4">
            <HiOutlineCamera className=" text-4xl text-gray-400" />
            <span className="text-xl text-gray-800">React</span>
          </div>
          <p className="mb-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            provident, explicabo magni voluptate omnis exercitationem blanditiis
            adipisci nisi sed laudantium eius praesentium, optio tenetur
            dignissimos?
          </p>
          <p className="text-sm font-thin text-gray-500 mb-8">
            <a
              href="https://reactjs.org/"
              className="login-link text-base font-bold  text-purple-800 flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              Explore React <HiArrowNarrowRight />
            </a>
          </p>
        </div>{' '}
        <div className="md:border-r-2 md:border-gray-200 rounded px-4">
          <div className="flex items-center my-4">
            <HiPhotograph className=" text-4xl text-gray-400" />
            <span className="text-xl text-gray-800">Tailwind</span>
          </div>
          <p className="mb-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            provident, explicabo magni voluptate omnis exercitationem blanditiis
            adipisci nisi sed laudantium eius praesentium, optio tenetur
            dignissimos?
          </p>
          <p className="text-sm font-thin text-gray-500 mb-8">
            <a
              href="https://tailwindcss.com/docs/"
              className="login-link text-base font-bold  text-purple-800 flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              Explore Tailwind <HiArrowNarrowRight />
            </a>
          </p>
        </div>{' '}
        <div className=" px-4">
          <div className="flex items-center my-4">
            <HiOutlineLockClosed className=" text-4xl text-gray-400" />
            <span className="text-xl text-gray-800">Authentication</span>
          </div>
          <p className="mb-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            provident, explicabo magni voluptate omnis exercitationem blanditiis
            adipisci nisi sed laudantium eius praesentium, optio tenetur
            dignissimos?
          </p>
          <p className="text-sm font-thin text-gray-500 mb-8"></p>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
