import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponent } from 'src/components/analysis/analysis.component';
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { ContactComponent } from '../components/contact/contact.component';

const routes: Routes = [
  {path: 'analysis/analysis', component: AnalysisComponent},
  {path: 'analysis/about', component: AboutComponent},
  {path: 'analysis/home', component: HomeComponent},
  {path: 'analysis/contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
