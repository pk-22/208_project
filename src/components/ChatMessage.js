import React from "react";
import "../ChatWindow.css";
import "../ChatMessage.css";

class ChatMessage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.class}>
                <div className="date-text">{this.props.time}</div>
                {"/n"}
                <div className="content-data">{this.props.content}</div>
            </div>
        );
    }
}
export default ChatMessage;
