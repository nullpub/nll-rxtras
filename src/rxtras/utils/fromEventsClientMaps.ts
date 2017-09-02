
import { EventMap, IEventEmitter } from '../observables/fromEvents';


export class ElementEventEmitter implements IEventEmitter {
    constructor(private el: Element) { }
    on(event: string | symbol, listener: EventListenerOrEventListenerObject) {
        this.el.addEventListener(String(event), listener);
    }
    removeListener(event: string | symbol, listener: EventListenerOrEventListenerObject) {
        this.el.removeEventListener(String(event), listener);
    }
}


export const WindowResizeMap: EventMap<UIEvent> = new EventMap(
    ['resize'],
    [],
    ['unload'],
);

export const MouseWheelMap: EventMap<MouseWheelEvent> = new EventMap(
    ['wheel'],
);

export const FormMap: EventMap<UIEvent> = new EventMap(
    ['submit'],
    [],
    ['unload'],
);

export const ButtonMap: EventMap<UIEvent> = new EventMap(
    ['click', 'dblclick'],
    [],
    ['unload'],
);

export const InputMap: EventMap<UIEvent> = new EventMap(
    ['focus', 'blur', 'keyup', 'change', 'input'],
    [],
    ['unload'],
);

export const SelectMap: EventMap<UIEvent> = new EventMap(
    ['change'],
    [],
    ['unload'],
);

export const HoverMap: EventMap<UIEvent> = new EventMap(
    ['mouseenter', 'mouseleave', 'mouseout', 'mouseover'],
    [],
    ['unload'],
);


