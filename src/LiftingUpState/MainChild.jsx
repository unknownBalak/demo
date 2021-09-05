import React from 'react'

function MainChild({changeState}) {
    return (
        <div>
            <button onClick={changeState} >Change State</button>
        </div>
    )
}

export default MainChild
