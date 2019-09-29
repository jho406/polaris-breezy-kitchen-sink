import reduceReducers from 'reduce-reducers'
import {
  getIn,
} from '@jho406/breezy'
import produce from "immer"

const walkToEachFragment = (pages, fragmentName, callback) => {
  Object.entries(pages).forEach(([pageKey, {fragments}]) => {
    (fragments[fragmentName] || []).forEach(pathToFragment => {
      callback(pageKey, pathToFragment)
    })
  })
}

const produceByFragment = (state, fragmentName, callback) => {
  return produce(state, draft => {
    walkToEachFragment(state, fragmentName, (pageKey, pathToFragment) => {
      const {data} = draft[pageKey]
      const node = getIn(data, pathToFragment)

      callback(node, pageKey)
    })
  })
}

export default function (state = {}, action) {
  switch(action.type) {
  case 'UPDATE_ALL_POST_FRAGMENTS': {
    const {id, body} = action.payload
    const fragmentName = `post_${id}`

    return produceByFragment(state, fragmentName, (draft) => {
      draft.body = body
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
  case 'CLEAR_PRELOADED': {
    const { pageKey } = action.payload
    const keyPath = [pageKey, 'data'].join('.')

    return produce(state, draft => {
      const node = getIn(draft, keyPath)
      delete node['preloadedPages']
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

