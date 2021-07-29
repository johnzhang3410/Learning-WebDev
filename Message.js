import React, { Component } from 'react'

class Message extends Component {

constructor() {
    super()
    this.state = {
        message: 'Welcome Vsitor'
    }

}

changeMessage() {
    this.setState({
        message: 'New Message'
    })
}
//changeMessage method simply uses setState to change the original message to the new one

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        
        )
    }
}
//this.props.nameofparameter accesses the value of that prop
//this.state.message accesses the current text in the state, which changes when the button is clicked by calling the changeMessage method

export default Message