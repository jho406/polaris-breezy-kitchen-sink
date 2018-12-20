import React from 'react'
import {Toast} from '@shopify/polaris'

export default class extends React.PureComponent {
  render() {
    const {
      message,
      type,
      onDismiss
    } = this.props

    if (message && type) {
      const isError = type == 'error'

      return (
        <Toast
          onDismiss={onDismiss}
          error={isError}
          content={message}
        />
      )
    } else {
      return null
    }
  }
}
