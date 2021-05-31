import { ContactLink } from './contact-link.inteface';
import { Language } from './language.interface';

export interface InformationList
  extends Partial<ContactLink>,
    Partial<Language> {
  title: string;
}
