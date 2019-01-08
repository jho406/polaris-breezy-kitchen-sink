import React from 'react'
import {
  mapStateToProps,
  mapDispatchToProps,
} from '@jho406/breezy'
import { connect } from 'react-redux'
import BaseScreen from 'components/BaseScreen'
import { Tabs, Card, CalloutCard, EmptyState, Layout, Loading, ResourceList, Avatar, TextStyle, Toast, Page, SkeletonPage, SkeletonBodyText, TextContainer, SkeletonDisplayText} from '@shopify/polaris'
import LayoutForForms from 'components/LayoutForForms'
import ResourcePostList from 'components/ResourcePostList'
import * as actionCreators from 'javascript/packs/action_creators'
import parse from 'url-parse'

class PostsIndex extends BaseScreen {
  state = {
    activeTab: 0
  }

  tabs = [
    {
      id: 'all-posts',
      content: 'All',
      accessibilityLabel: 'All posts',
      panelID: 'all-posts-content',
    },
    {
      id: 'pending-posts',
      content: 'Pending',
      accessibilityLabel: 'Pending posts',
      panelID: 'pending-posts-content',
    },
  ]

  handleClick = (url) => () => {
    this.turboVisit(url)
  }

  handleTabChange = (selectedTabIndex) => {
    const {pageKey} = this.props
    const tabs = ['all', 'pending']
    const selectedKey = tabs[selectedTabIndex]
    const activeTabContent = this.props.posts[selectedKey]

    if (activeTabContent.isFake) {
      let url = new parse(pageKey, true)
      url.query.bzq = `posts.${tabs[selectedTabIndex]}`
      this.props.remote(url.toString(), {}, pageKey)
    }

    this.setState({activeTab: selectedTabIndex})
  }

  renderCallout ({body='loading...'} = {}) {
    return (
      <CalloutCard
          title="Slow loading Content"
          illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
          primaryAction={{
            content: 'Click to reload fragment',
            onAction: () => {
              const pageKey = this.props.pageKey
              const url = 'http://localhost:3000/posts?bzq=callout'

              // let url = new parse(pageKey, true)
              // url.query.bzq = `callout`

              this.props.remote(url, {}, pageKey)
            },
          }}
        >

          <p> The below loads really slow</p>
          <p> {body} </p>
      </CalloutCard>
    )
  }

  renderResourceList(posts) {
    return (
      <ResourcePostList {...posts}
        onPrevious={this.handleClick}
        onNext={this.handleClick}
        renderItem={(item) => {
          const isEmpty = Object.keys(item).length == 0

          if (isEmpty) {
            return (
              <ResourceList.Item>
                <TextContainer>
                  <SkeletonDisplayText size="small" />
                  <SkeletonBodyText lines={3} />
                </TextContainer>
              </ResourceList.Item>
            )
          }

          const {
            id,
            editPostPath,
            title,
            location,
            body
          } = item

          const media = <Avatar customer size="medium" name={title} />;

          return (
            <ResourceList.Item
              media={media}
              accessibilityLabel={`View details for ${title}`}
              onClick={this.handleClick(editPostPath)}
            >
              <h3>
                <TextStyle variation="strong">{body}</TextStyle>
              </h3>
              <div>{location}</div>

            </ResourceList.Item>
          )
        }}
      />
    )
  }

  render () {
    const {
      title,
      posts,
      layout,
      toast,
      clearToast,
      pageKey,
      callout
    } = this.props

    const {
      activeTab
    } = this.state

    const tabsMarkup = <Tabs tabs={this.tabs} selected={activeTab} onSelect={this.handleTabChange} />
    const postsTabContent = [posts.all, posts.pending]
    const resourceList = this.renderResourceList(postsTabContent[activeTab])
    const toastMarkup = toast ? (
      <Toast
        {...toast}
        onDismiss={() => clearToast(pageKey)} />
    ) : null;

    return (
      <LayoutForForms {...layout} remote={this.props.remote} pageKey={this.props.pageKey}>
        <Page
          title={title}
        >
          {this.renderCallout(callout)}
          <Card>
            {tabsMarkup}
            {resourceList}
          </Card>
        {toastMarkup}
        </Page>
      </LayoutForForms>
    )
  }
}

export default connect(
  mapStateToProps,
  {...mapDispatchToProps, ...actionCreators},
)(PostsIndex)
