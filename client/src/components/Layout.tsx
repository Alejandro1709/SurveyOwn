import React from 'react'

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

function Layout({children}: LayoutProps) {
  return (
    <section className="Layout">{children}</section>
  )
}

export default Layout