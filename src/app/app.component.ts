import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Observable, filter, of, scan } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title$: Observable<string> = of('');

  operators = {
    transformation: [
      { name: 'mergeMap', value: ['/merge-map'] },
      { name: 'scan', value: ['/scan'] },
      { name: 'switchMap', value: ['/switch-map'] },
      { name: 'concatMap', value: ['/concat-map'] },
      { name: 'exhaustMap', value: ['/exhaust-map'] },
      { name: 'mergeScan', value: ['/merge-scan'] }
    ],
    multicating: [
      { name: 'share', value: ['/share'] },
    ]
  }

  constructor(private router:Router) {

  }

  ngOnInit(): void {
    this.title$ = this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        scan((acc, event:any) => acc = event.snapshot.data['title'], '')
      )
  }

}
