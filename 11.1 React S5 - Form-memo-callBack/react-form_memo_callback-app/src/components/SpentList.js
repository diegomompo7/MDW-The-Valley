import React from "react"
import SpentItemsMemo from "./SpentItems";

const SpentList = React.memo(() => {

    const [spentList, setSpentList] = React.useState([
        { name: "Gasolina", ammount: 200, id: 1 },
        { name: "Netflix", ammount: 15, id: 2 },
        { name: "Móvil", ammount: 30, id: 3 },
    ]);

    const [newSpent, setNewSpent] = React.useState({
        name: "",
        ammount: 0
    });

    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        const sum = spentList.reduce((acum, spent) => acum + spent.ammount, 0)
        setTotal(sum)
    }, [spentList])

    const addNewSpent = (event) => {
        event.preventDefault()
        console.log("Bloqueado el comportamiento por defecto del formulario");

        const newSpendToAdd = {
            ...newSpent,
            id: spentList[spentList.length-1].id + 1
        };

        setSpentList([...spentList, newSpendToAdd])

        setNewSpent({
            name: "",
            ammount: 0
        })
    }

    const deleteSpent = React.useCallback((spent) => {
        const newSpentList = spentList.filter((item) => item.id !== spent.id)
        setSpentList(newSpentList);
    }, [spentList]);

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

                <button type="submit">Añadir gasto</button>
            </form>

        </div>
    )
})

export default SpentList