import logo from './logo.png';
import './App.css';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as React from 'react';


import axios from "axios";

function UsersList(props) {
    const users = props.users;
    return users.map((user) =>
        <p>{user.firstName} {user.lastName}</p>
    )
}

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:44353/api/users').then((res) => {
            setUsers(res.data);
        })
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <UsersList users={users}/>
                <img src={logo} className="App-logo" alt="logo"/>
                <Link to="/dashboard"
                      className="inline-block px-6 py-3 font-bold text-center text-white align-middle transition-all rounded-lg cursor-pointer bg-gradient-fuchsia leading-pro text-size-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs">My
                    Dashboard</Link>
            </header>
        </div>
    );
}

export default App;
