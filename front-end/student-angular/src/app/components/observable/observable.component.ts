import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs-compat/add/observable/interval';




@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  second: any;
  constructor(){

  }

  ngOnInit(): void {
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value: number) => {
        this.second = value;
      }
    )
  }

}
