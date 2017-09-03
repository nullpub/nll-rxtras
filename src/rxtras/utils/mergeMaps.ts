
import { EventMap } from '../observables/fromEvents';


function onlyUnique (value: any, index: number, self: any) {
    return self.indexOf(value) === index;
}

/**
 * Merge one or more EventMap objects.
 */
export function mergeMaps <T, U = T> (...maps: EventMap<T, U>[]): EventMap<T, U> {

    return (({ nexts, errors, completes, projectors }): EventMap<T, U> => ({
        nexts     : nexts.filter(onlyUnique),
        errors    : errors.filter(onlyUnique),
        completes : completes.filter(onlyUnique),
        projector : (...args) => projectors.find(f => f(...args) !== undefined) as any,
    }))(maps.reduce ((ms, m) => ({
        nexts     : [ ...ms.nexts, ...m.nexts ],
        errors    : [ ...ms.errors, ...m.errors ],
        completes : [ ...ms.completes, ...m.completes ],
        projectors: [ ...ms.projectors, m.projector ],
    }), { nexts: [], errors: [], completes: [], projectors: [() => undefined] }));
}
