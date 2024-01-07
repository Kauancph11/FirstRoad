import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import EditarPerfil from './pages/EditarPerfil'
import Avatar from './pages/Avatar'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/editar' element={<EditarPerfil />} />
          <Route path='/avatar' element={<Avatar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
