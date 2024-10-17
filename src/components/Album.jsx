import React from 'react'
import alb from'../assets/styles/Album.module.css'

export const Album = ({pic, album, singer, genre}) => {
  return (
    <div className={alb.container}>
<img className={alb.profile} src={pic} alt="" />
<h3 className={alb.album}>{album}</h3>
<h3 className={alb.singer}>{singer}</h3>
<h3 className={alb.genre}>{genre}</h3>


    </div>
  )
}
