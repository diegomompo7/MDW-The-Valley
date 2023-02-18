import './footer.css'

const Footer = (props) => {
    return <div className="footer">
        <p className="footer__title">Copyright {props.year}</p>
    </div>
}

export default Footer