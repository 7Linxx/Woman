import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './Layout/header/header';
import {Footer} from './Layout/footer/footer';
import {Sidebar} from './Layout/sidebar/sidebar';

@Component({
  imports: [RouterOutlet, Header, Footer, Sidebar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('WOMAN');
}
