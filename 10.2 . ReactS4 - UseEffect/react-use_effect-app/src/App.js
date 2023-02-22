import './App.css';
import React from 'react'
import Calculator from './components/Calculator';
import UserList from './components/UserList/UserList';

function App() {
  const [visible, setVisible] = React.useState(true)

  return (
    <div className="app">
      <h2>EJEMPLO DE UNA CALCULADORA</h2>
      <p>Pulsa el botón para <button onClick={() => setVisible(!visible)}>{visible ? "Ocultar" : "Mostrar"} calculadora</button></p>
      { visible &&<Calculator></Calculator>}
      <h2>EJEMPLO DE LISTADO DE USUARIOS</h2>
      <UserList></UserList>
    </div>
  );
}

export default App;
