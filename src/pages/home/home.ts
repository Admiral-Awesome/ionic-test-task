import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServerProvider } from '../../providers/server/server'
import { GeolocationProvider } from '../../providers/geolocation/geolocation';
import { LoadingController } from 'ionic-angular';
import { ServerData } from '../../providers/server/data'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loader;
  comopnentData: ServerData[];
  constructor(public navCtrl: NavController, 
  private serverProvider: ServerProvider,
  private geolocationProvider: GeolocationProvider,
  private loadingCtrl: LoadingController) {
    this.loader = this.loadingCtrl.create({
      content: "Getting Server Data ....",
    });
  }
  
  getData() {
    this.loader.present();
    this.serverProvider.getData().then(data => {
      this.comopnentData = data;
      this.loader.dismiss();
    });
  }

}
