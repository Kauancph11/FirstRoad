import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import EditarPerfil from './pages/EditarPerfil'
import Avatar from './pages/Avatar'
import Trilha from './pages/Trilha'
import Suporte from './pages/Suporte'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/editar' element={<EditarPerfil />} />
          <Route path='/avatar' element={<Avatar />} />
          <Route path='/trilha' element={<Trilha />} />
          <Route path='/suporte' element={<Suporte />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
