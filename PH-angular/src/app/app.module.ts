import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/partials/footer/footer.component';
import { HeaderComponent } from './component/partials/header/header.component';
import { IndexComponent } from './component/full/index/index.component';
import { LoginComponent } from './component/full/login/login.component';
import { SignUpComponent } from './component/full/sign-up/sign-up.component';
import { BrowseProjectsComponent } from './component/full/browse-projects/browse-projects.component';
import { ProfileComponent } from './component/full/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    SignUpComponent,
    BrowseProjectsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
