
import { createServer, IncomingMessage, ServerResponse, ClientRequest } from 'http';
import { Socket, Server } from 'net';
import { Readable } from 'stream';

import { EventMap, IEventEmitter } from '../observables/fromEvents';


// Standard Event Maps
export const ReadableStreamMap: EventMap<Readable> = new EventMap(
    ['data'],
    ['error'],
    ['end', 'close'],
);

export const ServerMap: EventMap<Server, { request: IncomingMessage, response: ServerResponse }> = new EventMap(
    ['request'],
    ['error'],
    ['close'],
);

export const SocketMap: EventMap<Socket> = new EventMap(
    ['request'],
    ['error'],
    ['close'],
);

export const RequestMap: EventMap<ClientRequest, { request: IncomingMessage, response: ServerResponse }> = new EventMap(
    ['response'],
    ['error'],
    ['abort', 'aborted', 'close', 'end']
);

export const ResponseMap: EventMap<ServerResponse> = new EventMap(
    ['data'],
    ['error'],
    ['abort', 'aborted', 'close', 'end']
);
