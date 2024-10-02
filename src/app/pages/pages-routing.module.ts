import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  { path: 'information', component: InformationComponent },
  { path: 'blog', component: BlogpostComponent },
  { path: 'timeline', component: TimelineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
