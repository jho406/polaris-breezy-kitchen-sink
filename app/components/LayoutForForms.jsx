import React from 'react'
import TopNav from 'components/TopNav'
import FlashToast from 'components/FlashToast'
import LeftNav from 'components/LeftNav'
import Frame from 'components/Frame'
import BaseScreen from 'components/BaseScreen'
import {
  ActionList,
  TopBar,
  AppProvider,
  Card,
  Label,
  Layout,
  Navigation
} from '@shopify/polaris'
import {debounce} from 'lodash'
import parse from 'url-parse'

export default class extends BaseScreen {
  static defaultProps = {
    flash: {},
  }

  state = {
    searchActive: false,
    searchText: '',
    showMobileNavigation: false,
    userMenuOpen: false,
  }

  performSearch = debounce((value) => {
    const {pageKey} = this.props
    let url = new parse(pageKey, true)
    url.query.search = value
    url.query.bzq = 'layout.top_nav.search_items'
    this.props.remote(url.toString(), {}, pageKey)
  }, 300)

  handleSearchFieldChange = (value) => {
    this.setState({searchText: value})
    if (value.length > 0) {
      this.setState({searchActive: true})
    } else {
      this.setState({searchActive: false})
    }

    this.performSearch(value)
  }

  handleSearchResultsDismiss = () => {
    this.setState(() => {
      return {
        searchActive: false,
        searchText: '',
      }
    })
  }

  render() {
    const {
      searchActive,
      searchText,
      showMobileNavigation,
      userMenuOpen,
    } = this.state

    const {
      theme,
      topNav,
      leftNav,
      flash,
    } = this.props

    return (
      <AppProvider theme={theme}>
        <Frame
          topBar={
            <TopNav
              {...topNav}
              searchText={searchText}
              searchActive={searchActive}
              userMenuOpen={userMenuOpen}
              onUserMenuOpen={this.toggleState('userMenuOpen')}
              onNavigationToggle={this.toggleState('showMobileNavigation')}
              onSearchResultsDismiss={this.handleSearchResultsDismiss}
              onSearchFieldChange={this.handleSearchFieldChange}
            />
          }
          navigation={<LeftNav {...leftNav}/>}
          showMobileNavigation={showMobileNavigation}
          onNavigationDismiss={this.toggleState('showMobileNavigation')}
        >
          {this.props.children}
          <FlashToast {...flash} onDismiss={this.removeFlash} />
        </Frame>
      </AppProvider>
    )
  }
}
