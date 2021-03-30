import React from 'react'

export const Login = () => {
    return (
        <div className="container">
            <h2>Login</h2>
            <div className="bg-light container" style={{margin:"3% auto",height:"70vh"}}>
                <form style={{maxWidth:"80%",margin:"0 auto",padding:"5em 0"}}>
                <div class="form-group">
                    <label hmtlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
