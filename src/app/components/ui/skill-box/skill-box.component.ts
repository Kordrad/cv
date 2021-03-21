import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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

  @Input() skillLevel: string[];
  @Input() additionalSkills: string;
  @Input() programs: string;
}
