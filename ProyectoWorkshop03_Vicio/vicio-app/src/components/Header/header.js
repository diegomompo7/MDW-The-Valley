import './_header.scss'

const Header = (props) => {
    return <header className="header">
    <img src={props.img}></img>
    <button type="submit" className="header__button"> {props.nameButton}</button>
</header>
}

export default Header