import {signIn, signOut } from "next-auth/react"

export default function Btn({session}) {


  if(session) {
    return (
      <>
        <div className="flex flex-row justify-center items-center w-full">
          <button 
            onClick={() => signOut()}
            className="flex flex-row w-full h-1/2 justify-center rounded-md bg-blue-500
                  bg-black/20 px-2 py-2 mx-4 whitespace-nowrap text-sm font-medium text-white hover:bg-black/30 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75" 
          >
            Sign Out
          </button>
          <div className="px-2 " >
            <img 
            src={session.user.image} 
            alt="User Image"
            />
          </div>
        <button 
            className="flex flex-row w-full h-1/2 justify-center rounded-md bg-blue-200
                  bg-black/20 px-2 py-2 whitespace-nowrap text-sm font-medium text-white hover:bg-black/30 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75" 
          >
            {session.user.email}
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <button 
        onClick={() => signIn()}
        className="flex flex-row w-full justify-center rounded-md bg-blue-500
                bg-black/20 px-4 py-2 whitespace-nowrap text-sm font-medium text-white hover:bg-black/30 
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75" 
      >Sign In</button>
    </>
  )
}