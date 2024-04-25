import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, share } from 'rxjs';

export interface Post {
  id: number
  userId: number
  body: string
  title: string
}


@Injectable({
  providedIn: 'root'
})

export class AppService {
  private host = 'https://jsonplaceholder.typicode.com';
  private searchHost = 'https://demo.dataverse.org/api/search';

  private posts$: Observable<Post[]>;

  constructor(private http: HttpClient) {
    this.posts$ = this.http.get<any>(`${this.host}/posts`).pipe(share());
  }

  getPosts() {
    return this.posts$.pipe(
      map((data: Post[]) => data.slice(0,5)), 
      catchError((err) => { 
        console.log("ERROR: fetching posts", err);
        return of([]);
    }));
  }

  getSearchResult(searchStr: any) {
    return this.http.get(`${this.searchHost}?q=${searchStr}`).pipe(
      map((res: any) => res.data ? res.data.items : []),
      catchError((err) => { 
        console.log("ERROR: search data", err);
        return of([]);
      })
    );
  }

  getPostById(postId: number, index: number) {
    return this.http.get<any>(`${this.host}/posts/${postId}`).pipe(
      map(post => {
        return { post, index }
      }),
      catchError((err) => { 
        console.log("ERROR: search data", err);
        return of({});
      })
    );
  }

}
