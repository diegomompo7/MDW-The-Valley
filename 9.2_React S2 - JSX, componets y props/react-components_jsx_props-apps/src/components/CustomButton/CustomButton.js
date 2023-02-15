import "./CustomButton.css";

  const CustomButton = (props) => {
    return (
        <button onClick={props.handleClick} className="custom-button">
            {props.text}
        </button>
    );
}

export default CustomButton;