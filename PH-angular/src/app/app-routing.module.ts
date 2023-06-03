import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseProjectsComponent } from './component/full/browse-projects/browse-projects.component';
import { IndexComponent } from './component/full/index/index.component';
import { LoginComponent } from './component/full/login/login.component';
import { ProfileComponent } from './component/full/profile/profile.component';
import { SignUpComponent } from './component/full/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'browse', component: BrowseProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
