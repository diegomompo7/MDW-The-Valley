import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Header from './components/Header/Header';
const About = React.lazy(() => import("./components/About"));
const Faqs = React.lazy(() => import("./components/Faqs"))
const NotFound = React.lazy(() => import("./components/NotFound"))
const MyAccount = React.lazy(() => import("./components/MyAccount"));
const Login = React.lazy(() => import("./components/Login"));

export const AuthContext = React.createContext({ user: null });

function App() {
  const [authInfo, setAuthInfo] = React.useState({ user: null });

  return (
    <AuthContext.Provider value={authInfo}>
      <div className="app">
        <BrowserRouter>

          <div className='links'>
            <Header></Header>
          </div>

          <p>Usuario: {authInfo && authInfo.user ? "Logado" : "No logado"}</p>

          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<React.Suspense fallback={<p>Cargando...</p>}><About></About></React.Suspense>}></Route>
            <Route path='/faqs/:id' element={<React.Suspense fallback={<p>Cargando...</p>}><Faqs></Faqs></React.Suspense>}></Route>
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