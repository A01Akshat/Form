import React, { useState } from "react";

const App=()=>{

 const [name,setname]=useState("");
 const [lname,setlname]=useState("");
 const [fname,setfname]=useState();
 const [fnamen,setfnamen]=useState("");

const eventchange=(event)=>
{
setname(event.target.value);
}

const sub=(event)=>{
    event.preventDefault();//prevents default behaviour of form tag
    setfname(name);
    setfnamen(lname);
}

const eventchangetwo=(event)=>{
setlname(event.target.value);
}


    return(
        <>
<div>
<form onSubmit={sub}>
    <h1>Hello {fname} {fnamen}</h1>
    <input type='text' onChange={eventchange}
        value={name}
    />
    <br></br>
    <input type='text' onChange={eventchangetwo}
        value={lname}
    />
    <button type="submit">CLICK ME</button>
    </form> 
</div>
        </>
    );
};
export default App;
