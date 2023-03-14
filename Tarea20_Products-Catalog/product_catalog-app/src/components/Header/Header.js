import { NavLink, useNavigate } from "react-router-dom";
import './Header.css'
const Header = () => {
  // Navegación
  const navigate = useNavigate();

  return (
    <nav className='navigation'>
      <button className="navigation__link" onClick={() => navigate(-1)}>Atrás</button>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/my-account">My Account</NavLink>
      <button className="navigation__link" onClick={() => navigate(1)}>Adelante</button>
    </nav>
  );
}

export default Header