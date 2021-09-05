import React , {useReducer} from 'react';
import {reducerFn, initialState}  from "./Reducer";
function Example2() {
    const [state ] = useReducer(reducerFn, initialState);
    return (
        <div>
            This is in Example2.jsx {state.count}
        </div>
    )
}

export default Example2
