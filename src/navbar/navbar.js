import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
function Navbar (){

    return(<>
    <ul className="navbar">
        <li>

        <Link to ="/" >Home</Link>
        </li>
        <li>

        <Link to ="/aboutMe">About Me</Link>
        </li>
        <li>
        <Link to ="/education">Education</Link>
        </li>
        <li>
        <Link to ="/expirance">Expirance</Link>
        </li>
    </ul>
    </>)
}
export default Navbar;