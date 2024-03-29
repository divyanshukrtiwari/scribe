import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { ViewComponent } from './view/view.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes:Routes=[{
  path:'', redirectTo:'home', pathMatch:'full'
},{
  path:'home', component:HomeComponent
},{
  path:'login', component:LoginComponent
},{
  path:'myBlogs', component:MyBlogsComponent,
  canActivate:[AuthGuard]
},{
  path:'profile/:id', component:ProfileComponent
},{
  path: 'edit-profile/:id', component:EditProfileComponent
},{
  path:'view/:postId', component:ViewComponent
},{
  path:'**', redirectTo:'home'
}]

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
