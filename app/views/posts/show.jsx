import React from 'react'
import {mapStateToProps, mapDispatchToProps} from '@jho406/breezy'
import { connect } from 'react-redux'
import BaseScreen from 'components/BaseScreen'

class PostsShow extends BaseScreen {
  render () {
    return (
      <div>
        <p id="notice">{this.props.flash && this.props.flash.notice}</p>
        <p>
          <strong>Body:</strong>
          {this.props.body}
        </p>
        <p>
          <strong>Created_at:</strong>
          {this.props.created_at}
        </p>
        <p>
          <strong>Updated_at:</strong>
          {this.props.updated_at}
        </p>
        <a onClick={ e => this.visit(this.props.edit_post_path)}>Edit</a>
        <a onClick={ e => this.visit(this.props.posts_path )}>Back</a>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsShow)

