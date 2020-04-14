import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {AdminUplodComponent} from './admin-uplod/admin-uplod.component';
import {HomeComponent} from './home/home.component';
import {UplodComponent} from './uplod/uplod.component';


const routes: Routes = [
 { path:'uplod',
 component:UplodComponent
},
{
  path:'home',
  component:HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
