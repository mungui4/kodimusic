import React from 'react'
import session from'../assets/styles/SessionOptions.module.css'
import { Link } from 'react-router-dom'

export const SessionOptions = ({text, icon, link}) => {
  return (
    <div className={session.container}>
 
 <Link to={link} className={session.link} ><button className={session.button}>
          <div className={session.iconContainer}>{icon}
            </div>
           
            <h3 className={session.text}>{text}</h3></button></Link>
        

    </div>
  )
}
