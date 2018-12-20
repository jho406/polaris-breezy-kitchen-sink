import React from 'react'
import {Navigation} from '@shopify/polaris'

export default class extends React.PureComponent {
  render() {
    const {
      userMenu,
      storeName,
      settingsMenu,
      name,
      avatarInitials,
    } = this.props

    const navigationUserMenu = (
      <Navigation.UserMenu
        actions={userMenu}
        name={name}
        detail={storeName}
        avatarInitials={avatarInitials}
      />
    )

    return (
      <Navigation location="/" userMenu={navigationUserMenu}>
        <Navigation.Section
          items={settingsMenu}
        />
      </Navigation>
    )
  }
}
