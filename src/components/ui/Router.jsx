import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import Page2 from '../screens/page2/Page2'
import Page3 from '../screens/page3/Page3'
import Page4 from '../screens/page4/Page4'
import Page5 from '../screens/page5/Page5'

const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route element={<Home />} path='/MomSite/' />
      <Route element={<Page2 />} path='/MomSite/page2' />
      <Route element={<Page3 />} path='/MomSite/page3' />
      <Route element={<Page4 />} path='/MomSite/page4' />
      <Route element={<Page5 />} path='/MomSite/page5' />
      <Route path='*' element={<div> Not found ! </div>} />
    </Routes>
  </BrowserRouter>
}

export default Router