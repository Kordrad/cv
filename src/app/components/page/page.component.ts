import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { IconService } from '@ant-design/icons-angular';
import { MailFill, LinkedinFill, GithubFill } from '@ant-design/icons-angular/icons'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {
  contacts: object[];

  constructor(
    private route: ActivatedRoute,
    public translate: TranslateService,
    private iconService: IconService) {
    this.iconService.addIcon(...[ MailFill, LinkedinFill, GithubFill ]);

    translate.get('contact.child').subscribe((res: []) => {
      this.contacts = res;
    });
  }

  ngOnInit() {
    const lang = this.route.snapshot.paramMap.get('lang');
    this.translate.use(`${lang}`);
  }
}
