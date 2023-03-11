import React from 'react'
import '../css/Login.css'
import logo from '../assets/unnamed.png'
import {NavLink} from 'react-router-dom'
export default function Login() {
    return (
         <>
            <div className='container align-items-center justify-content-center'>
                <div className="logo text-center">
                    <img src={logo} alt="" />
                </div>

                <div className="center" >
                    <h1 class="text-center">Clarity 1.0</h1>
                    <form>
                        <div class="form-group">

                            <input type="email" class="form-control input text-center" id="email" aria-describedby="emailHelp" placeholder='Email' />
                           
                        </div>
                        <div class="form-group">

                            <input type="password" class="form-control input text-center " id="exampleInputPassword1" placeholder='Password' />
                        </div>
                        <div class="form-group form-check text-center">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remember me.</label>
                        </div>
                        <div class="text-center mb-2 pb-1">
                            
                            <NavLink class="text-muted" to="/forgot" id='forgot' style={{textDecoration:'none', color:'white'}}>Forgot password?</NavLink>
                        </div>
                        <div className="text-center">
                        <NavLink to="/"><button type="button" class="btn btn-light text-center" >Login</button></NavLink><br />
                        </div>
                        
                    </form>
                    <br />
                    <span><NavLink to="/create">I am new here. I need an account.</NavLink></span><br />

                </div>

            </div>
      
            </>
    )
}
