import {Component, AfterViewInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'cv';
  constructor(private route: ActivatedRoute, public translate: TranslateService) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
  }

  checkLang = () => console.log(this.route.snapshot.paramMap.get('lang'));

  ngAfterViewInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('animal'));
    });
  }

}
