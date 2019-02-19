
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
