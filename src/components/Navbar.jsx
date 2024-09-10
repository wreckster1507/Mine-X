import React from 'react'
import { Link } from 'react-router-dom'

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}

export default function Navbar() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-white shadow-sm">
            <Link to="/" className="flex items-center justify-center">
                <MountainIcon className="h-6 w-6 text-blue-500" />
                <span className="sr-only">MineX</span>
            </Link>
            <nav className="flex gap-4 sm:gap-6">

                <Link to="/shiftLogForm" className="text-sm font-medium hover:text-blue-500">ShiftLogForm</Link>
                <Link to="/shiftLogList" className="text-sm font-medium hover:text-blue-500">ShiftLogList</Link>
                <Link to="/about" className="text-sm font-medium hover:text-blue-500">About</Link>
                <Link to="/contact" className="text-sm font-medium hover:text-blue-500">Contact</Link>
                <Link to="/login" className="text-black border-indigo-500 border-2 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 
                font-medium rounded-lg text-sm px-5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Login</Link>
            </nav>
        </header>
    )
}