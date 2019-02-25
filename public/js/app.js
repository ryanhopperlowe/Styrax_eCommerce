
var config = {
  apiKey: "AIzaSyCAAtbVQR4B1aoOx5oyujZNiuwmsUB0ODo",
  authDomain: "styrax-86ff4.firebaseapp.com",
  databaseURL: "https://styrax-86ff4.firebaseio.com",
  projectId: "styrax-86ff4",
  storageBucket: "styrax-86ff4.appspot.com",
  messagingSenderId: "609468963448"
};
firebase.initializeApp(config);

var app = angular.module('StyraxApp', ['firebase']);

app.controller('AppController', function($scope, $firebaseObject, $firebaseAuth) {
  const rootRef = firebase.database().ref().child('angular');
  const ref = rootRef.child('users');
  this.object = $firebaseObject(ref);

  console.log(this.object);

  $scope.val = "Hello";
});

app.controller('SignInController', function($scope, $firebaseAuth) {
  var firebaseAuthObject = $firebaseAuth();
  this.user = {};

  this.handleSignIn = function () {
    firebaseAuthObject.$signInWithEmailAndPassword(this.user.email, this.user.password);
    window.alert("Success")
  }
})

app.controller('SignupController', function($scope, $firebaseAuth) {
  var firebaseAuthObject = $firebaseAuth();
  this.newUser = {};

  this.handleSignUp = function () {
    if (this.newUser.password1 == this.newUser.password2) {
      let password = this.newUser.password1;
      let email = this.newUser.email;

      firebaseAuthObject.$createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });

    }
  }
})
