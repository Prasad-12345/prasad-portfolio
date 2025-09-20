import React from 'react'
import './style.scss'

function PageHeaderContent(props) {
  const {herderText, icon} = props
  return (
    <div className='wrapper'>
      <h2>{herderText}</h2>
      <span>{icon}</span>
    </div>
  )
}

export default PageHeaderContent
