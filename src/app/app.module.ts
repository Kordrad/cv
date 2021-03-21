import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { IconModule } from '@ant-design/icons-angular';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AvatarSectionComponent } from './components/ui/avatar-section/avatar-section.component';
import { BoldPipe } from './pipe/bold.pipe';
import { CategoryComponent } from './components/ui/category/category.component';
import { ExperienceComponent } from './components/ui/experience/experience.component';
import { JoinPipe } from './pipe/join.pipe';
import { NavComponent } from './components/ui/nav/nav.component';
import { PageComponent } from './components/ui/page/page.component';
import { PersonalDetailsComponent } from './components/ui/personal-details/personal-details.component';
import { PersonalInformationComponent } from './components/ui/personal-information/personal-information.component';
import { SkillBoxComponent } from './components/ui/skill-box/skill-box.component';

// import {APP_BASE_HREF} from '@angular/common';
// AoT requires an exported function for factories
export const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    BoldPipe,
    JoinPipe,
    NavComponent,
    PersonalInformationComponent,
    AvatarSectionComponent,
    SkillBoxComponent,
    PersonalDetailsComponent,
    ExperienceComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    IconModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
