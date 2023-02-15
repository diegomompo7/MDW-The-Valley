import "./Greeting.css";

const Greeting = (props) => {

  return (
      props.variant === "cool" ?
        <p className="greeting cool">Hola <strong>{props.name}!</strong></p> :
        <p className="greeting">Hola {props.name}!</p>
  );
}

export default Greeting;