import { writeFileStrSync } from 'https://deno.land/std/fs/mod.ts'
import getStructures from './controllers/getStructures.ts'

const structures = await getStructures()

const content = structures.map(str => `${str.id} - ${str.name}`).join('\n')

writeFileStrSync('./sctrucures.txt', content)
