import React from "react";
import Counter from "../Counter/Counter";
import {LongTextLazy} from "../../App"
import { LoginContext } from "../../App";
import { ThemeContext } from "../../App";

// Listado de componentes lazy
const PokemonInfoLazy = React.lazy(() => import("../PokemonInfo/PokemonInfo"));
const StarwarsInfoLazy = React.lazy(() => import("../StarwarsInfo/StarwarsInfo"));



const ApisInfoGroup = () => {
  const login = React.useContext(LoginContext);
  const theme = React.useContext(ThemeContext);

  // Estados
  const [showComponents, setShowComponents] = React.useState(false);

  // Referencias
  const myRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          setShowComponents(true);
        }
      });
    });

    observer.observe(myRef.current);
  }, []);


  return <>
    <h2>Componente lazy:</h2>
    <React.Suspense fallback={<div>Cargando...</div>}>

      {(!login.currentUsername) ? <p style={{ background: theme.background, color: theme.fontColor }}>No tiene permisos</p> : 
      <LongTextLazy></LongTextLazy>}
    </React.Suspense>


    <h2>Contador 1:</h2>
    {(!login.currentUsername) ? <p style={{ background: theme.background, color: theme.fontColor }}>No tiene permisos</p> : 
    <Counter></Counter>}

    <h2>Peticiones a la API</h2>
    <div ref={myRef} style={{ 'borderTop': '1px solid red' }}></div>
    {
      showComponents ?
        <React.Suspense fallback={<p>Cargando...</p>}>
          {(!login.currentUsername) ? <p style={{ background: theme.background, color: theme.fontColor }}>No tiene permisos</p> : 
          <PokemonInfoLazy></PokemonInfoLazy>}
          {(!login.currentUsername) ? <p style={{ background: theme.background, color: theme.fontColor }}>No tiene permisos</p> : 
          <StarwarsInfoLazy></StarwarsInfoLazy>}
        </React.Suspense> :
        <p>Componentes ocultos</p>
    }
  </>
}

export default ApisInfoGroup;