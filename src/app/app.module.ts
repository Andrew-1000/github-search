import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import { GithubService } from './github-services/github.service';
import { GithubComponent } from './github/github.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    
    GithubComponent,
    NotFoundComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RoutingModule,
    AppRoutingModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
