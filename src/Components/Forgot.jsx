import React from 'react'
import '../css/Forgot.css'
import logo from '../assets/unnamed.png'
import imp from '../assets/important.png'
import { NavLink } from 'react-router-dom'
export default function Forgot() {
    return (
        <>
            <div className='container align-items-center justify-content-center'>
                <div className="logo text-center">
                    <img src={logo} alt="" />
                </div>

                <div className="center" >
                    <h1 class="text-center">Clarity 1.0</h1>
                    <div class="text-center">
                  <h3><img class="fa fa-lock fa-4x" src={imp}/></h3>
                  <h4 class="text-center">Forgot Password?</h4>
                  <div class="panel-body">
    
                    <form id="register-form" role="form" autocomplete="off" class="form" method="post">
    
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                          <input id="email" name="email" placeholder="E-mail" class="form-control input text-center"  type="email" sty/>
                        </div>
                      </div>
                      <button type="button" class="btn btn-light">Submit</button>
                      
                      <input type="hidden" class="hide" name="token" id="token" value=""/> 
                    </form>
    
                  </div>
                </div>
                    <br />
                    <div className='d.flex'>
                        <span style={{color:'gray'}}>Already have an account?</span>
                        <span><NavLink to="/login" style={{color:'white', textDecoration:'none'}}>Log in</NavLink></span><br />
                    </div>

                </div>


            </div></>
    )
}
