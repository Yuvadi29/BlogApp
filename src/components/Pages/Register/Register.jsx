import React from 'react';
import './Register.css';



const Register = () => {
    return (
        <div className="Register">
            <div class="container h-100vh">
                <div class="row row h-100 align-items-center justify-content-centerr">
                    <div class="col align-self-cente ">
                        <div class="card">
                            <div class="card-header text-center display-4">
                                Register
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="firstName">First Name</label>
                                            <input type="text" class="form-control" id="firstName" placeholder="First Name" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="middleName">Middle Name</label>
                                            <input type="text" class="form-control" id="middleName" placeholder="Middle Name" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="Surname">Surname</label>
                                            <input type="text" class="form-control" id="Surname" placeholder="Surname" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Email</label>
                                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Password</label>
                                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="phonenumber">Phone Number</label>
                                            <input type="text" class="form-control" id="phonenumber" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <small><a href="" class="form-text text-muted">I have an account!</a></small>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register