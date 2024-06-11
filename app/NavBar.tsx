'use client'


import { useSession } from "next-auth/react"
import Link from "next/link"


const NavBar = () => {

  const {status, data: session} = useSession()


  return (
    <div className="flex bg-slate-200 p-5">
        <Link href='/' className="mr-10">Next.js</Link>
        <Link href='/users' className="mr-5">Users</Link>
        <Link href='/admin' className="mr-5">Admin</Link>
        <Link href='/products' className="mr-5">Products</Link>
        {/* {status === 'loading' && <div>Loading...</div>} */}
        {status === 'authenticated' && 
          <div>
            {session.user!.name}
            <Link href='/api/auth/signout' className="ml-5">Sign Out</Link>
          </div>
        }
        { status === 'unauthenticated' && <Link href='/api/auth/signin' className="mr-5">Sign In</Link>}
    </div>
  )
}
export default NavBar