import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountdownComponent } from './countdown/countdown.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  { path: 'countdown', component: CountdownComponent },
  { path: '', component: MapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
