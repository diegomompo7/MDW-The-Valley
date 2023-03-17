import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
    // Navegación
    const navigate = useNavigate();

    return (
        <nav className='navigation'>
            <button className="navigation__link" onClick={() => navigate(-1)}>Atrás</button>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/noticias">Noticias</NavLink>
            <button className="navigation__link" onClick={() => navigate(1)}>Adelante</button>
        </nav>
    );
}

export default Header