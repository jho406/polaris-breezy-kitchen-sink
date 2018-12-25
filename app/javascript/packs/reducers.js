import reduceReducers from 'reduce-reducers'
import {
  getIn,
} from '@jho406/breezy'
import produce from "immer"

export default function (state = {}, action) {
  switch(action.type) {
  case 'UPDATE_ALL_POST_FRAGMENTS': {
    const {id, body} = action.payload
    const fragment_name = `post_${id}`

    return produce(state, draft => {
      Object.entries(state).forEach(([pageKey, {fragments}]) => {
        (fragments[fragment_name] || []).forEach(pathToFragment => {
          const {data} = draft[pageKey]
          const node = getIn(data, pathToFragment)

          node.body = body
        })
      })
    })
  }
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
