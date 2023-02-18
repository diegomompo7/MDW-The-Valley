import './footer.scss'

import ItemsFooter from './Items/itemsFooter'

const Footer = () => {
    return <footer className="footer">
        <ul className="footer__list">
            <ItemsFooter name="COLLETTION"></ItemsFooter>
            <ItemsFooter name="VICIO CITIES"></ItemsFooter>
            <ItemsFooter name="ABOUT US"></ItemsFooter>
            <ItemsFooter name="CURRA AQUÍ"></ItemsFooter>
        </ul>
        <ul className="footer__legal">
            <ItemsFooter name="PRESSKIT"></ItemsFooter>
            <ItemsFooter name="POLÍTICAS"></ItemsFooter>
            <ItemsFooter name="AVISO LEGAL"></ItemsFooter>
        </ul>
        </footer>

}
export default Footer
