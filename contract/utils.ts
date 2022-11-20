import { z } from 'https://deno.land/x/zod@v3.16.1/mod.ts'

const AObject = z.record(z.string(), z.any())
type AObject = z.infer<typeof AObject>

export const propEq = (prop: string, test: any, object: AObject) => object[prop] === test