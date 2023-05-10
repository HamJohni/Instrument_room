import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import NotFound from "./pages/NotFound/NotFound";
import './style.scss'
import Register from "./pages/Register/Register";


function App() {
  return (
      <Suspense fallback={'...loading'}>
          <Routes>
              <Route path={'*'} element={<NotFound/>}/>
              <Route path={'/register'} element={<Register/>}/>
          </Routes>
      </Suspense>
  );
}

export default App;
