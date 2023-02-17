import "./header.css";
import Link from "./Links/links"
import Logo from "./Logo/logo"

const Header = () =>{
    return <div className="header">
        <div className="link">
            <Link name="Facebook"></Link>
            <Link name="Instagram"></Link>
            <Link name="Twitter"></Link>
        </div>
        <Logo></Logo>
        <div className="link">
            <Link name="Docu React"></Link>
            <Link name="Button"></Link>
        </div>
    </div>
}
export default Header