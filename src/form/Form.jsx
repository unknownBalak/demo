import React,{useState} from 'react';
function Practice() {
 const [state, setstate] = useState({first_name:"",last_name:"",username:"",email:"",password:""})

 

const use = (e)=>{
setstate({first_name:e.target.value})
}
const use1 = (e)=>{
setstate({last_name:e.target.value})
}
const use2 = (e)=>{
setstate({username:e.target.value})
}
const use3 = (e)=>{
setstate({email:e.target.value})
}
const use4 = (e)=>{
setstate({password:e.target.value})
}
const btn  =(e)=>{
  e.preventDefault()
  console.log(state);
}

  return (
    <div className="form">
       <form onSubmit = {btn} method = "post">
      <h3 className = "head">Please Fill Form</h3>
      <label className="label-s">First Name *</label>
      <input className="input-element" type="name" name="first_name" value={state.first_name} required placeholder="Please Enter Your First Name" onChange = {use}  />
      <label className="label-s">Last Name *</label>
      <input className="input-element" type="name" name="last_name" value={state.last_name} required placeholder="Please Enter Your Last Name" onChange = {use1} />
      <label className="label-s">User Name *</label>
      <input className="input-element" type="name" name="username" value={state.username} required placeholder="Please Enter Your User Name"  onChange = {use2}/>
      <label className="label-s">Email *</label>
      <input className="input-element" type="name" name="email" value={state.email} required placeholder="Please Enter Your email" onChange = {use3} />
      <label className="label-s">Password *</label>
      <input className="input-element" type="password" name="password" value={state.password} required placeholder="Please Enter Your Password" onChange = {use4} />
      <input className="input-submit" type="button" value="Submit" onClick= {btn}/>
      </form>
    </div>
  
  );
}

export default Practice