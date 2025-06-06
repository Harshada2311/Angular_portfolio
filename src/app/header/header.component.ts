import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';


@Component({
  selector: 'app-header',
  imports: [RouterLink ,RouterOutlet,RouterLinkActive ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
