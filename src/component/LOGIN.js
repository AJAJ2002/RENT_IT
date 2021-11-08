
import React, { Component } from "react";
import "./LOGIN.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class LOGIN extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
      email: null,
      password: null,
      
      formErrors: {
        
        email: "",
        password: ""
        
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        
        Email: ${this.state.email}
        Password: ${this.state.password}
        
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      
      
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
        
      default:
  
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="sin" >
       
      <div className="wrapper">
        
        <div className="form-wrapper">
          <h1>Login Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
           
              
            
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Create Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
                      
            <div className="createAccount">
              <button type="submit">LOGIN</button>
              <small>Already Have an Account?</small>
            </div>
            <div className="socialAccount">
             <i className="zmdi zmdi-facebook zmdi-hc-2x"></i>
             <i className="zmdi zmdi-instagram zmdi-hc-2x"></i>
             <i className="zmdi zmdi-whatsapp zmdi-hc-2x"></i>
             <i className="zmdi zmdi-twitter zmdi-hc-2x"></i>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default LOGIN;
