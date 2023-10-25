import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', content:'New', name: 'Talal'}, {type:'blueprint', content:'New', name: 'Talal'}];
  
  onServerAdded(serverData: {name:string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      content: serverData.serverContent,
      name: serverData.name
    });
  }

  onBlueprintAdded(blueprintData: {name:string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      content: blueprintData.serverContent,
      name: blueprintData.name
    });
  }

  
}
