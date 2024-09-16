import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { BrowserRouter, Routes, Route }  from 'react-router-dom'
import { Home } from './components/Home'
import { Sobre } from './components/Sobre'
import { Menu } from './components/Menu'
import { Post } from './components/Post'
import { Redirect } from './components/Redirect'
import { NotFound } from './components/NotFound'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sobre' element={<Sobre />}  />
      <Route path='/posts/:id' element={<Post />} />
      <Route path='/posts' element={<Post />} />
      <Route path='/redirect' element={<Redirect />}  />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
