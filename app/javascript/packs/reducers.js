import reduceReducers from 'reduce-reducers'
import {
  getIn,
  forEachJointPathAcrossAllPages,
} from '@jho406/breezy'
import produce from "immer"

export default function (state = {}, action) {
  switch(action.type) {
  case 'CLEAR_SUBMISSION_ERRORS': {
    const { pageKey } = action.payload
    const keyPath = [pageKey, 'data'].join('.')

    return produce(state, draft => {
      const node = getIn(draft, keyPath)
      delete node['error']
    })
  }
  case 'CLEAR_TOAST': {
    const { pageKey } = action.payload
    const keyPath = [pageKey, 'data'].join('.')

    return produce(state, draft => {
      const node = getIn(draft, keyPath)
      delete node['toast']
    })
  }
  default:
    return state
  }
}
