import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InformationList } from '../../../models/information-list.interface';

@Component({
  selector: 'app-information-section',
  templateUrl: './information-section.component.html',
  styleUrls: ['./information-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationSectionComponent {
  @Input() title: string;
  @Input() list: InformationList[];
}
