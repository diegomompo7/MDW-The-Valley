import './App.css';
import Header from './components/Header/header';
import PrincipalMessage from './components/PrincipalMessage/principalMessage'


function App() {
  return (
    <div className="app">
      <Header></Header>
      <PrincipalMessage title="Ejercicio React" description="hola"></PrincipalMessage>   
    </div>
  );
}

/*<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header>*/

export default App;
