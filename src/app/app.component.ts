import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../services/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  tabsPage = TabsPage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  isAuthenticated = false;

  @ViewChild('nav') nav : NavController;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
              private menuCtrl : MenuController, private authService : AuthService) {
    
    firebase.initializeApp({
      apiKey: "AIzaSyCE_DqY7K5XPH7PoVvGVzA9XR3U2IOaDWQ",
      authDomain: "ionic3-recipebook-939bb.firebaseapp.com"
    });

    firebase.auth().onAuthStateChanged(user =>{
      if (user){
        this.isAuthenticated = true;
        this.nav.setRoot(this.tabsPage);
        this.rootPage = TabsPage;
      } 
      else {
        this.isAuthenticated = false;
        this.nav.setRoot(this.signinPage);
        this.rootPage = SigninPage;
      }
    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad( page : any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }
}

