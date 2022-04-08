import React from "react";
import ChatMessage from "./ChatMessage";
import "../ChatWindow.css";

class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Msg: [
                {
                    createdAt: "No date yet!",
                    Content: "This is test Text1 LOL!",
                    status: "MY"
                },
                {
                    createdAt: "No date yet!",
                    Content: "This is test Text2 LOL! Nice Text!",
                    status: "OTHER"
                },
                {
                    createdAt: "No date yet!",
                    Content:
                        "This is test Text3 LOL! Harry Potter is a good story!",
                    status: "MY"
                }
            ],

            OtherPersonInfo: [
                {
                    Pfp: "No Image",
                    Name: "Harry Potter",
                    liveInfo: " NO info yet!"
                }
            ],
            msgToDeliver: ""
        };
        this.msgChangeHandler = this.msgChangeHandler.bind(this);
        this.sendHandler = this.sendHandler.bind(this);
    }

    msgChangeHandler(event) {
        console.log(
            "message chnage hangler triggered!! this is the state now",
            event.target.value
        );
        var currState = { ...this.state };
        this.setState({
            ...currState,
            msgToDeliver: event.target.value
        });
        console.log("this is state now", this.state);
    }

    sendHandler(content) {
        //  var currState = { ...this.state };
        var currMsgArr = this.state.Msg.slice();
        var msgToDeliverVal = this.state.msgToDeliver;
        var OtherPersonInfoVal = this.state.OtherPersonInfo;
        var d = "BRUH MOMENT";
        currMsgArr.push({
            createdAt: d,
            Content: content,
            status: "MY"
        });
        console.log("this is the nre Msg Arr", currMsgArr);
        this.setState({
            Msg: currMsgArr,
            OtherPersonInfo: OtherPersonInfoVal,
            msgToDeliver: ""
        });
    }

    render() {
        const DisplayMsgArr = this.state.Msg.map((msg, index) => {
            let classNameMessage = msg.status == "MY" ? "MYmsg" : "OTHERmsg";
            let classNameContainer =
                msg.status == "MY"
                    ? "single-msg-container-my"
                    : "single-msg-container-other";
            return (
                <div className={classNameContainer}>
                    <ChatMessage
                        class={classNameMessage}
                        content={msg.Content}
                        time={msg.createdAt}
                    />
                </div>
            );
        });
        return (
            //<div>
            <div>
                {DisplayMsgArr}

                <form className="send-msg">
                    <div>
                        <input
                            type="text" className="send-input"
                            value={this.state.msgToDeliver}
                            onChange={(e) => this.msgChangeHandler(e)}
                        />
                    </div>
                    <button
                        type="button" className="send-btn"
                        onClick={() =>
                            this.sendHandler(this.state.msgToDeliver)
                        }
                    >
                        Send!
                    </button>
                </form>
            </div>
            // <div>
            //     <input
            //         type="text"
            //         value={this.state.msgToDeliver}
            //         onChange={this.msgChangeHandler}
            //     />
            //     <button onClick={this.sendHandler(this.state.msgToDeliver)}>
            //         Send!
            //     </button>
            // </div>
            //</div>
        );
    }
}
export default ChatWindow;
