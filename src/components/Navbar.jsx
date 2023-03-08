import React from "react"

import logo from '/images/airbnb-logo.png'

export default function Nav() {
    return (
    <nav className="nav--nav">
        <a className="nav--logoLink" href="#">
            <img className="nav--logo" src={logo}/>
        </a>
    </nav>
    );
}
