import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ExperienceTitle} from '../../../../domain/enums/experience-title.enum';

@Component({
  selector: 'app-sub-category-experience',
  templateUrl: './category-experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryExperienceComponent {
  @Input() date: string[];
  @Input() title: string;
  @Input() description: string;

  readonly categoryType = ExperienceTitle.category;
}
