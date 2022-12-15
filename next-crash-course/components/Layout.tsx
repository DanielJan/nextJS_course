import React from 'react'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'
import Header from './Header'

 const Layout = ({ children }: any) => {
  return (
    <>
    <Nav />
    <div className={styles.container}>
      <main className={styles.main}>
        <Header/>
        {children}
      </main>
       </div>
       </>
  )
}

export default Layout