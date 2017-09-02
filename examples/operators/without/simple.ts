
import { timer } from 'rxjs/observable/timer';
import 'rxjs/add/operator/filter';

import { without } from '../../../src/rxtras/operators';

const source = timer(0, 1000);
const threes = source.filter(t => !(t % 3));
const fives = source.filter(t => !(t % 5));

const notThreesOrFives = without<number>(source, threes, fives);

notThreesOrFives.subscribe(e => console.log(e));
