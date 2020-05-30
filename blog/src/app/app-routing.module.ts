import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {BlogItemDetailsComponent} from "./components/blog-item-details/blog-item-details.component";
import {BlogHomeComponent} from "./components/blog-home/blog-home.component";
import {AddPostComponent} from "./components/add-post/add-post.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate : [AuthGuardService]
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'blog',
    component: BlogHomeComponent,
  },
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailsComponent,
  },
  {
    path: 'add-post',
    component: AddPostComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
