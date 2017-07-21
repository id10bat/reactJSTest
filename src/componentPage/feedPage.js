import React, { Component } from 'react'
import $ from "jquery"
import {
    Route, BrowserRouter,
    Link, Redirect, Switch
} from 'react-router-dom'
import { signOut } from '../firebaseAPI/Authentication'
import { firebaseAuth, user, saveUser} from '../config/firebaseConfig'
import webPage from '../componentPage/webPage'
import registerForm from '../formPage/registerForm'
import 'bootstrap/dist/css/bootstrap.css'
import '../Style/sideNav.css'


function openNav() {
    $('#mySidenav').css({ "width": "250px" });
    $('#main').css({ "marginRight": "250px" });
    $('#showSideNav').addClass("modal fade show").css({ "display": "block" });
    $('#bodyShadow').addClass("modal-backdrop fade show");
    $('#cdawrap').addClass("hidden").css({ "marginRight": "250px" });
    $('body').addClass("modal-open");
};
function closeNav() {
    $('#mySidenav').removeAttr("style");
    $('#main').removeAttr("style");
    $('#showSideNav').removeClass("modal fade show").removeAttr("style");
    $('#cdawrap').removeClass("hidden").removeAttr("style");
    $('#bodyShadow').removeClass("modal-backdrop fade show");
    $('body').removeClass("modal-open");
}


export default class feedPage extends Component {
    state = {
        textName: null,
        authed: false,
        loading: true,
    }
    componentDidMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
          if (user != null) {
                this.setState({
                    textName: user.displayName,
                    authed: true,
                    loading: false,
                })
            } else {
                this.setState({
                    textName: null,
                    authed: false,
                    loading: false
                })
            }
        })
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                    {this.state.authed
                        ? <div id="main">
                            <nav className="navbar navbar-toggleable navbar-light bg-faded">
                                <button className="navbar-toggler navbar-toggler-right" type="button" >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <a href="/" className="navbar-brand">Test</a>
                                <div className="collapse navbar-collapse">
                                    <ul className="ml-auto navbar-nav">
                                        <li className="nav-item">

                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div id="cdawrap" className="sidenav" >
                                <button onClick={() => { openNav() }} >{this.state.textName}</button>
                            </div>
                            <div>
                                <div id="showSideNav">
                                    <div id="mySidenav" className="sidenav">
                                        <a href="javascript:void(0)" className="right-closebtn" onClick={() => { closeNav() }}>&times;</a>
                                        <a href="#">About</a>
                                        <a href="#">Services</a>
                                        <a href="#">Clients</a>
                                        <a href="javascript:void(0)" onClick={() => { signOut() }}>LogOut</a>
                                    </div>
                                </div>
                                <div id="bodyShadow"></div>
                            </div>

                        </div>
                        : <Route authed={this.state.authed} exact component={webPage} />}
                </div>
            </BrowserRouter>
        );
    }

}
