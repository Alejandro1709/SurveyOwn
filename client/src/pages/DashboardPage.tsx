import React from 'react'
import './DashboardPage.css'

function DashboardPage() {
  return (
    <section className="Dashboard">
      <div className="Dashboard-Header">
        <div className="Header-Wrapper">
          <div className="Header-Card">Card</div>
          <div className="Header-Card">Card</div>
          <div className="Header-Card">Card</div>
          <div className="Header-Card">Card</div>
        </div>
      </div>
      <div className="Dashboard-Main">Main</div>
      <div className="Dashboard-Footer">Footer</div>
    </section>
  )
}

export default DashboardPage