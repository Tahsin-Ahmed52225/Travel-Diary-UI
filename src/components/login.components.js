import React, { Component } from "react";

export default class login extends Component {
    render() {
        return (
            <div class="container">
                <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"></input>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
           
            // <form>
            //     <h3>Sign In</h3>
            //     <div className="mb-3">
            //     <label>Email address</label>
            //     <input
            //         type="email"
            //         className="form-control"
            //         placeholder="Enter email"
            //     />
            //     </div>
            //     <div className="mb-3">
            //     <label>Password</label>
            //     <input
            //         type="password"
            //         className="form-control"
            //         placeholder="Enter password"
            //     />
            //     </div>
            //     <div className="mb-3">
            //     <div className="custom-control custom-checkbox">
            //         <input
            //         type="checkbox"
            //         className="custom-control-input"
            //         id="customCheck1"
            //         />
            //         <label className="custom-control-label" htmlFor="customCheck1">
            //         Remember me
            //         </label>
            //     </div>
            //     </div>
            //     <div className="d-grid">
            //     <button type="submit" className="btn btn-primary">
            //         Submit
            //     </button>
            //     </div>
            //     <p className="forgot-password text-right">
            //     Forgot <a href="#">password?</a>
            //     </p>
            // </form>
        )
    }
}