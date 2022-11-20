import { z } from 'npm:zod'

const Key = z.string().max(43).min(43)

export const State = z.object({
  name: z.string(),
  registry: z.record(
    Key,
    z.record(
      Key,
      z.object({
        asset: Key,
        owner: Key,
        title: z.string(),
        description: z.string(),
        type: z.string(),
        owned_units: z.number(),
        total_units: z.number()
      })
    )
  )
})

export type State = z.infer<typeof State>

export const Action = z.object({
  caller: Key,
  input: z.object({
    function: z.string(),
    asset: Key.optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    topics: z.array(z.string()).optional(),
    address: Key.optional()
  })
})

export type Action = z.infer<typeof Action>