import React from 'react'
import {mapStateToProps, mapDispatchToProps} from '@jho406/breezy'
import { connect } from 'react-redux'
import BaseScreen from 'components/BaseScreen'
import { Card, CalloutCard, EmptyState, Layout, Loading, ResourceList, Avatar, TextStyle, Page, SkeletonPage, SkeletonBodyText, TextContainer, SkeletonDisplayText} from '@shopify/polaris'
import PostsForm from 'components/PostsForm'
import LayoutForForms from 'components/LayoutForForms'

class ResourcePostList extends React.Component {
  render () {
    const {
      resourceName,
      items,
      heading,
      renderItem,
      onPrevious,
      onNext,
      loading
    } = this.props

    const emptyResourceList = (
      <EmptyState
        heading="Manage your posts"
        action={{content: 'Add posts'}}
        secondaryAction={{content: 'Learn more', url: 'https://help.shopify.com'}}
        image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
      >
        <p>Add a few awesome posts for your blog.</p>
      </EmptyState>
    )


    const resourceList = (
      <ResourceList
        items={items}
        heading={heading}
        resourceName={resourceName}
        renderItem={renderItem}
        loading={loading}
      />
    )

    const actualList = items.length == 0 ? emptyResourceList : resourceList
    return actualList
  }
}

ResourcePostList.defaultProps = {
  items: []
}
export default ResourcePostList
