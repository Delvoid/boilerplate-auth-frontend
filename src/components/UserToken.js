import { useGlobalContext } from '../context/context'

const UserToken = () => {
  const { tokens, isLoading, setTokens, getUserToken } = useGlobalContext()

  if (isLoading) {
    return (
      <div className="page">
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className="p-4 lg:w-1/3 md:w-2/3 m-auto justify-center">
      <div className="py-6 px-8 bg-white rounded shadow-xl">
        <div className="text-3xl font-bold">Devices</div>
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

export default UserToken
