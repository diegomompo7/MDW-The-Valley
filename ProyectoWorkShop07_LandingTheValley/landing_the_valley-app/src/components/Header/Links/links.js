import "./links.css";

const Link = (props) =>{
    return <div className="link">
        <a className="link__nav">{props.name}</a>
    </div>
}
export default Link