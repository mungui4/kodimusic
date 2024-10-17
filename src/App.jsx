import { KodiMusic } from './components/KodiMusic'
import { SearchBar } from './components/SearchBar';
import { Playlist } from './components/PlayList';
import { Player } from './components/Player';
import { AppProvider } from './components/ContextApp';
import { SessionOptions } from './components/SessionOptions'
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { HomeContent } from './components/HomeContent';
const login = (  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>);
const signUp = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
</svg>);

function App() {




  return (
    <>
    <AppProvider>
    <BrowserRouter>
      <div className="container">
      <aside className="aside">
        <div className='header'>
        <KodiMusic link="/"/>        
    
        </div>
        
        <div className='containerSession'> 
        <SessionOptions link="/login" text="Iniciar Sesion" icon={login}/>
        <SessionOptions link="/register" text="Registrarse" icon={signUp}/>
      
        </div>
        
        <div className='containerPlayList'>
        <Playlist numero='1' nombre='Gasolina-Daddy-Yankee' duracion='3:20'/>
        </div>
        <div className='bar'>
          <SearchBar/>
        </div>
        <div className='player'>
       <Player/>
        </div>
    
      </aside>
      <main className="main">
    
    <Routes>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/' element={<HomeContent/>}/>
    </Routes>
    
      
      </main>
    </div>
    
      
    </BrowserRouter>
    </AppProvider>
    </>
  )
}

export default App
