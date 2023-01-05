import React, { useState } from "react";

const App=()=>{

 const [name,setname]=useState("");
 const [fname,setfname]=useState();

const eventchange=(event)=>
{
setname(event.target.value);
}

const sub=()=>{
    setfname(name);
}

    return(
        <>
<div>
    <h1>Hello {fname}</h1>
    <input type='text' onChange={eventchange}
        value={name}
    />
    <button onClick={sub}>CLICK ME</button>
</div>
        </>
    );
};
export default App;
