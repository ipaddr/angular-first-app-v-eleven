import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent{
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Not Empty Name';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000); 
   }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name server is '+this.serverName;
  }

  onUpdateServerName(event: InputEvent){
    this.serverName = event.target['value'];
  }
}


