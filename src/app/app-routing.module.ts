import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './communication/communication.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { TdfComponent } from './forms/tdf/tdf.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MiscellanousComponent } from './miscellanous/miscellanous.component';
import { PipesComponent } from './pipes/pipes.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'bindings', component: DataBindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'tdf', component: TdfComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'miscellanous', component: MiscellanousComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
