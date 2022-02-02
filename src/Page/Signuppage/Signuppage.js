import React from 'react';
import "./signuppage.css";
import { Link } from "react-router-dom";


function Signuppage() {

 

 
  return (
    <>
    <div className='Signup'>
    <div className='row'>
    <div className='signup_header'>
    <h1 className='signup_header'>Signup</h1>
    <div className='signup_Form'>
    <form className="row g-4"  id="form">
    <div className="form-group col-md-6">
    <label for="firstName" className="form-label">
                  First Name
                  </label>
                  <input
                    type="text"
                    
                    className="form-control"
                    name="firstname"
                    
                  />
   <label for="email" className="form-label">
                 Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    
                  />
    <label for="password" className="form-label">
                  Passowrd
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    
                  />
    <label for="confirm password" className="form-label">
                 Confirm  Passowrd
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirm password"
                    
                  />
                   <button 
                    type="submit"
                    className="btn btn-primary"
                    name="Savelogin"
                    id="savelogin"
                >
                  SIGNUP
                 </button>
                 <label class="container"> Already have an account? <Link  to ="/login" style={{textDecoration:"none",color:"inherit"}}>Login</Link>                         
                  </label>

    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Signuppage;

