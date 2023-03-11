import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import logo from '../assets/unnamed.png'
export default function CreateAccount() {
    return (
        <>
            <div className='container align-items-center justify-content-center' style={{position: 'fixed',top: '4%',left: '30%'}} >
                <div className="logo text-center" style={{width: '40rem'}}>
                    <img src={logo}/>
                </div>

                <div className="center" style={{height: '35rem',width: '40rem',border: 'solid 2px rgb(80, 80, 164)',backgroundColor: 'rgb(80, 80, 164)',padding: '2rem 2rem'}} >
                    <h1 class="text-center">Clarity 1.0</h1>

                    <form>
                        <div className="heading">
                            <p>Let's get you all set up so you can verify your personal account and begin setting up your profile.</p>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-4">

                                <div class="form-outline">
                                    <input type="text" id="firstName" class="form-control form-control-lg input text-center" placeholder='First Name' />

                                </div>

                            </div>
                            <div class="col-md-6 mb-4">

                                <div class="form-outline">
                                    <input type="text" id="lastName" class="form-control form-control-lg input text-center" placeholder='Last Name' />
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-4 d-flex align-items-center">

                                <div class="form-outline datepicker w-100">
                                    <input type="text" id="firstName" class="form-control form-control-lg input text-center" placeholder='Organization/Institute' />
                                </div>

                            </div>
                            <div class="col-md-6 mb-4">

                                <div class="form-outline">
                                    <input type="text" id="lastName" class="form-control form-control-lg input text-center" placeholder='E-Mail' />
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-4 pb-2">

                                <div class="form-outline">
                                    <input type="email" id="emailAddress" class="form-control form-control-lg input text-center" placeholder='Password' />
                                </div>

                            </div>
                            <div class="col-md-6 mb-4 pb-2">

                                <div class="form-outline">
                                    <input type="tel" id="phoneNumber" class="form-control form-control-lg input text-center" placeholder='Confirm Password' />
                                </div>

                            </div>
                            
                        </div>
                        <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">This is a student account.</label>
                            </div> 
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                <label class="form-check-label" for="flexCheckChecked">I agree to all the <a id='termsandcondition' href="">Terms and conditions</a></label>
                            </div>


                        <div class="mt-2 pt-2">
                        <button type="button" class="btn btn-light btn">Create Account</button>
                        </div>

                    </form>

                    <div className='d.flex'>
                        <span>Already have an account?</span>
                        <span><NavLink to="/login">Log in</NavLink></span><br />
                    </div>


                </div>


            </div></>
    )
}