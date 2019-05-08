import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gifs: Object;
  h1Style: boolean = false;
  constructor(private data: DataService) { }
  firstClick() {
    this.data.firstClick();
  
  }
  ngOnInit() {
    this.data.getGifs().subscribe(data => {
      this.gifs = data
      console.log(this.gifs);
    }
  );
  }

}
