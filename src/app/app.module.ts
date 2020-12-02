import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {IconModule} from '@ant-design/icons-angular';


import {PageComponent} from './components/ui/page/page.component';
import {BoldPipe} from './pipe/bold.pipe';
import {JoinPipe} from './pipe/join.pipe';
import {SortByDatePipe} from './pipe/sort-by-date.pipe';
import {NavComponent} from './components/ui/nav/nav.component';
import {HasTranslationPipe} from './pipe/has-translation.pipe';
import {PersonalInformationComponent} from './components/ui/personal-information/personal-information.component';
import {AvatarSectionComponent} from './components/ui/avatar-section/avatar-section.component';
import {SkillBoxComponent} from './components/ui/skill-box/skill-box.component';
import {PersonalDetailsComponent} from './components/ui/personal-details/personal-details.component';
import {ExperienceComponent} from './components/ui/experience/experience.component';
import {CategoryComponent} from './components/ui/category/category.component';

// import {APP_BASE_HREF} from '@angular/common';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    BoldPipe,
    JoinPipe,
    SortByDatePipe,
    NavComponent,
    HasTranslationPipe,
    PersonalInformationComponent,
    AvatarSectionComponent,
    SkillBoxComponent,
    PersonalDetailsComponent,
    ExperienceComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    IconModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {
}
