import React from 'react'
import {ActionList, Card, TopBar} from '@shopify/polaris'

export default class TopNav extends React.PureComponent {
  render () {
    const {
      userMenu,
      userMenuOpen,
      onNavigationToggle,
      onUserMenuOpen,
    } = this.props

    const userMenuMarkup = (
      <TopBar.UserMenu
        actions={userMenu}
        name="Dharma"
        detail="some details"
        initials="D"
        open={userMenuOpen}
        onToggle={onUserMenuOpen}
      />
    )

    return (
      <TopBar
        showNavigationToggle={true}
        userMenu={userMenuMarkup}
        onNavigationToggle={onNavigationToggle}
      />
    )
  }
}
