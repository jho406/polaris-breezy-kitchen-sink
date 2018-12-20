import React from 'react'
import PropTypes from 'prop-types'

import {enhanceVisitWithBrowserBehavior} from '@jho406/breezy'

export default class extends React.Component {
  constructor (props) {
    super(props)
    const visit = enhanceVisitWithBrowserBehavior(props.visit).bind(this)
    this.visit = visit
  }

  toggleState = (key) => {
    return () => {
      this.setState((prevState) => ({[key]: !prevState[key]}));
    }
  }
}

