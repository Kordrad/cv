import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  generateTitle(name: string, lang = ''): string {
    return `${name} - CV ${lang.toUpperCase()}`.trim();
  }
}
