import React from 'react'
import {
  mapStateToProps,
  mapDispatchToProps,
} from '@jho406/breezy'
import { connect } from 'react-redux'
import BaseScreen from 'components/BaseScreen'
import { Card, EmptyState, Layout, Loading, ResourceList, Avatar, TextStyle, Toast, Page, SkeletonPage, SkeletonBodyText, TextContainer, SkeletonDisplayText} from '@shopify/polaris'
import LayoutForForms from 'components/LayoutForForms'
import ResourcePostList from 'components/ResourcePostList'
import * as actionCreators from 'javascript/packs/action_creators'

class PostsIndex extends BaseScreen {
  handleClick = (url) => () => {
    this.visit(url)
  }

  renderResourceList(posts) {
    return (
      <ResourcePostList {...posts}
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
      pageKey
    } = this.props

    const resourceList = this.renderResourceList(posts)
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
          <Card>
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
