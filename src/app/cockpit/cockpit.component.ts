import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //newServerName = '';
  @ViewChild('serverContentInput') newServerContent: ElementRef;
  @Output() serverCreated = new EventEmitter<{name:string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{name:string, serverContent: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: serverNameInput.value,
      serverContent: this.newServerContent.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverNameInput.value,
      serverContent: this.newServerContent.nativeElement.value
    });
  }

  onKeyUp(event: KeyboardEvent, serverNameInput: HTMLInputElement){
    if(event.code == "Enter"){
      this.onAddServer(serverNameInput);
    }
  }
}
