
import { request, IncomingMessage } from 'https';
import { fromEvents } from '../../../src/rxtras/observables/fromEvents';
import { RequestMap, ResponseMap } from '../../../src/rxtras/utils/fromEventsServerMaps';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/do';

const options = { host: 'ethe.us' };
const req = request(options);
req.end();

const obs = fromEvents<IncomingMessage>(RequestMap, req);

obs
  .do(res => res.setEncoding('utf8'))
  .mergeMap(res => fromEvents(ResponseMap, res))
  .reduce((body, data) => body += data)
  .subscribe(
    body => console.log(body),
    error => console.error(error),
    () => console.log('All done!')
  );
