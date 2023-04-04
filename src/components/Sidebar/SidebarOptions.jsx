import React from 'react'
import './SidebarOptions.css'

const SidebarOptions = ({Icon, title, number, isActive}) => {
  return (
    <div className={`sidebaroptns ${isActive && 'sidebaroptns__active'}`}>
        <Icon/>
        <h4>{title}</h4>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOptions