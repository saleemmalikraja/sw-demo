import { Component, OnInit } from '@angular/core';

// Firebase imports
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };
// Initialization configuration for Firebase
const config = {
  apiKey: 'AIzaSyBHqoWx4xqrk5DmgkVHBwYtqFWVnWGDtc4',
  authDomain: 'sw-demo-236f8.firebaseapp.com',
  databaseURL: 'https://sw-demo-236f8.firebaseio.com',
  projectId: 'sw-demo-236f8',
  storageBucket: 'sw-demo-236f8.appspot.com',
  messagingSenderId: '744374645165'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sw-demo';

  ngOnInit() {
    // Inizalizing firebase
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}
