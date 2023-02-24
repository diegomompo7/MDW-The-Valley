import './Books.scss'

import React from 'react';
import { useDebounce } from 'use-debounce';
import BookTable from './BookTable/BookTable';

const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";

let bookFiltrer = []

const Books = () => {

    const [filter, setFilter] =React.useState([])
    const [bookList, setBookList] = React.useState([]);
    const [filterWithTime] = useDebounce(filter, 2000);

    React.useEffect(() => {

        if(filterWithTime.length <=3){
            console.log("Introduce más de 3 caracteres para buscar")

        }else{

            bookFiltrer = []
            console.log(API_URL)

            fetch(API_URL + filterWithTime).then((response)  => {
                return response.json();
             }).then((data) =>{
                console.log(data.items)
                setBookList(data.items)
            })
        }

    }, [filterWithTime]);


    return (
        <div className='book-list'>
            <p>Buscador de libros:</p>
            <input type="text" value={filter} onChange={(event) => setFilter(event.target.value)}></input>
            
            {(filter.length <=3) ? <p>Introduce más de 3 caracteres para buscar</p> :
                bookList.length > 0 ? <BookTable bookList={bookList}></BookTable> :
                <p>Sin resultados</p>
            }
        </div>

    )
}

export default Books