import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageComponent } from './components/ui/page/page.component';

const routes: Routes = [
  { path: ':lang', component: PageComponent },
  { path: '', redirectTo: '/en', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
