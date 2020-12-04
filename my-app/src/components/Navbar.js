import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">QuizList</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item"> 
                        <Link to="/" className="nav-link">Quiz</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Quiz</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/user" className="nav-link"> Create User</Link>    
                        </li>
                        <li className="navbar-item">
                            <Link to="/userInfo" className="nav-link"> User Info</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}