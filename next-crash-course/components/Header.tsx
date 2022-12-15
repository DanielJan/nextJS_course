import React from 'react'
import headerStyles from '../styles/Header.module.css'

 const Header = ({ children }: any) => {
  return (
    
    <div>
     <h1 className='title'>
      <span>
        WebDev
      </span>
      </h1>
      <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style>
    </div>
  )
}

export default Header