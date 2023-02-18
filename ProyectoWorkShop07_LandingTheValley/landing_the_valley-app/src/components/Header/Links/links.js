import "./links.css";

const Link = (props) =>{
    return <div className="link">
        <a className={props.type + " link__nav"} href={props.href}>{props.name}</a>
    </div>
}
export default Link