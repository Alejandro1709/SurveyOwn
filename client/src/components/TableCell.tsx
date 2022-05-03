import React from 'react'
import './TableCell.css'

function TableCell() {
  return (
    <div className='Table-Cell'>
      <div className='Cell-Wrapper'>
        <div className='Cell-Img-Holder'></div>
        <div className='Cell-Details'>
          <h3>Alejandro LR</h3>
          <p>alelarosa99@gmail.com</p>
        </div>
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' /></svg>
      </div>
    </div>
  )
}

export default TableCell