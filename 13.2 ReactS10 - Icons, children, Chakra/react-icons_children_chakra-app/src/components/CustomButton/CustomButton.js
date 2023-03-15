import "./CustomButton.css";

const CustomButton = ({ action, color, children, size }) => {

  return (
    <button
      onClick={action}
      style={{ color: color }}
      className={size === "BIG" ? "custom-button custom-button--big" : "custom-button"}
    >
      {children}
    </button>
  );
}

export default CustomButton;