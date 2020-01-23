import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-control-menu',
  templateUrl: './control-menu.component.html',
  styleUrls: ['./control-menu.component.scss']
})
export class ControlMenuComponent implements OnInit {

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
  }

  setTheme = (theme: string) => {
    document.body.className = theme;
  }

  changeLang = (lang: string) => {
    this.translate.use(lang);
  }
}
