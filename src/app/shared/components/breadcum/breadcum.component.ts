import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcum',
  templateUrl: './breadcum.component.html',
  styleUrls: ['./breadcum.component.scss']
})
export class BreadcumComponent implements OnInit {
  @Input() pageName?:string;
  constructor() { }

  ngOnInit(): void {
  }

}
