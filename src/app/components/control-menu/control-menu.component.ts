import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {IconService} from '@ant-design/icons-angular';
import {CaretUpFill, GithubFill, LinkedinFill, MailFill, PhoneFill, PrinterFill} from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-control-menu',
  templateUrl: './control-menu.component.html',
  styleUrls: ['./control-menu.component.scss']
})
export class ControlMenuComponent implements OnInit {

  constructor(public translate: TranslateService, private iconService: IconService) {
    this.iconService.addIcon(...[PrinterFill]);
  }

  ngOnInit() {
  }

  setTheme = (theme: string) => {
    document.body.className = theme;
  };

  changeLang = (lang: string) => {
    this.translate.use(lang);
  };

  print = () => {
    alert('To print CV, please remove margins in print settings.');
    window.print();
  }
}
