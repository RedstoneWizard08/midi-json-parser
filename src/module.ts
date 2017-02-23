import { load } from 'midi-json-parser-broker';
import { IMidiFile } from 'midi-json-parser-worker';
import { worker } from './worker/worker';

const blob: Blob = new Blob([ worker ], { type: 'application/javascript' });

const url: string = URL.createObjectURL(blob);

const midiJsonParser = load(url);

export const parseArrayBuffer: (arrayBuffer: ArrayBuffer) => Promise<IMidiFile> = midiJsonParser.parseArrayBuffer;
