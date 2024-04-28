import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Observable, filter, find, map, of, pipe, scan, tap, zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title$: Observable<string> = of('');

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
