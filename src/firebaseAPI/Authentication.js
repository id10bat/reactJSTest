import {
  dbRef,
  firebaseAuth, user
} from '../config/firebaseConfig'
import $ from "jquery"
import registerForm from '../formPage/registerForm'


export function signUp(email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
  .then(saveUser)
}

export function logIn(email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser(user) {
  if (user) {
    var yourName = $('#aName').val();
    var firstName = $('#first_name').val();
    var lastName = $('#last_name').val();
    var Names = [yourName, firstName, lastName];
    user.updateProfile({
      displayName: Names[0]
    }).then(function () {
      return dbRef.child(`users/${user.uid}/info`)
        .set({
          displayName: user.displayName,
          firstName: Names[1],
          lastName: Names[2],
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData
        })
        .then(() => user)
    })
  }
}

export function signOut() {
  return firebaseAuth().signOut()
}
