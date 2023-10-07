import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css']
})



export class LoadingIndicatorComponent implements OnInit {
  constructor(public loadingService: LoadingService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // ...
}

