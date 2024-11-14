import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const GetAxi = () => {
    const [name,setName]=useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res.data);
                setUsers(res.data); // Update state with fetched data
            })
            .catch(err => console.error(err)); // Handle errors
    }, []) // Dependency array to run effect only once on mount
    const addNew=()=>
    {
        Axios.post("https://jsonplaceholder.typicode.com/users",{name:name
            
        })
        .then(res=>setUsers([...users,res.data]))
    }

    return (
        <>
            <h1>User List</h1>
            {users.map(user => (
                <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            ))}
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={addNew}>AddNew</button>
        </>
    );
}

export default GetAxi;
