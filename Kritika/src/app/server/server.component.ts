import { Component, OnInit } from '@angular/core';
import { server } from './server';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  providers:[server]
})
export class ServerComponent implements OnInit {

  public userlist=["abc","def","efh"];
  public title ='Server Component - task 5 String interpolation';
  public servername= "Server 1";
  public servercreated=false;
  public servercreationstatus = "No Server Created";
  public id:number=1001;
  public serverstatus1:string='offline';

  constructor(public ServerObj:server) {
    this.serverstatus1 = Math.random() > 0.5 ? 'online' : 'offline'
   }
   public getserverstatus(){
    return this.serverstatus1;
    }
  public getcolor(){
    return this.serverstatus1 === 'online' ? 'green' : 'red';
  }
  
   public oncreateserver()
   {
     this.servercreated=true;
     this.servercreationstatus="Server created task ngif ngifelse";
   }
  ngOnInit() {
  }
}
