import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DetailsSectionListInterface } from '../../../domain/interfaces/details-section-list.interface';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInformationComponent {
  @Input() title: string;
  @Input() list: DetailsSectionListInterface[];
}
