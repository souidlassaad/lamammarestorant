import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor() { }
  display : boolean = false;
  ngOnInit(): void {
  }
  showDialog() {
    this.display = true;
}
}