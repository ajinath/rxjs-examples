import { Component, OnInit } from '@angular/core';
import { AppService, Post } from '../../app.service';
import { Observable, Subject, delay, from, map, mergeMap, of, scan } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.css'
})
export class MergeMapComponent implements OnInit {

  posts$: Subject<Post[]> = new Subject();

  constructor(private readonly appService: AppService) {

  }

  ngOnInit(): void {
    this.fetchPostsByIds();
  }

  fetchPostsByIds() {
    const postsIds = [1,2,3,4,5];
    let sequenceNumber = 0;
    const posts:any = [];
    from(postsIds).pipe(
      mergeMap((postId: number, index: number) => this.appService.getPostById(postId, index)),
      scan((acc: Post[], post: any) => [ ...acc, post], [])
    ).subscribe((result:any[]) => {
      let sequentialPost = result.find((post:any) => post.index === sequenceNumber);
      while(sequentialPost) {
        sequenceNumber++;
        posts.push(sequentialPost.post)
        this.posts$.next(posts);
        sequentialPost = result.find((post:any) => post.index === sequenceNumber); 
      }
    })
  }

}
