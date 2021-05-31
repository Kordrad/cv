import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './details-section.component.html',
  styleUrls: ['./details-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsSectionComponent {
  @Input() title: string;
}
