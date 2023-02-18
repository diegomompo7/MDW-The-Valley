import './App.scss';
import logo from './assets/logo.svg'

import Header from './components/Header/header';
import Title from './components/Title/title';
import Main from './components/Main/main'
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header img={logo} nameButton="¡PIDE YA!"></Header>
      <Title title="LOS CLIENTES HABLAN, QUIEREN VICIO."></Title>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
