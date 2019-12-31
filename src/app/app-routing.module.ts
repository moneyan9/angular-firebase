import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FeaturesComponent } from './components/features/features.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes =
  [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'features',
      component: FeaturesComponent,
      canActivate: [AuthGuard],
    },
    {
      path: '**',
      component: FeaturesComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
