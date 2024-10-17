import React, { useContext } from 'react'
import logoKodi  from '../assets/images/Kodi-icon.webp'
import kodi from '../assets/styles/Kodimusic.module.css'
import { Link } from 'react-router-dom'





export const KodiMusic = ({link}) => {
  return (
    <div className={kodi.container}>

        <Link className={kodi.link} to={link}><img className={kodi.logoKodi} src={logoKodi} alt="Logo kodimusic" />
        <h3>KodiMusic</h3></Link>

    </div>
  )
}
