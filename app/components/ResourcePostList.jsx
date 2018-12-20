import React from 'react'
import {mapStateToProps, mapDispatchToProps} from '@jho406/breezy'
import { connect } from 'react-redux'
import BaseScreen from 'components/BaseScreen'
import { Card, CalloutCard, EmptyState, Layout, Loading, Pagination, ResourceList, Avatar, TextStyle, Page, SkeletonPage, SkeletonBodyText, TextContainer, SkeletonDisplayText} from '@shopify/polaris'
import PostsForm from 'components/PostsForm'
import LayoutForForms from 'components/LayoutForForms'
import ListFooter from 'components/ListFooter'

class ResourcePostList extends React.Component {
  render () {
    const {
      resourceName,
      items,
      pagination,
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

    const paginationMarkup =
      pagination ? (
        <ListFooter>
          <Pagination {...pagination}
            onPrevious={onPrevious(pagination.pathToPrevPage)}
            onNext={onNext(pagination.pathToNextPage)}
          />
        </ListFooter>
      ) : null

    return [
      actualList,
      paginationMarkup
    ]
  }
}

ResourcePostList.defaultProps = {
  items: []
}
export default ResourcePostList
