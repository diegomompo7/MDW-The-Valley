import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Header from './components/Header/Header';
const Products = React.lazy(() => import("./components/Products/Products"));
const ProductDetail = React.lazy(() => import("./components/ProductDetail/ProductDetail"));
const NotFound = React.lazy(() => import("./components/NotFound"))
const MyAccount = React.lazy(() => import("./components/MyAccount"));
const Login = React.lazy(() => import("./components/Login"));

export const AuthContext = React.createContext({ user: null , favorite: null});

function App() {
  const [authInfo, setAuthInfo] = React.useState({ user: null, favorite: null });

  return (
    <AuthContext.Provider value={authInfo}>
      <div className="app">
        <BrowserRouter>

          <div className='links'>
            <Header></Header>
          </div>

          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/products' element={<React.Suspense fallback={<p>Cargando...</p>}><Products></Products></React.Suspense>}></Route>
            <Route path='/product-detail/:id' element={<React.Suspense fallback={<p>Cargando...</p>}><ProductDetail login={setAuthInfo}></ProductDetail></React.Suspense>}></Route>
            <Route path='*' element={<React.Suspense fallback={<p>Cargando...</p>}><NotFound></NotFound></React.Suspense>}></Route>
            <Route path='/login' element={<React.Suspense fallback={<p>Cargando...</p>}><Login login={setAuthInfo}></Login></React.Suspense>}></Route>
            <Route path='/my-account' element={<React.Suspense fallback={<p>Cargando...</p>}><MyAccount></MyAccount></React.Suspense>}></Route>
          </Routes>

        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;