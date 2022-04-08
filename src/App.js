import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatWindow from "./components/ChatWindow";
import NavBar from "./components/NavBar";
import HomeWindow from "./components/HomeWindow";
import BlogWindow from "./components/BlogWindow";
import ShopWindow from "./components/ShopWindow";
import AdminWindow from "./components/AdminWindow";

import "./App.css";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeWindow />} />
                <Route path="/Chat" element={<ChatWindow />} />
                <Route path="/Blog" element={<BlogWindow />} />
                <Route path="/Shop" element={<ShopWindow />} />
                <Route path="/Admin" element={<AdminWindow />} />
            </Routes>
        </Router>
    );
}

export default App;
