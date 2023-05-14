import {Suspense} from "react";

import {Route, Routes} from "react-router-dom";

import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Layout from "./pages/Layout/Layout";

import './style.scss'
import Home from "./pages/Home/Home";


function App() {
  return (
      <Suspense fallback={'...loading'}>

          <Routes>
              <Route path={'/'} element={<Layout/>}>
                  <Route path={''} element={<Home/>}/>
              </Route>
              <Route path={'*'} element={<NotFound/>}/>
              <Route path={'/register'} element={<Register/>}/>
              <Route path={'/login'} element={<Login/>}/>
          </Routes>

      </Suspense>
  );
}

export default App;
