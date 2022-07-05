import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
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
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
