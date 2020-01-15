import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public translate: TranslateService) {
  }

  ngOnInit() {
    const lang = this.route.snapshot.paramMap.get('lang');
    this.translate.use(`${lang}`);
  }
}
