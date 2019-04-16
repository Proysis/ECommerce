import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { routes } from './portal.routing';
import { MainModule } from './main/main.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    MainModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PortalComponent, AuthComponent]
})
export class PortalModule { }
