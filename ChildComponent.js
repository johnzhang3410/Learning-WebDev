import React from 'react'

function ChildComponent( {greetParent} ) {
    return (
        <div>
            <button onClick={greetParent}>greet Parent</button>
        </div>
    )
}
//if you have to pass a parameter from child to parent, use an arrow function () => greetParent('child')

export default ChildComponent
