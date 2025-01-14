import {Component, ViewChild} from "@angular/core";
import {Platform, Nav} from "ionic-angular";
import {StatusBar, Splashscreen} from "ionic-native";
import {TabsPage} from "../pages/tabs/tabs";
import {SettingPage} from "../pages/setting";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openSettings() {
    this.nav.push(SettingPage);
  }
}
