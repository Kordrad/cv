import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './core/nav/nav.component';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoRootModule } from './modules/transloco/transloco-root.module';
import { IconModule } from '@ant-design/icons-angular';
import { UtilsService } from './core/services/utils.service';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoModule,
    TranslocoRootModule,
    IconModule
  ],
  providers: [Title, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
