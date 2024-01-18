import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import EditarPerfil from './pages/EditarPerfil'
import Avatar from './pages/Avatar'
import Trilha from './pages/Trilha'
import Suporte from './pages/Suporte'
import Certificados from './pages/Certificados'
import VisualizarCertificado from './pages/VisualizarCertificado'
import PgModulos from './pages/PgModulos'
import PesquisaSatisfacao from './pages/PesquisaSatisfacao'
import Login from './pages/Login'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/editar' element={<EditarPerfil />} />
          <Route path='/avatar' element={<Avatar />} />
          <Route path='/trilha' element={<Trilha />} />
          <Route path='/suporte' element={<Suporte />} />
          <Route path='/certificados' element={<Certificados />} />
          <Route path='/visualizarCertificado' element={<VisualizarCertificado />} />
          <Route path='/pgModulos' element={<PgModulos />} />
          <Route path='/pesquisaSatisfacao' element={<PesquisaSatisfacao />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
