import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, delay, exhaustMap, fromEvent, of, tap } from 'rxjs';
import { AppService, Post } from '../../app.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.css'
})
export class ExhaustMapComponent implements AfterViewInit {

  post$: Observable<Post> = of(); 

  clicksCount = 0;
  apiCallsCount = 0;

  @ViewChild('fetchPost') getPostBtn!: ElementRef<HTMLElement>;

  constructor(private apiService: AppService) {
  }

  ngAfterViewInit(): void {
    this.post$ = fromEvent(this.getPostBtn.nativeElement, 'click')
      .pipe(
        tap(() => this.clicksCount++),
        exhaustMap(() => this.apiService.getPostById(1).pipe(delay(2000))),
        tap(() => this.apiCallsCount++)
      );
  }

}
