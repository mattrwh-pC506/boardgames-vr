import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textToLog: string = "Logger";

  log(e) {
    console.log(e.type)
    this.textToLog = e.type;
  }
}
