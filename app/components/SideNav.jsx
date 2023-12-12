"use client"

import Link from "next/link";

import { TbArrowsUpDown } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { IoTrophyOutline } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";

const SideNav = () => {
  return (
    <nav className="flex flex-col absolute left-0 border-r-blue-400 border-[1px] bg-blue-900 h-screen z-10">
      {/* fix this active in link style */}
      <Link href='/' className="flex flex-col items-center p-5 text-blue-400 active:border-r-blue-400 active:border-r-2">
        <AiOutlineDashboard size='1.8em' />
        <p className='text-white'>Overview</p>
      </Link>
      <Link href='/transactions' className="flex flex-col items-center p-5 text-blue-400">
        <TbArrowsUpDown size='1.6em' />
        <p className='text-white'>Transactions</p>
      </Link>
      <Link href='/accounts' className="flex flex-col items-center p-5 text-blue-400">
        <FaWallet size='1.6em' />
        <p className='text-white'>Accounts</p>
      </Link>
      <Link href='/budget'className="flex flex-col items-center p-5 text-blue-400">
        <FaDollarSign size='1.6em' />
        <p className='text-white'>Budget</p>
      </Link>
      <Link href='/goals'className="flex flex-col items-center p-5 text-blue-400">
        <IoTrophyOutline size='1.6em' />
        <p className='text-white'>Goals</p>
      </Link>
    </nav>
  )
}

export default SideNav;