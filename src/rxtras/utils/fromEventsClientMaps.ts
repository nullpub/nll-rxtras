
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


export const WindowResizeMap: EventMap<UIEvent> = {
    nexts: ['resize'],
    completes: ['unload'],
};

export const MouseWheelMap: EventMap<MouseWheelEvent> = {
    nexts: ['wheel'],
};

export const FormMap: EventMap<UIEvent> = {
    nexts: ['submit'],
    completes: ['unload'],
};

export const ButtonMap: EventMap<UIEvent> = {
    nexts: ['click', 'dblclick'],
    completes: ['unload'],
};

export const InputMap: EventMap<UIEvent> = {
    nexts: ['focus', 'blur', 'keyup', 'change', 'input'],
    completes: ['unload'],
};

export const SelectMap: EventMap<UIEvent> = {
    nexts: ['change'],
    completes: ['unload'],
};

export const HoverMap: EventMap<UIEvent> = {
    nexts: ['mouseenter', 'mouseleave', 'mouseout', 'mouseover'],
    completes: ['unload'],
};


