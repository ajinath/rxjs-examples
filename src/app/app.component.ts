import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'rxjs-examples';

  constructor(private readonly appService: AppService) {

  }

  ngOnInit(): void {
    console.log("app component")
    // this.appService.getPosts().subscribe((posts) => {
    //   console.log(posts)
    // });
  }


}
