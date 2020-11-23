import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {first} from 'rxjs/operators';

@Pipe({
  name: 'hasTranslation'
})
export class HasTranslationPipe implements PipeTransform {

  constructor(private translateService: TranslateService) {
  }

  async transform(key: string): Promise<boolean> {
    const translation = this.translateService.instant(key);
    const translationResults = await this.translateService.get(key).pipe(first()).toPromise();
    return ((translation) !== key && translation !== '') || (!!translationResults && translationResults !== key);
  }
}
