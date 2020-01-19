import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {IconService} from '@ant-design/icons-angular';
import {PhoneFill, MailFill, LinkedinFill, GithubFill} from '@ant-design/icons-angular/icons';

// tslint:disable-next-line:class-name
interface Job {
  date: string[];
  title: string;
  description?: string;
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})


export class PageComponent implements OnInit {
  contacts: object[];
  languages: object[];
  experience: object[];

  constructor(
    private route: ActivatedRoute,
    public translate: TranslateService,
    private iconService: IconService) {
    this.iconService.addIcon(...[PhoneFill, MailFill, LinkedinFill, GithubFill]);

    translate.get('contact.child').subscribe((res: []) => {
      this.contacts = res;
    });

    translate.get('languages.child').subscribe((res: []) => {
      this.languages = res;
    });


    translate.get('experience.child').subscribe((res: []) => {
      this.experience = res
        .map((job: []) => job.sort(((jobPositionA: Job, jobPositionB: Job) => {
          let dateA = new Date(jobPositionA.date[0]).getTime();
          let dateB = new Date(jobPositionB.date[0]).getTime();
          if (isNaN(dateA)) {
            dateA = new Date().getTime();
          }
          dateA = isNaN(dateA) ? new Date().getTime() : dateA;
          dateB = isNaN(dateB) ? new Date().getTime() : dateB;

          console.log(dateA, dateB);
          return dateB - dateA;
        })))

        .sort((jobA: Job[], jobB: Job[]) => {
          let dateJob1 = new Date(jobA[0].date[0]).getTime();
          let dateJob2 = new Date(jobB[0].date[0]).getTime();

          dateJob1 = isNaN(dateJob1) ? new Date().getTime() : dateJob1;
          dateJob2 = isNaN(dateJob2) ? new Date().getTime() : dateJob2;
          console.log(dateJob1, dateJob2);
          return dateJob2 - dateJob1;
        });

      console.log(this.experience);
    });
  }

  ngOnInit() {
    const lang = this.route.snapshot.paramMap.get('lang');
    this.translate.use(`${lang}`);
  }
}
