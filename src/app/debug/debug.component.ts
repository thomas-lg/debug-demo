import { Component, OnDestroy } from '@angular/core';
import { faker } from '@faker-js/faker';
import { filter, from, map, Observable, Subscription, toArray } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss'],
})
export class DebugComponent implements OnDestroy {
  users: User[] = [];
  sub?: Subscription;

  createUser = () => ({
    name: faker.name.fullName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentence(),
  });

  createUsers = (numUsers = 5): Observable<User> => {
    const users = [
      ...Array.from({ length: numUsers }, this.createUser),
      {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
      },
    ];
    return from(users);
  };

  log() {
    debugger;
    console.log(faker.lorem.sentence());
  }

  logTable() {
    const users = this.createUsers();
    this.sub = users
      .pipe(
        filter((user) => !user.bio),
        map((user) => {
          const newMail = `${user.name
            .toLowerCase()
            .split(' ')
            .join('_')}@debug.com`;
          return {
            ...user,
            email: newMail,
          };
        }),
        toArray(),
      )
      .subscribe((usersFiltered) => {
        if (!usersFiltered.some((user) => user.bio)) {
          throw new Error('Some users do not have bio 💥!');
        } else {
          console.table(usersFiltered);
        }
      });
  }

  stackTrace = (step: number = 0): number => {
    if (step === 10) {
      console.log('stackTrace', step);
      return step;
    }
    return this.stackTrace(++step);
  };

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
