import { Component, OnInit } from '@angular/core';
import smoothscroll from 'smoothscroll-polyfill/dist/smoothscroll';
import {forEach} from "@angular/router/src/utils/collection"; smoothscroll.polyfill();


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})


export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tabs = ['home','about','projects','resume','contacts'];

  scrollWin(id) {
    document.querySelector('#'+id).scrollIntoView({ behavior: 'smooth' });
    document.getElementById('togglerBut').click();
  }
}
