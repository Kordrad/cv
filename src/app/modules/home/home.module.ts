import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { JoinPipe } from '../../core/pipe/join.pipe';
import { SkillSectionComponent } from './components/sections/skill-section/skill-section.component';
import { AvatarSectionComponent } from './components/sections/avatar-section/avatar-section.component';
import { InformationSectionComponent } from './components/sections/information-section/information-section.component';
import { DetailsSectionComponent } from './components/sections/details-section/details-section.component';
import { CategoryComponent } from './components/category/category.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { IconModule } from '@ant-design/icons-angular';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/en', pathMatch: 'full' },
  { path: ':lang', component: HomeComponent }
];

@NgModule({
  declarations: [
    SkillSectionComponent,
    AvatarSectionComponent,
    InformationSectionComponent,
    DetailsSectionComponent,
    CategoryComponent,
    ExperienceComponent,
    HomeComponent,
    JoinPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslocoModule,
    IconModule
  ]
})
export class HomeModule {}
