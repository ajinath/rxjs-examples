import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareComponent } from './operators/share/share.component';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';
import { MergeMapComponent } from './operators/merge-map/merge-map.component';
import { ConcatMapComponent } from './operators/concat-map/concat-map.component';
import { ExhaustMapComponent } from './operators/exhaust-map/exhaust-map.component';
import { MergeScanComponent } from './operators/merge-scan/merge-scan.component';
import { FilterComponent } from './operators/filter/filter.component';
import { TotoListComponent } from './toto-list/toto-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShareComponent,
    SwitchMapComponent,
    SwitchMapComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ExhaustMapComponent,
    MergeScanComponent,
    FilterComponent,
    TotoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
