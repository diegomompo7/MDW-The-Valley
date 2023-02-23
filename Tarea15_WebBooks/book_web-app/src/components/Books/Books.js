import './Books.scss'

import React from 'react';
import { useDebounce } from 'use-debounce';

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
            console.log(API_URL +filterWithTime)

            fetch(`${API_URL}${filterWithTime}`).then((response)  => {
                return response.json();
             }).then((data) =>{
                console.log(data)
                setBookList(data)
                /*for(let i=0; i<data.items.length;i++){
                    let existsAuthor ='authors' in data.items[i].volumeInfo
                    let existsTitle ='title' in data.items[i].volumeInfo
                    let existsImg ='imageLinks' in data.items[i].volumeInfo
                    console.log(existsAuthor, existsTitle, existsImg)
                    if(existsAuthor === true && existsTitle === true && existsImg === true){
                        setBookList()
                    }
                }*/
            })
            console.log(bookFiltrer)
            console.log(setBookList)
        }

    }, [filterWithTime]);


    return (
        <div className='book-list'>
            <p>Buscador de libros:</p>
            <input type="text" value={filter} onChange={(event) => setFilter(event.target.value)}></input>
            
            {(filter.length <=3) ? <p>Introduce más de 3 caracteres para buscar</p> :
            
            <table className='book-list__table'>
                <thead>
                    <tr>
                        <th>Autores</th>
                        <th>Título</th>
                        <th>Portada</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList.map((element) => {
                        return (
                                <tr key={element.volumeInfo.authors}>
                                    <td>{element.volumeInfo.authors}</td>
                                    <td>{element}</td>
                                </tr>
                        )
})}
                </tbody>
            </table>}
        </div>

    )
}

export default Books