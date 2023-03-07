import React from "react"

const mapResults = (resultsList) => {
    const total = resultsList.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    const average = total / resultsList.length;

    return resultsList.map((elem, index) => {
        return <p key={index}>{elem} {elem>=average ? '🟢' : '🔴'}</p>
    })
}

const Results = () => {
    const [render, setRender] = React.useState(false);
    const [resultsNumber] = React.useState([2, 6, 5, 8, 1, 3, 10, 2]);
    const memoizedValue = React.useMemo(() => mapResults(resultsNumber), [resultsNumber]);

    return (
        <div>
            {memoizedValue}
            <p>Valor actual: {render.toString()}</p>
            <button onClick={() => setRender(!render)}>Cambiar estado</button>
        </div>
    )
}

export default Results