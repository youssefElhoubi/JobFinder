import { Component } from '@angular/core';
import { JobCardes } from '../job-cardes/job-cardes';
import { PageNav } from "../page-nav/page-nav";

@Component({
  selector: 'app-joblist',
  imports: [JobCardes, PageNav],
  templateUrl: './joblist.html',
  styleUrl: './joblist.css',
})
export class Joblist {

}
