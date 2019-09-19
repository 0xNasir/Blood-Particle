import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ManageBloodComponent} from './manage-blood/manage-blood.component';


const routes: Routes = [
  {path: 'browse/blood', component: ManageBloodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
