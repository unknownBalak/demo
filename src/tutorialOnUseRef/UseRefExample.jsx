// import React , {useRef} from 'react'

// function UseRefExample() {
         
//             let h1Ref= useRef();
//      const showSomething = () => console.log(h1Ref);
//     return (
//         <div>
//             <h1 ref={h1Ref} onClick={showSomething}>Hello Mr. How are you</h1>
//         </div>
//     )
// }

// export default UseRefExample


import React , {useRef}  from 'react'

function UseRefExample() {
        
       let nameRef =  useRef();
       let passwordRef=  useRef();

const getData =(e)=>{
      e.preventDefault();
   console.log(nameRef.current.value, passwordRef.current.value); 
   nameRef.current.value= "";
   passwordRef.current.value= "";

}

      return (
        <form onSubmit={getData}>
           <input  ref={nameRef} />
           <input ref={passwordRef} />
           <button>submit</button>
        </form>
    )
}

export default UseRefExample
