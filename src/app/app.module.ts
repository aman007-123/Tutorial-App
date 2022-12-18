import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponent } from './forms/reactive/reactive.component';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { FormsComponent } from './forms/forms.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CommunicationComponent } from './communication/communication.component';
import { MiscellanousComponent } from './miscellanous/miscellanous.component';
import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';
import { TdfComponent } from './forms/tdf/tdf.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    HomepageComponent,
    DirectivesComponent,
    PipesComponent,
    ServicesComponent,
    FormsComponent,
    RxjsComponent,
    CommunicationComponent,
    MiscellanousComponent,
    ParentComponent,
    ChildComponent,
    TdfComponent,
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
