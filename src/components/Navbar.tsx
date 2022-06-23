import React from 'react'
import { Link } from 'react-router-dom'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-lg py-3 bg-sky-700 relative flex w-full mb-9">
      <Link className='font-bold leading-tight text-xl text-white mx-24' to="/reviews">Reviews</Link>
    </nav>
  )
}

export default Navbar