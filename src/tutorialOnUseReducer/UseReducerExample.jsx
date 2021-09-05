import React , {useReducer} from 'react'
import {reducerFn, initialState}  from "./Reducer";

function useReducerExample() {

   const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
         <>
          <p>Count is {state.count}</p>
          <br></br>
             <button onClick={()=> dispatch({id: "decrement"})}>-</button>
             <button onClick = {() => dispatch({id : "increment"})}>+</button>
           </>
  )
}

export default useReducerExample
