import React from "react"
import { Link } from 'react-router-dom'

import './header.css'

const Header = ({onServiceChange}) => {

    return (
        <div className="header">
            <div className="header__top">
                <Link className="header__title" to="/">StarDB</Link>
                <button className="btn btn-primary btn-md align-self-center"
                    onClick={onServiceChange}>
                    Change Service
                </button>
            </div>
            <ul className="header__nav nav mt-4">
                <li className="header__nav-item nav-item">
                    <Link to="/people/" className="header__nav-link nav-link">People</Link>
                </li>
                <li className="header__nav-item nav-item">
                    <Link to="/planets/" className="header__nav-link nav-link">Planets</Link>
                </li>
                <li className="header__nav-item nav-item">
                    <Link to="/starships/" className="header__nav-link nav-link">Starships</Link>
                </li>
                <li className="header__nav-item nav-item">
                    <Link to="/login" className="header__nav-link nav-link">Login</Link>
                </li>
                <li className="header__nav-item nav-item">
                    <Link to="/secret" className="header__nav-link nav-link">Secret</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
