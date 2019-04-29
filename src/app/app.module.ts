import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { ServersService } from './servers/servers.service';
import { UsersService } from './users/users.service';


const appRoutes:Routes = [
  {path: "users", component: UsersComponent},
  {path: "servers", component:ServersComponent},
  {path:"user", component:UserComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
