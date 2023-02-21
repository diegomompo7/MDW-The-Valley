
import './App.css';
import React from 'react';

import TeacherName from './components/TeacherName/TeacherName';
import Counter from './components/Counter/Counter';
import ImageSlider from './components/ImageSlider/ImageSlider';
import BankAccount from './components/BankAccount/BankAccount';
import ThunderObservatory from './components/ThunderObservatory/ThunderObservatory';

function App() {
  const imagesOne = [
    "https://picsum.photos/id/1000/400/200",
    "https://picsum.photos/id/1002/400/200",
    "https://picsum.photos/id/1003/400/200",
    "https://picsum.photos/id/1004/400/200",
    "https://picsum.photos/id/1005/400/200",
  ];

  const imagesTwo = [
    "https://picsum.photos/id/1006/400/200",
    "https://picsum.photos/id/1008/400/200",
    "https://picsum.photos/id/1009/400/200",
    "https://picsum.photos/id/1010/400/200",
  ];

  const [thunderList, setThunderList] = React.useState([new Date()])

  const addThunder = () => {
    const newThunderList = [...thunderList, new Date()]
    setThunderList(newThunderList)
  }

  return (
    <div className="app">
      <h2>NOMBRE</h2>
      <TeacherName></TeacherName>
      <h2>CONTADOR</h2>
      <Counter></Counter>
      <h2>IMAGENES</h2>
      <ImageSlider images={imagesOne}></ImageSlider>
      <ImageSlider images={imagesTwo}></ImageSlider>
      <h2>BANK ACCOUNT</h2>
      <BankAccount></BankAccount>
      <h2>LISTA DE RAYOS</h2>
      <ul>
        {thunderList.map(thunder => <li key={thunder.getTime()}>{thunder.toString()}</li>)}
      </ul>
      <h2>OBSERVATORIOS DE RAYOS</h2>
      <ThunderObservatory name="Madrid" addThunder={addThunder}></ThunderObservatory>
      <ThunderObservatory name="Alicante" addThunder={addThunder}></ThunderObservatory>
      <ThunderObservatory name="Benavente" addThunder={addThunder}></ThunderObservatory>
    </div>
  );
}

export default App;
