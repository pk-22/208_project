import React from "react";

import ChatWindow from "./components/ChatWindow";
import "./App.css";
import io from "socket.io-client";

function App() {
    return <ChatWindow />;
}

export default App;
