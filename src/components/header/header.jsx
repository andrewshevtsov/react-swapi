/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import './header.css'

const Header = () => {

    return (
        <div className="header">
            <h1 className="header__title">StarDB</h1>
            <ul className="header__nav nav">
                <li className="header__nav-item nav-item">
                    <a href="#" className="header__nav-link nav-link">People</a>
                </li>
                <li className="header__nav-item nav-item">
                    <a href="#" className="header__nav-link nav-link">Planets</a>
                </li>
                <li className="header__nav-item nav-item">
                    <a href="#" className="header__nav-link nav-link">Starships</a>
                </li>
            </ul>
        </div>
    )
}

export default Header