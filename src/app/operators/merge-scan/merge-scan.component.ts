import { Component, OnInit } from '@angular/core';
import { Observable, concatAll, from, fromEvent, map, mergeAll, mergeScan, of, scan } from 'rxjs';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-merge-scan',
  templateUrl: './merge-scan.component.html',
  styleUrl: './merge-scan.component.css'
})
export class MergeScanComponent implements OnInit {

  counter$: Observable<number> = of(0);

  constructor(private readonly apiService: AppService) {

  }


  ngOnInit(): void {
    this.counter$ = fromEvent(document, 'click').pipe(
      map(() => 1),
      mergeScan((acc: any, event ) => of(acc + event), 0)
    )
    this.fetchPostsByIds();
  }

  fetchPostsByIds() {
    const postsIds = [1,2,3,4,5];
    let sequenceNumber = 0;
    const posts:any = [];
    
    from(postsIds).pipe(
      map((postId: number) => this.apiService.getPostById(postId)),
      concatAll()
    ).subscribe(result => {
      console.log("result = ", result)
    })
  }
}
