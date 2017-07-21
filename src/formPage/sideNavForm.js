import React, { Component } from 'react'
import $ from "jquery"
import { signOut } from '../firebaseAPI/Authentication'
import '../Style/sideNav.css'

export function openNav (){
    return $('#mySidenav').css({"width": "250px"}),
     $('#main').css({"marginLeft": "250px"}),
     $('body').css({"backgroundColor": "rgba(0,0,0,0.4)"})
}
export function closeNav (){
    $('#mySidenav').css({"width": "0"}),
     $('#main').css({"marginLeft": "0"}),
     $('body').css({"backgroundColor": "white"})
}
export default class sideNavForm extends Component {
    render() {
        return (

            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onclick={() => {closeNav()}}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="javascript:void(0)" onClick={() => {signOut()}}>Contact</a>
            </div>
        )
    }
}