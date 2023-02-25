import './Button.scss'

const Button = ({pPage, nPage, setPag, numberPage}) =>{

    return (
        <div className="page">
            {(pPage === undefined) ?   
            <button  className="page__button page__button--none">ANTERIOR</button> : 
            <button onClick={()=> setPag(numberPage - 1)} className="page__button">ANTERIOR</button>}

            <p className="page__number">{numberPage}</p>

            {(nPage === undefined) ?   
            <button  className="page__button page__button--none">SIGUIENTE</button> : 
            <button onClick={()=> setPag(numberPage + 1)} className="page__button">SIGUIENTE</button>}
        </div>
    )
}
export default Button