import { mkdirSync, writeFileSync } from 'node:fs';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', 'Court-Appointed Pigeon Divorce Mediator (Custody of Statues)', 'utf8');
