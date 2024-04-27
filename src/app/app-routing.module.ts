import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareComponent } from './operators/share/share.component';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';
import { MergeMapComponent } from './operators/merge-map/merge-map.component';
import { ConcatMapComponent } from './operators/concat-map/concat-map.component';
import { ExhaustMapComponent } from './operators/exhaust-map/exhaust-map.component';

const routes: Routes = [
  { 
    path: 'share',
    component: ShareComponent
  },
  { 
    path: 'switch-map',
    component: SwitchMapComponent
  },
  {
    path: 'merge-map',
    component: MergeMapComponent
  },
  {
    path: 'concat-map',
    component: ConcatMapComponent
  },
  {
    path: 'exhaust-map',
    component: ExhaustMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
