import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import Page2 from '../screens/page2/Page2'
import Page3 from '../screens/page3/Page3'

const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route element={<Home />} path='/MomSite/' />
      <Route element={<Page2 />} path='/MomSite/page2' />
      <Route element={<Page3 />} path='/MomSite/page3' />
      <Route path='*' element={<div> Not found ! </div>} />
    </Routes>
  </BrowserRouter>
}

export default Router