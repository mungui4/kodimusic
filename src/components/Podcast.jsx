import React from 'react'
import pod from'../assets/styles/Podcast.module.css'

export const Podcast = ({pic, autor, name}) => {
  return (
     <div className={pod.container}>
    <img className={pod.profile} src={pic} alt="" />
    <h3 className={pod.autor}>{autor}</h3>
    <h3 className={pod.name}>"{name}"</h3>
    
    
        </div>
  )
}
