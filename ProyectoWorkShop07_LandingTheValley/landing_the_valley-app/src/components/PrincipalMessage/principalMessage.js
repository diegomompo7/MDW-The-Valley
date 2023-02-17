import './principalMessage.css'

const PrincipalMessage = (props) =>{
    return <div className="main">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
}

export default PrincipalMessage