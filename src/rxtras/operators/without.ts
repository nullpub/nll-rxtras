/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

export function without<T>(source: Observable<T>, discriminant: Observable<T> | Observable<T>[]): Observable<T> {
  const disc = discriminant instanceof Array ? merge(...discriminant).share() : discriminant;
  return Observable.create((observer: Observer<T>) => source
    .withLatestFrom(disc)
    .filter(([a, b]) => a !== b)
    .map(([a, b]) => a)
    .subscribe(observer));
}
