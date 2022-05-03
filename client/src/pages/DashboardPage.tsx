import React from 'react'
import AnswersTable from '../components/AnswersTable'
import './DashboardPage.css'

function DashboardPage() {
  return (
    <div className="Dashboard">
      <div className="Dashboard-Header">
        <div className="Header-Wrapper">
          <div className="Header-Card">Card</div>
          <div className="Header-Card">Card</div>
          <div className="Header-Card">Card</div>
          <div className="Header-Card">Card</div>
        </div>
      </div>
      <section className="Dashboard-Main">
        <div className="Main-Wrapper">
          <AnswersTable />
        </div>
      </section>

      <div className="Dashboard-Footer">Footer</div>
    </div>
  )
}

export default DashboardPage