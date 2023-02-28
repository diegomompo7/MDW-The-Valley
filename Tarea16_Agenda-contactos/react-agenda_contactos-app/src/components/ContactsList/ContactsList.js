//IMPORT LIBRARIES AND COMPONENTS
import React from "react"
import ContactsItem from "../ContactsItem/ContactsItem"
import './ContactsList.scss'
import { useDebounce } from 'use-debounce';



//DEFINE A REACT FUNCTIONAL COMPONENT CALL CONTACTSLIST WITH REACT.MEMO

const ContactsList = React.memo(() => {

    //DEFINE CONST API AND USE STATE
    const API_URL = "http://localhost:4000/contacts?q="
    const [contactsList, setContactsList] = React.useState([])
    const [newContact, setNewContact] = React.useState({name: "", surname: "", phone: 0, imgUrl: ""})
    const [totalContacts, setTotalContacts] = React.useState(0)
    const [search, setSearch] = React.useState("")
    const [searchWithTime] = useDebounce(search, 2000)

    //USE EFFECT TO GET ALL CONTACTS
    React.useEffect(() => {
        getAllContactsFromApi()
    },[])

    // USE EFFECT TO SEARCH A CONTACT
    React.useEffect(() => {
        console.log(API_URL + searchWithTime)
        fetch(`${API_URL}${searchWithTime}`)
        .then(response => response.json())
        .then((data => {
            setContactsList(data)
            setTotalContacts(data.length)
        }))
    }, [searchWithTime])
    
    //ARROW FUNCTON TO GET ALL THE CONTACTS

    const getAllContactsFromApi = () => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => 
            {
                setContactsList(data)
                setTotalContacts(data.length)
            })

    }


    // ARROW FUNCTION TO ADD NEW CONTACT
    const addNewContact = (event) => {
        event.preventDefault()
        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(newContact),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(reponse => reponse.json())
        .then(data => {
            getAllContactsFromApi()
            setNewContact({
                name: "", surname: "", phone: 0, imgUrl: ""
            })
        })
    }

    // ARROW FUNCTION TO DELETE CONTACTS

    const deleteContact = React.useCallback((contact) => {
        fetch(`${API_URL}/${contact.id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => getAllContactsFromApi())
        
    }, [])



    // PRINT WITH JSX

    return (
        <div className="contacts-list">
            {/*PRINT CONTACTS LIST*/}
            <h2>Mi agenda ({totalContacts})</h2>

            {contactsList.map((contact) => 
            <ContactsItem
                key={contact.id}
                contact={contact}
                deleteItem={() => deleteContact(contact)}>
            </ContactsItem>)}

            {/*SEARCH A CONTACT*/}
            <h2>Buscar</h2>

            <label>Buscar: </label>
            <input type="text"  value={search} onChange = {(event) => setSearch(event.target.value)}></input>

            <span>{search}</span>
            <span>{searchWithTime}</span>
            {/*ADD A NEW CONTACT*/}
            <h2>Añadir nuevo contacto</h2>

            <form onSubmit={(event) => addNewContact(event)}>
                <p>
                    <label>Nombre: </label>
                    <input type="text" name="name" id="name" value={newContact.name} onChange={(event) => setNewContact({
                        ...newContact,
                        name: event.target.value
                    })}></input>
                </p>
                <p>
                    <label>Apellidos: </label>
                    <input type="text" name="surname" id="surname" value={newContact.surname} onChange={(event) => setNewContact({
                        ...newContact,
                        surname: event.target.value
                    })}></input>
                </p>
                <p>
                    <label>Teléfono: </label>
                    <input type="number" name="phone" id="phone" value={newContact.phone} onChange={(event) => setNewContact({
                        ...newContact,
                        phone: event.target.value
                    })}></input>
                </p>
                <p>
                    <label>URL de la imagen: </label>
                    <input type="text" name="imgUrl" id="imgUrl" value={newContact.imgUrl} onChange={(event) => setNewContact({
                        ...newContact,
                        imgUrl: event.target.value
                    })}></input>
                </p>
                <button type="submit">Añadir Contacto</button>
            </form>

        </div>
    )


})

export default ContactsList