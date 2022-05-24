import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './components/collections/collections.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModelsComponent } from './components/models/models.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'collections', component: CollectionsComponent },
      { path: 'models', component: ModelsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
    ],
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
