import { Layout } from '@/components/common';
const DeploySubDAO = () => {
  return (
    <>
      <div>
        <h2 className="text-xl">Deploy Your SubDAO</h2>
        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="" type="text" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                GithubURL
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="" type="text" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                Owner URL
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="" type="text" />
            </div>
          </div>

          <div className="">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button"
              >
                Deploy
              </button>
            </div>
          </div>
          <p className="text-sm">
            DAO Address: xxxxxxxxxxx
          </p>
          <p className="text-sm">
            MemberID
          </p>
        </form>
      </div>
    </>
  )
}

DeploySubDAO.Layout = Layout
export default DeploySubDAO