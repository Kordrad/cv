import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillSectionComponent {
  @Input() skillTitle: string;
  @Input() additionalSkillTitle: string;
  @Input() programsTitle: string;

  @Input() skillLevel: string[];
  @Input() additionalSkills: string;
  @Input() programs: string;
}
