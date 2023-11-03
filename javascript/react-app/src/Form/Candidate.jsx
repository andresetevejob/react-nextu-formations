import { useState } from 'react';

function Candidate(){
    const [candidate,setCandidate] = useState({
        "firstName":"",
        "lastName":"",
        "matricule":""
    })
    const register = e=>{
        e.preventDefault();
        console.log(candidate);
    }
    console.log("rerender");
    return(
        <form onSubmit={register}>
              <label htmlFor="firstName">Enter firstName</label>
              <input id="firstName" name="firstName" type="text" value={candidate.firstName} onChange={(e)=>setCandidate({...candidate,firstName:e.target.value})}/>
              <label htmlFor="lastName">Enter lastName</label>
              <input id="lastName" name="lastName" type="text" value={candidate.lastName} onChange={(e)=>setCandidate({...candidate,lastName:e.target.value})}/>
              <button>Send data!</button>
        </form>
    )
}
export default Candidate;