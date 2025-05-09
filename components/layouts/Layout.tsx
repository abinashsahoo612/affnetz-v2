import React, { ReactNode } from 'react'
import Header from './header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}
const Layout = ({children}:LayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
