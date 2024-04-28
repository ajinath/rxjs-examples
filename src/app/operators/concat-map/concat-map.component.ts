import { Component, OnInit } from '@angular/core';
import { AppService, Post } from '../../app.service';
import { Observable, catchError, concatMap, delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.css'
})
export class ConcatMapComponent implements OnInit {

  post$: Observable<Post> = of(); 
  comments$: Observable<any> = of([]); 
  loading = true

  constructor(private readonly appService: AppService ) {

  }

  ngOnInit(): void {
    const postId = 1;
    this.comments$ = this.appService.getPostById(postId).pipe(
      tap((post: Post) =>  this.post$ = of(post)),
      delay(100),  // add to show loading
      concatMap(post => this.appService.getCommentsByPostId(post.id)),
      tap(() =>  this.loading = false ),
      catchError( (err) => {
        console.log('error', err);
        return of([]);
      })
    );
  }
}
