import { writeFileStrSync } from 'https://deno.land/std/fs/mod.ts'
import getStructures from './controllers/getStructures.ts'

const structures = await getStructures()

writeFileStrSync('./sctrucures.txt', structures.join('\n'))
