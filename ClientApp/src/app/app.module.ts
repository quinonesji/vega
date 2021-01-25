import * as Raven from 'raven-js'; 
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ToastrModule } from 'ngx-toastr';  

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { AppErrorHandler } from './app.error-handler';
import { VehicleService } from 'src/services/vehicle.service';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { PaginationComponent } from 'src/shared/pagination.component';

Raven.config('https://69d77f18f60e4823b27fe4b5c1236bbf@o508257.ingest.sentry.io/5600631').install();

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    VehicleFormComponent,
    VehicleListComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 10000, closeButton: true }),
    RouterModule.forRoot([
      { path: '', component: VehicleListComponent, pathMatch: 'full' },
      { path: 'vehicles', component: VehicleListComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'vehicles/:id', component: VehicleFormComponent },
      { path: 'vehicles/new', component: VehicleFormComponent }
    ])
  ],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler },
    VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
