import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user:any[];
  repo: any[];
  uName: string;

  constructor(private githubService:GithubService) {
    this.githubService.getUser().subscribe(user => {

      this.user = user;
    });

    this.githubService.getRepo().subscribe(repo => {
      
      this.repo = repo;
    })
   }


   findProfile() {
     this.githubService.updateUser(this.uName);

     this.githubService.getUser().subscribe(user => {
       this.user = user;
     });

     this.githubService.getRepo().subscribe(repo => {

      this.repo = this.repo
      
     })
   }


  ngOnInit() {
  }

}
