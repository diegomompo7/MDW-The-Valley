import "./button.css"

const ButtonComponent = (props) => {
  return ( 
    <button onClick={props.handleClick} class="button">
      {props.text}
    </button>
  )
}

export default ButtonComponent;