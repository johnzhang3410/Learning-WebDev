import React, { Component } from 'react'

class ClassClick extends Component {

onClick(){
    console.log('Button Clicked')
}

    render() {
        return (
            <div>
                <button onClick = {this.onClick}>Click</button>
            </div>
        )
    }
}

export default ClassClick
