import React, { useState } from 'react'
import lista from '../assets/styles/PlayList.module.css'
import { AppContext } from './ContextApp';
import { useContext } from 'react';

export const Playlist= ({numero,nombre,duracion}) => {
  const { playPause, setPlayPause} = useContext(AppContext);
  
  return (
    <div className={lista.playlistSection}>
        <h3>Tu lista de reproducción</h3>
        <div className={lista.playlistSong}>
    <span className={lista.songNumber}>{numero}</span>
    <span  className={lista.songTitle}>{nombre} {playPause ? "Reproduciendo..." : "Pausado"}</span>
    <span className={lista.songDuration}>{duracion}</span>
  </div>

  </div>
    
  )
}
