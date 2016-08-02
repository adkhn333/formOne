/// <reference path="../lib/angular.js" />
var config = {
    apiKey: "AIzaSyD3GO4-9oSqSxrhhF-Zcq7FZYdEFsWOGmw",
    authDomain: "temp-df1a5.firebaseapp.com",
    databaseURL: "https://temp-df1a5.firebaseio.com",
    storageBucket: "temp-df1a5.appspot.com",
  };
firebase.initializeApp(config);
var app = angular.module('app', ['ui.router', 'ngMaterial', 'ngMessages']);