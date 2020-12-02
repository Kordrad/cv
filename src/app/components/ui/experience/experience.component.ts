import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ExperienceSubcategoryInterface } from '../../../domain/interfaces/experience-subcategory.interface';
import { ExperienceTitle } from '../../../domain/enums/experience-title.enum';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  @Input() title: string;
  @Input() date: string[];
  @Input() position: string;
  @Input() description: string;
  @Input() subcategory: ExperienceSubcategoryInterface[] = [];

  readonly categoryType = ExperienceTitle.category;
}
