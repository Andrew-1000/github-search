import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { GithubComponent } from '../github/github.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';



const routes:Routes=[
  {path:"", component: GithubComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"**", component:NotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports:[RouterModule],
  declarations: []
})

export class RoutingModule {

}