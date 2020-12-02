import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-section',
  templateUrl: './avatar-section.component.html',
  styleUrls: ['./avatar-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarSectionComponent {
  @Input() name: string;
  @Input() position: string;

  @Input() url: string;
  @Input() id = 'user';
}
