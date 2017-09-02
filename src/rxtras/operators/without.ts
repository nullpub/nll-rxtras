/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

/**
 * Class for without operator.
 */
export function without <T> (
  source: Observable<T>,
  ...discriminant: Observable<T>[],
): Observable<T> {

  return Observable.create(o => source
    .withLatestFrom(Array.isArray(discriminant) ? merge(...discriminant).share() : discriminant)
    .filter(([a, b]) => a !== b)
    .map(([a]) => a)
    .subscribe(o));
}
