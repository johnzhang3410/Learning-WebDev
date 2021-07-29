import React, { Component } from 'react'

class Counter extends Component {

constructor(props) {
    super(props)

    this.state = {
         count: 0
    }
}

increment() {
    //this.setState({
    //    count: this.state.count + 1
    //})

    this.setState((prevState) => ({
        count: prevState.count + 1
    }))
}
//we can have a call back function as second parameter for setState (arrow function) and it runs after the setState happens
//else if we have something else in the method, it's going to run before setState happens
//pass in a function as argument when you have to update state based on previous state value instead of passing in an object (incrementTwo() now works)

incrementTwo() {
    this.increment()
    this.increment()
}

    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.incrementTwo()}>Increment</button>
            </div>
        )
    }
}

export default Counter
