const Button = ({pPage, nPage, setPag}) =>{
    return (
        <div className="page">
            <button onClick={()=> setPag(pPage)}>Anterior</button>
            <button onClick={()=>setPag(nPage)}>Siguiente</button>
        </div>
    )
}
export default Button