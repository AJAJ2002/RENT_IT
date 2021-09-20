import React from 'react'
import './SIGNUP.css';

export default function SIGNUP() {
  return (
    <>
        <section className="signup">
          <div className="container mt-5" >
            <div className="signup-content" >
              <div className="signup-form">
                <h2 className="form-title">Sign Up</h2>
                <form className="form-register" id="form-register" >
                  
                  <div className="form-group">
                    <label htmlFor="name">
                      <i class="zmdi zmdi-account"></i>  
                    </label>
                     <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name" />
                  </div>
                  
                  
                  <div className="form-group">
                    <label htmlFor="email">
                      <i class="zmdi zmdi-email"></i>  
                    </label>
                     <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email" />
                  </div>

                  
                  <div className="form-group">
                    <label htmlFor="name">
                      <i class="zmdi zmdi-phone"></i>  
                    </label>
                     <input type="number" name="phone" id="phone" autoComplete="off" placeholder="Your Phone" />
                  </div>

                  
                  <div className="form-group">
                    <label htmlFor="work">
                      <i class="zmdi zmdi-slideshow"></i>  
                    </label>
                     <input type="text" name="work" id="work" autoComplete="off" placeholder="Your Profession" />
                  </div>

                  
                  <div className="form-group">
                    <label htmlFor="password">
                      <i class="zmdi zmdi-lock"></i>  
                    </label>
                     <input type="password" name="password" id="password" autoComplete="off" placeholder="Your password" />
                  </div>

                  
                  <div className="form-group">
                    <label htmlFor="cpassword">
                      <i class="zmdi zmdi-lock"></i>  
                    </label>
                     <input type="password" name="cpassword" id="cpassword" autoComplete="off" placeholder="Conform Your password" />
                  </div>

                  <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />

                  </div>

                </form>
              </div>
             </div>
           </div>
        </section>
    </>
  )
}
