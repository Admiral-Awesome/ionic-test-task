import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ServerData } from './data';

@Injectable()
export class ServerProvider {
  data: ServerData[] = [];
  constructor(public http: Http) { }
  
  getData() : Promise<ServerData[]> {
    return new Promise( (resolve, reject) => {
      this.data = Array(Math.floor(Math.random()*5) + 1).fill({ title : 'title', text : 'description'});
      setTimeout( () => {
        resolve(this.data);
      }, 1500);

    });
  }
}
