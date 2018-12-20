import React from 'react'
import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import Breezy from '@jho406/breezy'
import PostsEdit from 'views/posts/edit'
import PostsIndex from 'views/posts/index'
import Nav from '@jho406/breezy/dist/NavComponent'

import reduceReducers from 'reduce-reducers'
import applicationReducer from './reducers'

import '@shopify/polaris/styles.css'

// Mapping between your props template to Component
// e.g {'posts/new': PostNew}
const screenToComponentMapping = {
  'posts/edit': PostsEdit,
  'posts/index': PostsIndex,
}

const history = createHistory({})
const initialPage = window.BREEZY_INITIAL_PAGE_STATE
const baseUrl = ''

//The Nav is pretty bare bones
//Feel free to replace the implementation
const {reducer, initialState, initialPageKey, connect} = Breezy.start({
  window,
  initialPage,
  baseUrl,
  history
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const {
  breezy: breezyReducer,
  pages: pagesReducer,
} = reducer

const store = createStore(
  combineReducers({
    breezy: breezyReducer,
    pages: reduceReducers(pagesReducer, applicationReducer),
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)

connect(store)

class App extends React.Component {
  render () {
    return <Provider store={store}>
      <Nav
        store={store}
        mapping={this.props.mapping}
        history={history}
        initialPageKey={initialPageKey}
      />
    </Provider>
  }
}

document.addEventListener('DOMContentLoaded', function () {
  render(<App mapping={screenToComponentMapping}/>, document.getElementById('app'))
})
