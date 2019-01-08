import React from 'react'
import {ActionList, Card, TopBar} from '@shopify/polaris'

export default class TopNav extends React.PureComponent {
  render () {
    const {
      searchItems,
      userMenu,
      userMenuOpen,
      searchActive,
      searchText,
      onSearchFieldChange,
      onSearchResultsDismiss,
      onNavigationToggle,
      onUserMenuOpen,
    } = this.props

    const searchResultsMarkup = (
      <Card>
        <ActionList
          items={searchItems}
        />
      </Card>
    )

    const searchFieldMarkup = (
      <TopBar.SearchField
        onChange={onSearchFieldChange}
        value={searchText}
        placeholder="Search"
      />
    )

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
        searchResultsVisible={searchActive}
        searchField={searchFieldMarkup}
        searchResults={searchResultsMarkup}
        onSearchResultsDismiss={onSearchResultsDismiss}
        onNavigationToggle={onNavigationToggle}
      />
    )
  }
}
