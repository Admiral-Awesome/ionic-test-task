import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

export interface Coordinates {
  lat;
  lon;
}
@Injectable()
export class GeolocationProvider {
  phoneCoordinate: Coordinates;
  coordinatesWatcher;
  constructor(public http: Http,
    private platform: Platform, private geolocation: Geolocation) {
    platform.ready().then(() => {
      // get current position
      geolocation.getCurrentPosition().then(pos => {
        this.phoneCoordinate = { lat : pos.coords.latitude, lon : pos.coords.longitude };
        
      }, err => {
        alert(JSON.stringify(err));
      });
      
      this.startWatchingCoordinates();
    });
  }
  // handle coordinates watching and show to view
  startWatchingCoordinates():void {
    this.coordinatesWatcher = this.geolocation.watchPosition().subscribe(pos => {
      this.phoneCoordinate = { lat : pos.coords.latitude, lon : pos.coords.longitude };
    });
  }
  
  //stop watching coordintate change
  stopWatchingCoordinates():void {
    this.coordinatesWatcher.unsubscribe();
  }

}
