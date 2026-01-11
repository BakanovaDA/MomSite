import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../screens/home/Home'
import Achievs from '../screens/achievs/Achievs'
import Pedagogy from '../screens/pedagogy/Pedagogy'
import Methodology from '../screens/methodology/Methodology'
import Social from '../screens/social/Social'
import Creative from '../screens/creative/Creative'

const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route element={<Home />} path='/MomSite/' />
      <Route element={<Achievs />} path='/MomSite/Achievs' />
      <Route element={<Pedagogy />} path='/MomSite/pedagogy' />
      <Route element={<Methodology />} path='/MomSite/methodology' />
      <Route element={<Social />} path='/MomSite/social' />
      <Route element={<Creative />} path='/MomSite/creative' />
      <Route path='*' element={<div> Not found ! </div>} />
    </Routes>
  </BrowserRouter>
}

export default Router