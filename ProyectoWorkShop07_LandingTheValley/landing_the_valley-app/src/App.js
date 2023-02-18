import './App.css';
import Header from './components/Header/header';
import PrincipalMessage from './components/PrincipalMessage/principalMessage'
import Footer from './components/Footer/footer';

const newDate = new Date();
const year = newDate.getFullYear();


function App() {
  return (
    <div className="app">
      <Header></Header>
      <PrincipalMessage title="Ejercicio React" description="
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Leo urna molestie at"></PrincipalMessage>
      <Footer year={year}></Footer>   
    </div>
  );
}


export default App;
