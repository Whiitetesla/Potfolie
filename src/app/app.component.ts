import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 tabs = [];


  scrollEvent(){
    this.tabs.forEach(function (s) {
      document.getElementById(s.replace(s[0],s[0].toLocaleUpperCase())).className = 'nav-item';
    });
    //document.getElementById(id.replace(id[0],id[0].toLocaleUpperCase())).className = 'nav-item active';
  }
}
