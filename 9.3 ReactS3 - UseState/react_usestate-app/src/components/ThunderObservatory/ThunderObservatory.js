import './ThunderObservatory.css'

const ThunderObservatory = ({name, addThunder}) => {
    return(
        <button onClick={addThunder}>Notificar rayo en {name}</button>
    )
}

export default ThunderObservatory