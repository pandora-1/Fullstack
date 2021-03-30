import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../base";

const Login = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
          history.push("/");
        } catch (error) {
          if(error.message === "The email address is already in use by another account."){
            try{
              await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
              history.push("/");
            }
            catch (err){
              alert(err);
            }
          }
          else {
            alert(error);
          }
        }
      }, [history]);
    return (
        <div className="container">
            <h2 style={{padding:"0.5em 0 0 0"}}>Login</h2>
            <div className="bg-light container" style={{margin:"3% auto",height:"70vh"}}>
                <form onSubmit={handleSignUp} style={{maxWidth:"80%",margin:"0 auto",padding:"5em 0"}}>
                    <div className="form-group">
                        <label hmtlFor="exampleInputEmail1">Email address</label>
                        <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login)