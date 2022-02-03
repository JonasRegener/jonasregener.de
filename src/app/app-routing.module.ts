import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ProjectsComponent } from './projects/projects.component';
import { SlideshowComponent } from './slideshow/slideshow.component';


const routes: Routes = [
  {path: '', component: SlideshowComponent },
  {path: 'imprint', component: ImprintComponent },
  {path: 'data-protection', component: DataProtectionComponent },
  {path: 'projects', component: ProjectsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
