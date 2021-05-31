import { Subcategory } from './subcategory.interface';
import { date } from './types/date.type';

export interface Work {
  date: date;
  title: string;
  position: string;
  description: string;
  subcategory: Subcategory[];
}
