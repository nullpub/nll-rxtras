
import { ClientRequest, ServerResponse} from 'https';
import { Socket, Server } from 'net';
import { Readable } from 'stream';

import { EventMap, IEventEmitter } from '../observables/fromEvents';


// Standard Event Maps
export const ReadableStreamMap: EventMap<Readable> = {
    nexts: ['data'],
    errors: ['error'],
    completes: ['end', 'close']
};

export const ServerMap: EventMap<Server> = {
  nexts: ['request'],
  errors: ['error'],
  completes: ['close'],
};

export const SocketMap: EventMap<Socket> = {
  nexts: ['request'],
  errors: ['error'],
  completes: ['close'],
};

export const RequestMap: EventMap<ClientRequest> = {
    nexts: ['response'],
    errors: ['error'],
    completes: ['abort', 'aborted', 'close', 'end']
};

export const ResponseMap: EventMap<ServerResponse> = {
    nexts: ['data'],
    errors: ['error'],
    completes: ['abort', 'aborted', 'close', 'end']
};
