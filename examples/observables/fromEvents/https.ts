
import { request, IncomingMessage } from 'https';
import { fromEvents } from '../../../src/rxtras/observables/fromEvents';
import { RequestMap, ResponseMap } from '../../../src/rxtras/utils/fromEventsServerMaps';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/do';

const options = { host: 'ethe.us' };
const req = request(options);
req.end();

const obs = fromEvents(RequestMap, req);

obs
  .do(r => r.request.setEncoding('utf8'))
  .mergeMap(({response}) => fromEvents(ResponseMap, response))
  .reduce((body, res) => body += res, '')
  .subscribe(
    body => console.log(body),
    error => console.error(error),
    () => console.log('All done!')
  );
