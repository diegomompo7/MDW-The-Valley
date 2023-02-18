import "./header.css";
import Link from "./Links/links"
import Logo from "./Logo/logo"

const firstLink = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/TheValleyDBS/",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/thevalleydbs/?hl=es",
    },
    {
        name: "Twitter",
        href: "https://twitter.com/TheValleyDBS?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    }
]
const secondLink = [
    {
        name: "Docu React",
        href: "",
    },
    {
        type: "btn",
        name: "Ir a The Valle",
        href: "",
    }
]

const Header = () =>{

    return <div className="header">
        <div className="link">
            {firstLink.map(element => 
                <Link name={element.name} href={element.href}></Link>)}
        </div>
        <Logo></Logo>
        <div className="link">
            {secondLink.map(element => 
                <Link type = {element.type} name={element.name} href={element.href}></Link>)}
        </div>
    </div>
}
export default Header