import "./message.css"

const MessageComponent = (props) => {
  return ( <div>
    <p className="text">Hola {props.name}!</p>
  </div>)
}

export default MessageComponent;