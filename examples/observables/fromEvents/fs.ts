
import { fromEvents } from '../../../src/rxtras/observables/fromEvents';
import { ReadableStreamMap } from '../../../src/rxtras/utils/fromEventsServerMaps';
import { createReadStream } from 'fs';
import 'rxjs/add/operator/reduce';

const stream = createReadStream('./https.ts', {encoding: 'utf-8'});
const obs = fromEvents(ReadableStreamMap, stream);

obs
  .reduce((acc: string, curr) => acc += curr, '')
  .subscribe(
    n => console.log(n),
    e => console.error('Uh oh!', e),
    () => 'All Done!'
  );
