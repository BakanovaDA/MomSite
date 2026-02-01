import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../screens/home/Home'
import Achievs from '../screens/achievs/Achievs'
import Pedagogy from '../screens/pedagogy/Pedagogy'
import Methodology from '../screens/methodology/Methodology'
import Social from '../screens/social/Social'
import Creative from '../screens/creative/Creative'

const Router = () => {
  return <BrowserRouter basename="/">
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Achievs />} path='/achievs' />
      <Route element={<Pedagogy />} path='/pedagogy' />
      <Route element={<Methodology />} path='/methodology' />
      <Route element={<Social />} path='/social' />
      <Route element={<Creative />} path='/creative' />
      <Route path='*' element={<div> Not found ! </div>} />
    </Routes>
  </BrowserRouter>
}

export default Router