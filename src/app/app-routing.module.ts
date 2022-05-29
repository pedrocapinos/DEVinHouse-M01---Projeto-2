import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionFormComponent } from './components/collection-form/collection-form.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutSubComponent } from './components/layout-sub/layout-sub.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { ModelFormComponent } from './components/model-form/model-form.component';
import { ModelsComponent } from './components/models/models.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent},
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'collections',
        component: LayoutSubComponent,
        children: [
          { path: '', component: CollectionsComponent},
          { path: 'newcollection', component: CollectionFormComponent},
          { path: 'editcollection/:id', component: CollectionFormComponent}
        ]
      },
      { path: 'models',
        component: LayoutSubComponent,
        children: [
          { path: '', component: ModelsComponent},
          { path: 'newmodel', component: ModelFormComponent},
          { path: 'editmodel/:id', component: ModelFormComponent}
        ]
      },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
    ]
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
