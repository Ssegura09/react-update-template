import React from "react";
import {Link} from 'react-router-dom'

function Login(){
        
    return(
        <div>
            <h1>I'm the login page</h1>
            <Link to="/signUp">Sign Up</Link>
        </div>
    )
}
export {Login};