import { Component } from '@angular/core';
import { ApplicationList } from "../../shared/components/applications/application-list/application-list";

@Component({
  selector: 'app-application-page',
  imports: [ApplicationList],
  templateUrl: './application-page.html',
  styleUrl: './application-page.css',
})
export class ApplicationPage {

}
