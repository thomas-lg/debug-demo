import { transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { left, right } from './transitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animRoutes', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ],
})
export class AppComponent {
  title = 'debug-demo';
  animationState!: number;

  constructor(private route: ActivatedRoute) {}

  onActivate() {
    this.animationState = this.route.firstChild!.snapshot.data['routeIdx'];
  }
}
