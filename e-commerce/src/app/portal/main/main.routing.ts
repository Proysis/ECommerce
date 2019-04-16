import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path:"", component:MainComponent},
];

export const MainRoutes = RouterModule.forChild(routes);
