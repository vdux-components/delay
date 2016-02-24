/**
 * Imports
 */

import test from 'tape'
import Delay from '../src'
import vdux from 'vdux/dom'
import element from 'vdux/element'
import elapsed from '@f/elapsed-time'

/**
 * Tests
 */

test('should work', t => {
  const time = elapsed()
  const {stop} = run(() => <Delay time={400} onEnd={check}><Inner /></Delay>)

  t.plan(2)
  setTimeout(finish, 500)

  // Inner component
  function Inner () {
    check()
    return <span/>
  }

  function finish () {
    stop()
    t.end()
  }

  function check () { t.ok(time() > 200) }
})

/**
 * Helpers
 */

function run (app, initialState = {}) {
  return vdux({
    app,
    reducer,
    initialState: initialState
  })
}

function reducer (state, action) {
  return state
}
