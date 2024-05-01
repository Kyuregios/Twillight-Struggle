import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ShowCommentsComponent } from './components/show-comments/show-comments.component';
import { DownloadComponent } from './components/download/download.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ShowAllPointsComponent } from './components/show-all-points/show-all-points.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddPlayComponent } from './components/add-play/add-play.component';
import { AboutComponent } from './components/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    HowToPlayComponent,
    CommentsComponent,
    ShowCommentsComponent,
    DownloadComponent,
    MainPageComponent,
    ShowAllPointsComponent,
    AddUserComponent,
    ShowUsersComponent,
    NavbarComponent,
    AddPlayComponent,
    AboutComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
