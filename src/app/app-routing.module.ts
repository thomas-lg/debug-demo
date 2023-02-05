import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleLogComponent } from './console-log/console-log.component';
import { DebugComponent } from './debug/debug.component';
import { HomeComponent } from './home/home.component';
import { WhatsMoreComponent } from './whats-more/whats-more.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { routeIdx: 0 } },
  {
    path: 'console-log',
    component: ConsoleLogComponent,
    data: { routeIdx: 1 },
  },
  { path: 'debug', component: DebugComponent, data: { routeIdx: 2 } },
  { path: 'whats-more', component: WhatsMoreComponent, data: { routeIdx: 3 } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
