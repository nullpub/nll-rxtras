/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

/**
 * EventMap interface for the fromEvents Observable.
 */
export class EventMap <T, U = T> {
  constructor (
    public nexts: (string | symbol)[],
    public errors: (string | symbol)[] = [],
    public completes: (string | symbol)[] = [],
    public projector: (...events: T[]) => U = (...args) => args.find(a => a !== undefined) as any,
  ) {}
}

/**
 * IEventEmitter interface for the fromEvents Observable, biased towards server-side events.
 */
export interface IEventEmitter {
  on (event: string | symbol, listener: () => void): any;
  removeListener (event: string | symbol, listener: () => void): any;
}

/**
 * Class for fromEvents Observable.
 */
export function fromEvents <T, U = T> (
    { nexts, errors, completes, projector }: EventMap<T, U>,
    emitter: IEventEmitter,
): Observable<U> {

  return Observable.create((o: Observer<U>) => [
      ...nexts.map(event => ({ event, listener: (...e: T[]) => o.next(projector(...e)) })),
      ...errors.map(event => ({ event, listener: (e: T) => o.error(e) })),
      ...completes.map(event => ({ event, listener: () => o.complete() })),
    ].reduce((f, { event, listener }) => {
      emitter.on(event, listener);
      return () => emitter.removeListener(event, listener) && f();
    }, new Function())
  );
}
