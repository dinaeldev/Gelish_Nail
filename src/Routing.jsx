import { BrowserRouter, Routes, Route } from "react-router-dom";
//Layout pages
import Public from './Layout/Public';
import Home from './pages/Home';
import Search from './pages/Search';
import Design from './pages/Design';


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Public />} >
              <Route index element={<Home />} />
              <Route path='search' element={<Search />} />
              <Route path='design' element={<Design />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
