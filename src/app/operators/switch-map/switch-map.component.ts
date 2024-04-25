import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Observable, debounceTime, of, pipe, switchMap, tap } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.css'
})
export class SwitchMapComponent implements OnInit, AfterViewInit {
  
  searchStr = new FormControl('');
  searchResult$: Observable<any[]> = of([])
  loading = true; 
  defaultSearchTerm = 'a';

  constructor(private readonly appService: AppService) {

  }

  ngOnInit(): void {
    this.performSearch();
  }

  ngAfterViewInit(): void {
    this.searchStr.setValue(this.defaultSearchTerm);
  }

  performSearch() {
    this.searchResult$ = this.searchStr.valueChanges.pipe(
      pipe(debounceTime(500)),
      switchMap((searchstr) => { 
        this.loading = true;
        return this.appService.getSearchResult(searchstr).pipe(
          tap(() =>  this.loading = false )
        )
      })
    );
  }

}
