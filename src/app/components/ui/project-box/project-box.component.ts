import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectBoxComponent {
  @Input() title: string;
  @Input() link: string;
  @Input() git: string;
}
