import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import NotFound from "./pages/NotFound/NotFound";
import './style.scss'
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";


function App() {
  return (
      <Suspense fallback={'...loading'}>
          <Routes>
              <Route path={'*'} element={<NotFound/>}/>
              <Route path={'/register'} element={<Register/>}/>
              <Route path={'/login'} element={<Login/>}/>
          </Routes>
      </Suspense>
  );
}

export default App;
