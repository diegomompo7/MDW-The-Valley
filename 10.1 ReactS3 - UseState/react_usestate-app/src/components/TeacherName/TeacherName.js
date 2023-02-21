import "./TeacherName.css";
import React from "react";

const TeacherName = (props) => {
  console.log("PINTAMOS COMPONENTE TeacherName");

  // Manera menos cómoda de usar useState
  // const myState = React.useState("Edu");
  // myState[0] en la primera posición tenemos el estado
  // myState[1] en la segunda posición tenemos una función para modificarlo

  // Manera cómoda con destructuring
  const [name, setName] = React.useState("Eduardo");

  const changeName = () => {
    setName("Francisco");
  }

  return (
    <div className="teacher-name">
      <p>Hola {name}!</p>
      <button onClick={changeName}>Cambiar nombre!</button>
    </div>
  );
}

export default TeacherName;