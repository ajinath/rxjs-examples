import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppService, Post } from '../../app.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrl: './share.component.css'
})
export class ShareComponent implements OnInit, AfterViewInit {

  posts$: Observable<Post[]> = of([])

  constructor(private readonly appService: AppService) {

  }

  ngOnInit(): void {

    console.log("share component")

    this.posts$ = this.appService.getPosts();

    this.appService.getPosts().subscribe((posts) => {
      console.log(posts)
    });

    this.appService.getPosts().subscribe((posts) => {
      console.log(posts)
    });
  }

  ngAfterViewInit(): void {
    
    this.appService.getPosts().subscribe((posts) => {
      console.log(posts)
    });

    this.appService.getPosts().subscribe((posts) => {
      console.log(posts)
    });
  }
}
