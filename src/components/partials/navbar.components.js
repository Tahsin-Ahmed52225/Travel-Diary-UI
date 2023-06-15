import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from '../../components/home.components'
import Login from '../../components/login.components'
import SignUp from '../../components/register.components'

export default class navbar extends Component {
    render() {
        return (
            <Router>
                <nav class="navbar navbar-expand-lg bg-dark">
                    <div class="container">
                    <Link className="navbar-brand text-white" to={'/'}>
                        Travel Dairy
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li class="nav-item">
                            <Link className="nav-link text-uppercase text-white" to={'/'}>
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link text-uppercase text-white" to={'/sign-in'}>
                                Login
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link text-uppercase text-white" to={'/sign-up'}>
                                Register
                            </Link>
                        </li>
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                            </a>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item">Action</a></li>
                            <li><a class="dropdown-item">Another action</a></li>
                            <li><a class="dropdown-item">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li> */}
                        </ul>
                    </div>
                    </div>
                </nav>
                
                <div className="auth-wrapper">
                    <div className="auth-inner">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/sign-in" element={<Login />} />
                        <Route path="/sign-up" element={<SignUp />} />
                    </Routes>
                    </div>
                </div>
            </Router>
        )
    }
}