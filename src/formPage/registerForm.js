import React, { Component } from 'react'
import $ from "jquery"
import { signUp, saveUser} from '../firebaseAPI/Authentication'
import {firebaseAuth} from '../config/firebaseConfig'
import 'bootstrap/dist/css/bootstrap.css'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}


export default class registerForm extends Component {
      state = {registerError: null}
  handleSubmit = (e) => {
    e.preventDefault()
    signUp(this.email.value, this.pw.value).catch(e => this.setState(setErrorMsg(e)))
    }

  render() {
    return (
      <div>
        <div className="container" >
        <form onSubmit={this.handleSubmit}  >
            <div className="form-group row">
              <input className="form-control col-11" id="aName" placeholder="Name" />
            </div>
            <div className="form-group row">
                <input className="form-control col col-sm-5 offset-sm-0" id="first_name" placeholder="First Name" />

                <input className="form-control col col-sm-5 offset-sm-1" id="last_name" placeholder="Last Name" />
                </div>
            <div className="form-group row">
              <input className="form-control col-11" ref={(email) => this.email = email} placeholder="Email" />
            </div>
            <div className="form-group row">
              <input type="password" className="form-control col-11" placeholder="Password" ref={(pw) => this.pw = pw} />
            </div>
            {
              this.state.registerError &&
              <div className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span>
                &nbsp;{this.state.registerError}
              </div>
            }
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
        </div>
      </div>
    )
  }
}
