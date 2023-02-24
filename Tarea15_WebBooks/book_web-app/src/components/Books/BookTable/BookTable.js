const BookTable = ({bookList}) => {
    return (
    <table className='book-list__table'>
                <thead>
                    <tr>
                        <th>Autores</th>
                        <th>Título</th>
                        <th>Portada</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList.map((book) => {
                        return (
                                <tr key={book.volumeInfo.authors}>
                                    <td>{book?.volumeInfo?.authors || "Sin autores"}</td>
                                    <td>{book?.volumeInfo?.title || "Sin título"}</td>
                                    <td>{book?.volumeInfo?.imageLinks && 
                                    <img src={book?.volumeInfo?.imageLinks.smallThumbnail}></img>}</td>
                                </tr>
                        )
                    })}
                </tbody>
            </table>
    )
}
export default BookTable