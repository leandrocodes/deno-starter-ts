import { Client } from 'https://deno.land/x/mysql/mod.ts'
import Structure from '../models/Structure.ts'

export default async (): Promise<Structure[]> => {
  const client = await new Client().connect({
    hostname: '127.0.0.1',
    username: 'newuser',
    password: 'Thrasher123#',
    db: 'deno-starter'
  })

  const data = await client.query('select id, name from * structures')

  const structures: Structure[] = data.map(
    (reg: any): Structure => {
      return {
        id: reg.id,
        name: reg.name
      }
    }
  )

  return structures
}
