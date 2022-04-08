import React from "react";
import { Link } from "react-router-dom";
import "../navbar.css";
class NavBar extends React.Component {
    render() {
        return (
            <div className="nav">
                <Link to="/Chat" className="links">Chat</Link>
                <Link to="/" className="links">Home</Link>
                <Link to="/Blog" className="links">Blog</Link>
                <Link to="/Shop" className="links">Shop</Link>
                <Link to="/Admin" className="links">Admin</Link>
            </div>
        );
    }
}

export default NavBar;
