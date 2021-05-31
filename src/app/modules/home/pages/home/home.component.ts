import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ExperienceTitle } from '../../models/enums/experience-title.enum';
import { ActivatedRoute } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { IconService } from '@ant-design/icons-angular';
import {
  CaretUpFill,
  GithubFill,
  LinkedinFill,
  MailFill,
  PhoneFill
} from '@ant-design/icons-angular/icons';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Translations } from '../../models/translations.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  data$: Observable<Translations.Data> = this._translate
    .selectTranslate([
      'contact.data',
      'languages.data',
      'hobbies.data',
      'skills.data',
      'additionalSkills.data',
      'programs.data',
      'experience.data',
      'projects.data'
    ])
    .pipe(
      map(
        ([
          contact,
          languages,
          hobbies,
          skills,
          additionalSkills,
          programs,
          experience,
          projects
        ]) => ({
          contact,
          languages,
          hobbies,
          skills,
          additionalSkills,
          programs,
          experience,
          projects
        })
      )
    );

  readonly categoryType = ExperienceTitle.category;

  private readonly icons = [
    PhoneFill,
    MailFill,
    LinkedinFill,
    GithubFill,
    CaretUpFill
  ];

  constructor(
    private _route: ActivatedRoute,
    private _translate: TranslocoService,
    private _iconService: IconService
  ) {}

  ngOnInit(): void {
    this.addIcons();
    this.setTranslation();
  }

  addIcons(): void {
    this._iconService.addIcon(...this.icons);
  }

  setTranslation(): void {
    const lang = this._route.snapshot.paramMap.get('lang');
    this._translate.setActiveLang(`${lang}`);
  }
}
