import { assert } from 'https://deno.land/std@0.165.0/testing/asserts.ts'
import { propEq } from './utils.ts'

const test = Deno.test

test('propEq', () => {
  const subject = {
    input: {
      function: 'test' 
    }
  }
  assert(propEq('function', 'test', subject.input), 'should be truthy')
  assert(true)
})