import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { IconModule } from '@ant-design/icons-angular';


import {PageComponent} from './components/page/page.component';
import { BoldPipe } from './pipe/bold.pipe';
import { JoinPipe } from './pipe/join.pipe';
import { SortByDatePipe } from './pipe/sort-by-date.pipe';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}