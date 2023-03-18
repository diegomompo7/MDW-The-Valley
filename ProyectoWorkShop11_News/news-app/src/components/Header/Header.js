import {useNavigate} from "react-router-dom";
import { Button,  Link } from "@chakra-ui/react";
import './Header.css'
const Header = () => {
    // Navegación
    const navigate = useNavigate();

    return (
        <nav className='navigation'>
            <Button className="navigation__link" onClick={() => navigate(-1)} ml="20px" mt="10px">Atrás</Button>
            <nav className="navigation__items">
            <Link to="/" mt="100px" mr="20px">Home</Link>
            <Link to="/noticias" mr="20px">Noticias</Link>
            <Link to="/noticias/sport" mr="20px">Deportes</Link>
            <Link to="/noticias/tech" mr="20px">Economía</Link>
            <Link to="/noticias/economics">Tecnología</Link>
            </nav>
            <Button className="navigation__link" onClick={() => navigate(1) } mr="20px" mt="10px">Adelante</Button>
        </nav>
    );
}

export default Header