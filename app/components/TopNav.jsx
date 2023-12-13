"use client"

import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

const TopNav = () => {
  return (
    <nav className="top-0 absolute w-full flex justify-end bg-blue-900 border-green-600 border-2 ">
      <div className="mx-10 my-2 flex items-center text-blue-400">
        <CgProfile size='2em' />
        <p className="mx-3 text-white">John Doe</p>
        <IoIosArrowDown size='0.8em' />
      </div>
    </nav>
  )
}

export default TopNav