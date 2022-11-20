import { propEq } from './utils'
import type { State, Action } from './types'

export async function handle(state : State, action: Action) {
  const { input, caller } = action
  const { registry } = state

  if (propEq('function', 'register', input)) {
    
    return {
      state
    }
  }

  if (propEq('function', 'assets', input)) {
    return {
      result: {}
    }
  }
}