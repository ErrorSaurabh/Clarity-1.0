import React from 'react'
import '../css/SetPassword.css'
import logo from '../assets/unnamed.png'
import imp from '../assets/important.png'
export default function ForgotPassword() {
    return (
        <>
            <div className='container align-items-center justify-content-center'>
                <div className="logo text-center">
                    <img src={logo} alt="" />
                </div>

                <div className="center" >
                    <h1 class="text-center">Clarity 1.0</h1>
                    <div class="text-center">
                  
                  <div class="panel-body">
    
                    <form id="register-form" role="form" autocomplete="off" class="form" method="post">
    
                      <div class="form-group">
                        <div class="input-group">
                          
                          <input id="email" name="email" placeholder="New Password" class="form-control input text-center"  type="email" sty/>
                        </div>
                        <div class="input-group">
                          
                          <input id="email" name="email" placeholder="Confirm Password" class="form-control input text-center"  type="email" sty/>
                        </div>
                        <br />
                        <div class="g-recaptcha " data-sitekey=" " ></div>
                      </div>
                      <button type="button" class="btn btn-light">Reset</button>
                      
                      <input type="hidden" class="hide" name="token" id="token" value=""/> 
                    </form>
    
                  </div>
                </div>
                    <br />
                    <div className='d.flex'>
                        <span style={{color:'gray'}}>Already have an account?</span>
                        <span><a href="" style={{color:'white', textDecoration:'none'}}>Log in</a></span><br />
                    </div>

                </div>


            </div></>
    )
}
