import { useState } from 'react';
import {useRef} from "react";

function CandidateUnControlledForm(){
    const [candidate,setCandidate] = useState({
        "firstName":"",
        "lastName":"",
        "matricule":""
    })
    const txtFirstName = useRef();
    const txtLastName = useRef();

    const register = e=>{
        e.preventDefault();
        console.log(txtFirstName.current.value);
        let c = {'firstName':txtFirstName.current.value,'lastName':txtLastName.current.value,'matricule':''};
        setCandidate(c)
    }
    console.log("rerender");
    return(
        <>
       <div>
        {candidate.firstName}
       </div>

       <form onSubmit={register}>
              <label htmlFor="firstName">Enter firstName</label>
              <input ref={txtFirstName} id="firstName" name="firstName" type="text"/>
              <label htmlFor="lastName">Enter lastName</label>
              <input ref={txtLastName}  id="lastName" name="lastName" type="text"/>
              <button>Send data!</button>
        </form>
        </>
       
    )
}
export default CandidateUnControlledForm;