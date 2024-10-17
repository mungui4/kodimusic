import React from 'react'
import { Artista } from './Artista';
import { Podcast } from './Podcast';
import { Album } from './Album';
const login = (  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>);
const signUp = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
</svg>);

export const HomeContent = () => {
  return (
    <>
   
      <h2>Lo más escuchado</h2>
        <div className='masEscuchados'>
        <Artista pic="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7IPVVjTxsFc422-Wy4rPSCRQto_ZXBVw9mb3xKBbnPU79LxgFEwFhZwqgOuGrO466IwjZsCs7kp3l2zojE0wlqpZBlXzcKWpRQdBXqA" name="Daddy Yankee" view="50124544"/><Artista pic="https://cdn.britannica.com/83/211883-050-46933F1A/Rihanna-Barbadian-singer-Robyn-Fenty.jpg" name="Rihana" view="4544004"/>
          <Artista pic="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRJw-mSDzyYFXeB8EVUN_GClqh1ErSkkvmS30D_BViMqmG6nj8v" name="Bob Marley" view="122244"/> <Artista pic="https://i.ytimg.com/vi/Ei8UnOPJX7w/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCaAysuhut8SQjr3e5E6LHFqUv1Xg" name="Adele" view="200144"/>

        </div>
        <h2>Álbumes</h2>
        <div className='masEscuchados'>
 
        <Album pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbr-oLUPRLZYzP_lyKm7Uky6q8zMr_92oKdQ&s" album="Midnights " singer="Taylor Swift" genre="Pop"/> 
        <Album pic="https://external-preview.redd.it/pitchfork-album-review-morgan-wallen-one-thing-at-a-time-4-1-v0-KWEp8DcJc34FU8kHn6e67uc2vE0QRdkZ2EalaUd4kOc.jpg?width=640&crop=smart&auto=webp&s=5b277853f52f1bbf665e3ef7c6c9a49c1285edea" album="One Thing At A Time " singer="Morgan Wallen" genre="Country"/> 
        <Album pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7HFLrsev0u0JHya0RiOcdwn8-qMfobTWhA&s" album="HEROES & VILLAINS" singer="Metro Boomin" genre="Hip-hop/Rap"/> 
        <Album pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHMKdYQTG3r9YF1Vu1U49QyWGFBXkRKOeAQ&s" album="Starboy" singer="The Weeknd" genre="Pop"/> 
         

        </div>

        <h2>Podcast</h2>
        <div className='masEscuchados'>
          <Podcast pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_9pLM0uiltV2u2Rseomie7MtgbZ0KhOb92A&s" autor="José & Eduardo" name="La Corneta"/>
          <Podcast pic="https://tritonrankers.com/api/podcast-image/45258" autor="Don Cheto" name="Don cheto al aire"/>
          <Podcast pic="https://tritonrankers.com/api/podcast-image/45254" autor="Roberto Mtz" name="Creativo"/>
          <Podcast pic="https://tritonrankers.com/api/podcast-image/45238" autor="Caracol" name="Última hora"/>
         
          
          

        </div>

   

    </>

  )
}
