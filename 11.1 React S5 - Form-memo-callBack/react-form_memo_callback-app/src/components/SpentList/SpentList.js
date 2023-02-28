//IMPORT THE REACT LIBRARY AND SPENTITEMS COMPONENT
import React from "react"
import SpentItemsMemo from "../SpentItems/SpentItems";
import './SpentList.css'

//DEFINE A REACT FUNCTIONAL COMPONENT CALL SPENDLIST WITH REACT.MEMO

const SpentList = React.memo(() => {

    // Defining the URL of the API and setting the initial states of spentList, newSpent, and total

    const API_URL = "http://localhost:4000/spents"
    const [spentList, setSpentList] = React.useState([]);
    const [newSpent, setNewSpent] = React.useState({name: "",nammount: 0});
    const [total, setTotal] = React.useState(0);

    // Setting up an effect to update the total spent amount whenever spentList changes

    React.useEffect(() => {
        const sum = spentList.reduce((acum, spent) => acum + spent.ammount, 0)
        setTotal(sum)
    }, [spentList]) 

    // Setting up an effect to get all the spents from the API when the component mounts

    React.useEffect(() => {
        getAllSpentsFromApi();
    }, [])

    // Function to get all the spents from the API and update the spentList state

    const getAllSpentsFromApi = () => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setSpentList(data))
    }

    // Function to add a new spent to the spentList state

    const addNewSpent = (event) => {
        event.preventDefault()
        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(newSpent),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            getAllSpentsFromApi()
            setNewSpent({
                name: "",
                ammount: 0,
                imageUrl: ""
            })
        })

    }

    // Defining a callback function to delete a spent from the spentList state

    const deleteSpent = React.useCallback((spent) => {
        fetch(`${API_URL}/${spent.id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => getAllSpentsFromApi())
        
    }, []);

    // Rendering the SpentItemsMemo component for each spent in the spentList state, and passing it relevant props
    return (
        <div className="spent-list">
            <h2>Listado de gastos estimados:</h2>


            {spentList.map((spent) => 
            <SpentItemsMemo 
                total={total} 
                key={spent.id} 
                spent={spent}
                deleteItem={() => deleteSpent(spent)}>
            </SpentItemsMemo>)}
            <p>TOTAL : { total } €</p>

            <h2>Añadir nuevo gasto</h2>
            { /*Creating a form to add a new spent and handling its submission*/ }

            <form onSubmit={(event) => addNewSpent(event)}>
                <p>
                    <label>Nombre del gasto</label>
                    <input type="text" name="name" id="name" value={newSpent.name} onChange={(event) => setNewSpent({
                        ...newSpent,
                        name: event.target.value
                    })}></input>
                </p>
                <p>
                    <label>Importe estimado del gasto</label>
                    <input type="number" name="ammount" id="ammount" value={newSpent.ammount} onChange={(event) => setNewSpent({
                        ...newSpent,
                        ammount: event.target.value ? parseInt(event.target.value) : ''
                    })}></input>
                </p>
                <p>
                    <label>URL de la imagen</label>
                    <input type="text" name="imageUrl" id="imageUrl" value={newSpent.imageUrl} onChange={(event) => setNewSpent({
                        ...newSpent,
                        imageUrl: event.target.value
                    })}></input>
                </p>

                <button type="submit">Añadir gasto</button>
            </form>

        </div>
    )
})

export default SpentList