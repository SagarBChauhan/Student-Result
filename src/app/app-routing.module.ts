import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMarksComponent } from './add-marks/add-marks.component';
import { ViewResultComponent } from './view-result/view-result.component';

const routes: Routes = [
  {path: '',component:AddMarksComponent},
  {path: 'viewResult',component:ViewResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
