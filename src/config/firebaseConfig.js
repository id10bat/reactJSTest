import *as firebase from "firebase"
// import * as admin from "firebase-admin"
var config = {
    apiKey: "AIzaSyAwoXBhfL3lIhgSp59R3FZo43HSf1gk4TY",
    authDomain: "eplan-96a5a.firebaseapp.com",
    databaseURL: "https://eplan-96a5a.firebaseio.com",
    projectId: "eplan-96a5a",
    storageBucket: "eplan-96a5a.appspot.com",
    messagingSenderId: "395301044424"
}
firebase.initializeApp(config);

export var dbRef = firebase.database().ref()
export var firebaseAuth = firebase.auth
export var user = firebase.auth().currentUser;
// export const user = firebase.auth().currentUser
// export const GoogleAuth = new firebase.auth.GoogleAuthProvider()
// export const FacebookAuth = new firebase.auth.FacebookAuthProvider()
// export const TwitterAuth = new firebase.auth.TwitterAuthProvider()
// export const GithubAuth = new firebase.auth.GithubAuthProvider()
// export const storage = firebase.app().storage()
