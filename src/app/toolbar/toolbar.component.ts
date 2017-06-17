import { Component, OnInit } from '@angular/core';
import { smoothscroll } from 'smoothscroll-polyfill/dist/smoothscroll'; smoothscroll.polyfill();

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})


export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tabs = ['about','projects','home','resume','contacts'];

  scrollWin(id) {
    document.querySelector('#'+id).scrollIntoView({ behavior: 'smooth' });
  }
}
