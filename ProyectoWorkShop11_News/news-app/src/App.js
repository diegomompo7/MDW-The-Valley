import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <BrowserRouter>

        <div className='link'>
          <Header></Header>
        </div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          {/*<Route path='/noticias' element={<React.Suspense fallback={<p>Cargando...</p>}><NewsHome></NewsHome></React.Suspense>}></Route>*/}
          {/*<Route path='/faqs/:topic' element={<React.Suspense fallback={<p>Cargando...</p>}><NewsCategory></NewsCategory></React.Suspense>}></Route>*/}
          {/*<Route path='*' element={<React.Suspense fallback={<p>Cargando...</p>}><NotFound></NotFound></React.Suspense>}></Route>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
