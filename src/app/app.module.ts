import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { CategoryNavbarComponent } from './Layout/category-navbar/category-navbar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCatgoryComponent } from './pages/single-catgory/single-catgory.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ConditionsAndTermsComponent } from './pages/conditions-and-terms/conditions-and-terms.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PostCardComponent } from './Layout/post-card/post-card.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environments.prod';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleCatgoryComponent,
    SinglePostComponent,
    ConditionsAndTermsComponent,
    
    ContactUsComponent,
         SubscriptionFormComponent,
         CommentFormComponent,
         CommentsListComponent,
         AboutUsComponent,
         PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
