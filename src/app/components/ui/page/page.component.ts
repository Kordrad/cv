import {
  CaretUpFill,
  GithubFill,
  LinkedinFill,
  MailFill,
  PhoneFill
} from '@ant-design/icons-angular/icons';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperienceTitle } from '../../../domain/enums/experience-title.enum';
import { IconService } from '@ant-design/icons-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent {
  readonly categoryType = ExperienceTitle.category;

  constructor(
    private route: ActivatedRoute,
    public translate: TranslateService,
    private iconService: IconService
  ) {
    const lang = this.route.snapshot.paramMap.get('lang');
    this.translate.use(`${lang}`);

    this.iconService.addIcon(
      ...[PhoneFill, MailFill, LinkedinFill, GithubFill, CaretUpFill]
    );
  }
}
