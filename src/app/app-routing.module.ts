import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareComponent } from './operators/share/share.component';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';
import { MergeMapComponent } from './operators/merge-map/merge-map.component';
import { ConcatMapComponent } from './operators/concat-map/concat-map.component';
import { ExhaustMapComponent } from './operators/exhaust-map/exhaust-map.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { 
    path: '',
    component: AppComponent,
    data: { title: '' },
  },
  { 
    path: 'share',
    component: ShareComponent,
    data: { title: 'share' }
  },
  { 
    path: 'switch-map',
    component: SwitchMapComponent,
    data: { title: 'switchMap' }
  },
  {
    path: 'merge-map',
    component: MergeMapComponent,
    data: { title: 'mergeMap' }
  },
  {
    path: 'concat-map',
    component: ConcatMapComponent,
    data: { title: 'concatMap' }
  },
  {
    path: 'exhaust-map',
    component: ExhaustMapComponent,
    data: { title: 'exhaustMap' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
