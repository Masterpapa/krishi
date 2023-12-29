import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drip-irrigation',
  templateUrl: './drip-irrigation.component.html',
  styleUrls: ['./drip-irrigation.component.scss']
})
export class DripIrrigationComponent implements OnInit {
  currentPage="Drip Irrigation";
  constructor() { }

  ngOnInit(): void {
  }

}
