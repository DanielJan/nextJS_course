import React from 'react'
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

 const Nav = ({ children }: any) => {
  return (
    
    <div className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
       </div>
  )
}

export default Nav