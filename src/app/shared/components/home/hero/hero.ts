import { Component } from '@angular/core';
import { Joblist } from "../../jobs/joblist/joblist";

@Component({
  selector: 'app-hero',
  imports: [Joblist],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
