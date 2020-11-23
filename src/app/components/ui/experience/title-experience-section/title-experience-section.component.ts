import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ExperienceTitle} from '../../../../domain/enums/experience-title.enum';

@Component({
  selector: 'app-title-experience-section',
  templateUrl: './title-experience-section.component.html',
  styleUrls: ['./title-experience-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleExperienceSectionComponent {
  @Input() date: string[];
  @Input() title: string;
  @Input() position: string;
  @Input() type = ExperienceTitle.experience;

  readonly ExperienceTitle = ExperienceTitle;
}
