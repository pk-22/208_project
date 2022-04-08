import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Link to="/Chat">Chat</Link>
                <Link to="/">Home</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Shop">Shop</Link>
                <Link to="/Admin">Admin</Link>
            </div>
        );
    }
}

export default NavBar;
