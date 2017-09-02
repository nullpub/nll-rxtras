
import { EventMap } from '../observables/fromEvents';

/**
 * Merge one or more EventMap objects.
 */
export function mergeMaps <T, U = T> (...maps: EventMap<T, U>[]): EventMap<T, U> {

    return maps.reduce((ms, m) => ({
        nexts     : [ ...ms.nexts, ...m.nexts ],
        errors    : [ ...ms.errors, ...(m.errors || []) ],
        completes : [ ...ms.completes, ...(m.completes || []) ],
        projector : (...args: any[]) => ([ ...ms.projector(...args), m.projector(...args) ]),
    }), {
        nexts: [] as (string | symbol)[],
        errors: [] as (string | symbol)[],
        completes: [] as (string | symbol)[],
        projector: (...args: any[]) => args.find(a => a !== undefined),
    });
}
