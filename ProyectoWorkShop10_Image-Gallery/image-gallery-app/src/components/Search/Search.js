import React from "react"

const Search = (props) => {

    const searchRef = React.useRef()

    const onSubmit = (event, text) => {
        event.preventDefault()
        props.searchImage(text)
    }


    return (
        <div>
            <form onSubmit={(event) => onSubmit(event, searchRef.current.value)}>
            <input ref={searchRef} type="text"></input>
            <button type="submit">Buscar</button>
            </form>
            <button>Cambiar tema</button>
        </div>
    )
}

export default Search