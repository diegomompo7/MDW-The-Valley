import './UserList.css'
import React from 'react';
import { useDebounce } from 'use-debounce';

const API_URL = "https://jsonplaceholder.typicode.com/users?";

const UserList = () => {

    const [userList, setUserList] = React.useState([]);
    const [filter, setFilter] =React.useState([])
    const [filterWithTime] = useDebounce(filter, 2000);

    React.useEffect(() => {

        fetch(API_URL + document.getElementById("category").value + "_like=" + filterWithTime).then((response)  => {
            return response.json();
        }).then((data) =>{
            console.log(data)
            setUserList(data)
        })

    }, [filterWithTime]);

    return (
        <div className='user-list'>
            <p>Buscador de usuarios:</p>
            <select id="category">
                <option value="id">id</option>
                <option value="name">name</option>
                <option value="username">username</option>
                <option value="address.city">city</option>
            </select>
            <input type="text" value={filter} onChange={(event) => setFilter(event.target.value)}></input>
            <span>Valor con debaunce: {filterWithTime}</span>

            <p>Listado de usuarios:</p>
            <table className='user-list__table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {userList.map((user) => {
                        return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
}

export default UserList