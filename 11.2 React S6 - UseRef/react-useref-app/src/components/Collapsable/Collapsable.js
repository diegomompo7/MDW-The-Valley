import './Collapsable.scss'
import React from 'react'

const Collapsable = (props) => {


    //REFERENCIAS
    const collapsableRef = React.useRef()

    //FUNCIONES AUXILIARES
    // Funciones auxiliares
    const toggleCollapble = () => {
        collapsableRef.current.classList.toggle("collapsable--opened");
    }

    return(
        <div className="collapsable" ref={collapsableRef}>
            <div className="collapsable__title" onClick={toggleCollapble}>{props.title}</div>
            <div className="collapsable__indicator"> {'>'}</div>
            <div className="collapsable__body">{props.body}</div>
        </div>
    )
}

export default Collapsable