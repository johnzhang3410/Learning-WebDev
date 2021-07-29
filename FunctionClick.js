import React from 'react'

const FunctionClick = () => {

function clickHandler() {
    console.log('buttonClicked')
}

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick

