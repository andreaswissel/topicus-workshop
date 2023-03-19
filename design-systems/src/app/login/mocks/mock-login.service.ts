import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockLoginService {
  login(username: string, password: string): Observable<boolean> {
    return of(!!username && username === password).pipe(delay(5000));
  }
}
