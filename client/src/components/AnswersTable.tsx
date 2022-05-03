import React from 'react'
import TableCell from './TableCell'
import './AnswersTable.css'

function AnswersTable() {
  return (
    <div className='Answers-Table'>
      <TableCell />
      <TableCell />
      <TableCell />
      <TableCell />
      <TableCell />
      <TableCell />
      <div className='Answers-Controls'>
        <a href='/example-survey/edit'>Edit</a>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default AnswersTable