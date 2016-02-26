/**
 * Imports
 */

import element from 'vdux/element'
import createAction from '@f/create-action'
import handleActions from '@f/handle-actions'

/**
 * Delay component
 */

function initialState () {
  return {
    done: false
  }
}

function onCreate ({props, local}) {
  const {onEnd, time = 0} = props

  return function (dispatch) {
    dispatch(local(beginTimer)(
      setTimeout(() => {
        onEnd && dispatch(onEnd())
        dispatch(local(endTimer)())
      }, time)
    ))
  }
}

function render ({children, state}) {
  if (!children.length > 1) throw new Error('Delay component accepts only one child')
  if (!state.done) return <span/>

  return children[0]
}

function onUpdate (prev, next) {
  if (prev.props.time !== next.props.time) {
    throw new Error ('<Delay/> component does not allow you to change the `time` prop')
  }
}

function onRemove ({state}) {
  if (!state.done) {
    return () => clearTimeout(state.id)
  }
}

/**
 * Actions
 */

const beginTimer = createAction('<Delay/> component: Begin timer')
const endTimer = createAction('<Delay/> component: End timer')

/**
 * Reducer
 */

const reducer = handleActions({
  [beginTimer]: (state, id) => ({...state, id}),
  [endTimer]: state => ({...state, done: true})
})

/**
 * Exports
 */

export default {
  initialState,
  onCreate,
  onUpdate,
  render,
  reducer,
  onRemove
}
