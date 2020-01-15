import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  contacts: object[];

  constructor(
    private route: ActivatedRoute,
    public translate: TranslateService) {

    translate.get('contact.child').subscribe((res: []) => {
      this.contacts = res;
      console.log(res);
      // => 'hello world'
    });
  }

  ngOnInit() {
    const lang = this.route.snapshot.paramMap.get('lang');
    this.translate.use(`${lang}`);
  }
}
