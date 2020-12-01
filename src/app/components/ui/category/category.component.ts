import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ExperienceTitle} from '../../../domain/enums/experience-title.enum';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent {
  @Input() date: string[];
  @Input() title: string;
  @Input() position: string;
  @Input() git: string;
  @Input() link: string;
  @Input() type = ExperienceTitle.experience;

  readonly ExperienceTitle = ExperienceTitle;
}
