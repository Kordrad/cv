import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ExperienceTitle } from '../../models/enums/experience-title.enum';
import { Subcategory } from '../../models/subcategory.interface';

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
  @Input() subcategory: Subcategory[] = [];

  readonly categoryType = ExperienceTitle.category;
}
