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
    showMobileNavigation: false,
    userMenuOpen: false,
  }

  render() {
    const {
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
              userMenuOpen={userMenuOpen}
              onUserMenuOpen={this.toggleState('userMenuOpen')}
              onNavigationToggle={this.toggleState('showMobileNavigation')}
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
