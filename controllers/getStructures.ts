import { Client } from 'https://deno.land/x/mysql/mod.ts'
import Structure from '../models/Structure.ts'

export default async (): Promise<Structure[]> => {
  const client = await new Client().connect({
    hostname: '127.0.0.1',
    username: 'root',
    password: 'root',
    db: 'deno-starter'
  })

  const data = await client.query('select * from structures')

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
