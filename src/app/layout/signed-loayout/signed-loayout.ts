import { Component } from '@angular/core';
import { Nav } from "../../shared/components/signed/home/nav/nav";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-signed-loayout',
  imports: [Nav, RouterOutlet],
  templateUrl: './signed-loayout.html',
  styleUrl: './signed-loayout.css',
})
export class SignedLoayout {

}
