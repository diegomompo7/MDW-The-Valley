import './principalMessage.css'

const PrincipalMessage = (props) =>{
    return <div className="main">
        <p className="main__title">{props.title}</p>
        <p className="main__description">{props.description}</p>
    </div>
}

export default PrincipalMessage