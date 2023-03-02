import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const NavBar = () => {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header>
      <nav className="bg-[#17223B] border-[#263859] px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-[#6B778D]">Leandro Robert</span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-[#6B778D] rounded-lg md:hidden hover:bg-[#263859] focus:outline-none focus:ring-2 focus:ring-[#6B778D]"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          {
            showMenu && (
              <div className="w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 border border-[#263859] rounded-lg bg-[#17223B] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#17223B]">
                  <li>
                    <Link href="#home" className={`${router.asPath == "/#home" ? "text-[#ff6768]" : ""} block py-2 pl-3 pr-4 text-[#6B778D] rounded hover:bg-[#263859] md:hover:bg-transparent md:border-0 md:hover:text-[#ff6768] md:p-0`} aria-current="page">Home</Link>
                  </li>
                  <li>
                    <Link href="#about" className={`${router.asPath == "/#about" ? "text-[#ff6768]" : ""} block py-2 pl-3 pr-4 text-[#6B778D] rounded hover:bg-[#263859] md:hover:bg-transparent md:border-0 md:hover:text-[#ff6768] md:p-0`}>About</Link>
                  </li>
                  <li>
                    <Link href="#skills" className={`${router.asPath == "/#skills" ? "text-[#ff6768]" : ""} block py-2 pl-3 pr-4 text-[#6B778D] rounded hover:bg-[#263859] md:hover:bg-transparent md:border-0 md:hover:text-[#ff6768] md:p-0`}>Skills</Link>
                  </li>
                  <li>
                    <Link href="#projects" className={`${router.asPath == "/#projects" ? "text-[#ff6768]" : ""} block py-2 pl-3 pr-4 text-[#6B778D] rounded hover:bg-[#263859] md:hover:bg-transparent md:border-0 md:hover:text-[#ff6768] md:p-0`}>Projects</Link>
                  </li>
                  <li>
                    <Link href="#contact" className={`${router.asPath == "/#contact" ? "text-[#ff6768]" : ""} block py-2 pl-3 pr-4 text-[#6B778D] rounded hover:bg-[#263859] md:hover:bg-transparent md:border-0 md:hover:text-[#ff6768] md:p-0`}>Contact</Link>
                  </li>
                </ul>
              </div>
            )
          }
        </div>
      </nav>
    </header>
  )
}

export default NavBar