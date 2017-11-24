import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CommunService } from './commun.service'


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'userList', component: UsersListComponent },
  { path: 'userDetails', component: UserDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)// { enableTracing: true } // <-- debugging purposes only
  ],
  providers: [ CommunService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
