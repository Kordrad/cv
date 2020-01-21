import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-control-menu',
  templateUrl: './control-menu.component.html',
  styleUrls: ['./control-menu.component.scss']
})
export class ControlMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  setTheme = (theme: string) => {
    document.body.className = theme;
  }
}
