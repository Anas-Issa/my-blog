import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCatgoryComponent } from './pages/single-catgory/single-catgory.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ConditionsAndTermsComponent } from './pages/conditions-and-terms/conditions-and-terms.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'category/:category/:id',component:SingleCatgoryComponent},
  {path:'post/:id',component:SinglePostComponent},

  {path:'about',component:AboutUsComponent},
  {path:'terms-conditions',component:ConditionsAndTermsComponent},
  {path:"contact",component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
