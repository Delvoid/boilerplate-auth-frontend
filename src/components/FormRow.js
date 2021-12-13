import React from 'react'
import { Link } from 'react-router-dom'

const FormRow = ({
  type,
  name,
  value,
  label,
  placeholder,
  handleChange,
  password = false,
  error,
}) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between">
        <label htmlFor={name} className="block text-gray-800 ">
          {label || name}
        </label>
        {password && (
          <p className="text-sm font-thin text-gray-500">
            <Link
              to="/forgot-password"
              className="reset-link underline text-purple-800"
            >
              Forgot Password?
            </Link>
          </p>
        )}
      </div>
      <input
        placeholder={placeholder || ''}
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="w-full border border-gray-400 py-2 pl-3 rounded mt-1 outline-none focus:ring-indigo-600 :ring-indigo-600"
        style={error && { borderColor: 'red' }}
      />
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  )
}

export default FormRow
