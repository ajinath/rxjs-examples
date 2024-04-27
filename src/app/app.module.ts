import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareComponent } from './operators/share/share.component';
import { HttpClientModule } from '@angular/common/http';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MergeMapComponent } from './operators/merge-map/merge-map.component';
import { ConcatMapComponent } from './operators/concat-map/concat-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ShareComponent,
    SwitchMapComponent,
    SwitchMapComponent,
    MergeMapComponent,
    ConcatMapComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
