//IMPORT LIBRARIES AND COMPONENTS
import React from "react"
import './ContactsItem.scss'



//DEFINE A REACT FUNCTIONAL COMPONENT CALL CONTACTSLIST WITH REACT.MEMO

const ContactsItem = React.memo((props) => {

    return (
        <div className="contacts-item">
             <img className="contact-item__img" src={props.contact.imageUrl} alt={"Imagen de " + props.contact.name}></img>
            <div className="contact-item__info">
                <p className="contact-item__name">{props.contact.name}</p>
                <p className="contact-item__surname">{props.contact.surname}</p>
                <p className="contact-item__phone">{props.contact.phone}</p>
                <button className="contact-item__delete-button" onClick={() => props.deleteItem()}>ELIMINAR</button>
            </div>
        </div>
    )


})

export default ContactsItem