import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ShowCommentsComponent } from './components/show-comments/show-comments.component';
import { DownloadComponent } from './components/download/download.component';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { ShowAllPointsComponent } from './components/show-all-points/show-all-points.component';
import { AddPlayComponent } from './components/add-play/add-play.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path: 'home', component: MainPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  {path: 'comments', component: CommentsComponent, canActivate: [AuthGuard]},
  {path: 'show_comments', component: ShowCommentsComponent, canActivate: [AuthGuard, RoleGuard]},
  {path: 'download', component: DownloadComponent},
  {path: 'how_to_play', component: HowToPlayComponent},
  {path: 'add_user', component: AddUserComponent, canActivate: [AuthGuard, RoleGuard]},
  {path: 'show_users', component: ShowUsersComponent, canActivate: [AuthGuard, RoleGuard]},
  {path: 'show_all_points', component: ShowAllPointsComponent, canActivate: [AuthGuard, RoleGuard]},
  {path: 'add_play', component: AddPlayComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  { path: '**', component: NotfoundComponent } // Manejo de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
