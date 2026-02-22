import { Component, inject } from '@angular/core';
import { Header } from '../../shared/components/home/header/header';
import { Footer } from '../../shared/components/home/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.css',
})
export class HomeLayout {

}
