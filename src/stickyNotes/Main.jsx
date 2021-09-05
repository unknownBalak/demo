import React , {useReducer} from 'react'
import {initialState , useReducerFn} from "./usereducer.js";
function Main() {
  
    const [state, dispatch] = useReducer(useReducerFn, initialState);
        
    console.log(state);
     const addNote = (e) => {
           e.preventDefault();
           let textInput = e.target[0].value;
           // I have to dispatch 2 thing 
            //1) Object : val and length of the array;
            //2) type of the action: Kaun sa action perform hoga.
            //{ val: "" , len : 0} 
          dispatch({currentVal : {val: textInput , len  : state.length }, type : "ADD_NOTE"  })
           e.target.reset();
     }

    return (
        <div>
            <form onSubmit={addNote}>
                <textarea></textarea>
                <button type="submit">Add Note</button>
            </form>

            <div>
                {state.map((ele, index)=> {
                    return <p key={index}>{ele.val}</p>
                })}
            </div>
        </div>
    )
}

export default Main
