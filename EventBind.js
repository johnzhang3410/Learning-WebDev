import React, { Component } from 'react'

class EventBind extends Component {

constructor(props) {
    super(props)

    this.state = {
         message: 'hello'
    }

    this.onClick = this.onClick.bind(this)
}

onClick() {
    this.setState({
        message: 'Goodbye'
    })
}
//this keyword does not work in event handler onClick, so we need event binding
//change this to the form of arrow function is a way to solve the problem (solution 4 down below)

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.onClick.bind(this)}>Click</button>*/}
                <button onClick={() => this.onClick()}>Click</button>
            </div>
        )
    }
}
//can bind this keyword after the event handler to solve the problem (can cause performance issues in larger applications) (binding in render)
//can use an arrow function to solve the problem (also has performance issues) (arrow in render)
//best and most common way is to use bind in the constructor, and no arrow function is now needed (binding in constructor)
//Another way is to define onClick() as an arrow function onClick = () => ({message: 'goodbye'}) (class property as arrow functions)

export default EventBind
