import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageComponent} from './components/page/page.component';

// Pages



const routes: Routes = [
  {path: ':lang', component: PageComponent},
  {path: '', redirectTo: '/en', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
