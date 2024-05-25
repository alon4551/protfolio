import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import { Navbar,Nav ,NavLink} from "react-bootstrap";

function PersonalNavbar (){

    return(<>
    <Navbar className="">
        <Nav>
            <Nav.Link as ={Link} to ="/">
                Home
            </Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link as = {Link} to ="/aboutMe">
            About Me
            </Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link as ={Link} to ="/expirance">
            Experience
            </Nav.Link>
        </Nav>
    </Navbar>
    </>)
}
export default PersonalNavbar;