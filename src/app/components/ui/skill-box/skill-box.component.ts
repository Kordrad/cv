import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SkillBoxSectionListInterface} from '../../../domain/interfaces/skill-box-section-list.interface';

@Component({
  selector: 'app-skill-box',
  templateUrl: './skill-box.component.html',
  styleUrls: ['./skill-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillBoxComponent {
  @Input() skillTitle: string;
  @Input() additionalSkillTitle: string;
  @Input() programsTitle: string;

  @Input() skillLevel: SkillBoxSectionListInterface[];
  @Input() additionalSkills: string;
  @Input() programs: string;

}
