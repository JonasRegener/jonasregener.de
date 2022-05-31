import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  changeText: boolean;
  changeText2: boolean;
  changeText3: boolean;
  changeText4: boolean;

  constructor() { this.changeText = false;
    this.changeText2 = false;
    this.changeText3 = false;
    this.changeText4 = false; }

  ngOnInit(): void {

  }

}
