import { Component } from '@angular/core';
import {DEFAULT_INTERRUPTSOURCES, Idle} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';
import {TOKEN_NAME} from './constants/http';
import {Router} from '@angular/router';
import {IDLE_TIME_SECONDS, WARNING_SECONDS} from './constants/sessionTime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'White Board';
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  isLoggedIn   = false;

  constructor(private idle: Idle, private keepalive: Keepalive, private router: Router) {

    if (localStorage.getItem(TOKEN_NAME)) {
      this.isLoggedIn = true;
    }
    if (this.isLoggedIn) {

      // sets an idle timeout of 5 seconds, for testing purposes.
      idle.setIdle(IDLE_TIME_SECONDS);
      // sets a timeout period of 5 seconds. after 10 seconds of inactivity,
      // the user will be considered timed out.
      idle.setTimeout(WARNING_SECONDS);
      // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
      idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

      idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
      idle.onTimeout.subscribe(() => {
        this.idleState = 'Timed out!';
        this.timedOut = true;
        this.router.navigate(['/logout']);

      });
      idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
      idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

      // sets the ping interval to 15 seconds
      keepalive.interval(15);

      keepalive.onPing.subscribe(() => this.lastPing = new Date());

      this.reset();

    }

  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

}
