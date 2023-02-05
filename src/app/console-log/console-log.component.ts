import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { User } from '../user.model';

@Component({
  selector: 'app-console-log',
  templateUrl: './console-log.component.html',
  styleUrls: ['./console-log.component.scss'],
})
export class ConsoleLogComponent {
  users: User[] = [];

  createUser = () => ({
    name: faker.name.fullName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentence(),
  });

  createUsers = (numUsers = 5) => {
    return Array.from({ length: numUsers }, this.createUser);
  };

  log() {
    console.log(faker.lorem.sentence());
  }

  logError() {
    console.error(faker.address.state());
  }

  logTable() {
    console.table(this.createUsers());
  }

  logTime() {
    console.time();
  }

  logTimeEnd() {
    console.timeEnd();
  }

  logGroup() {
    console.group();
    console.log(faker.lorem.sentence());
    console.table(this.createUsers());
    console.groupEnd();
  }

  logAssertFalse() {
    console.assert(false);
  }
}
