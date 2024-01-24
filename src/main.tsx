import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Colaborador/Home/index'
import EditarPerfil from './pages/Colaborador/EditarPerfil'
import Avatar from './pages/Colaborador/Avatar'
import Trilha from './pages/Colaborador/Trilha'
import Suporte from './pages/Colaborador/Suporte'
import Certificados from './pages/Colaborador/Certificados'
import VisualizarCertificado from './pages/Colaborador/VisualizarCertificado'
import PgModulos from './pages/Colaborador/PgModulos'
import PesquisaSatisfacao from './pages/Colaborador/PesquisaSatisfacao'
import Login from './pages/Colaborador/Login'
import { AuthProvider } from './Context/AuthProvider'
import EditarPerfilGestor from './pages/Gestor/EditarPerfil'
import GestaoCadastro from './pages/Gestor/GestaoCadastro/GestaoCadastro'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/editar' element={<EditarPerfil />} />
          <Route path='/avatar' element={<Avatar />} />
          <Route path='/trilha' element={<Trilha />} />
          <Route path='/suporte' element={<Suporte />} />
          <Route path='/certificados' element={<Certificados />} />
          <Route path='/visualizarCertificado' element={<VisualizarCertificado />} />
          <Route path='/pgModulos' element={<PgModulos />} />
          <Route path='/pesquisaSatisfacao' element={<PesquisaSatisfacao />} />
          <Route path='/editarGestor' element={<EditarPerfilGestor />} />
          <Route path='/gestaoCadastro' element={<GestaoCadastro />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
