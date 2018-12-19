import React from 'react'
import {mapStateToProps, mapDispatchToProps} from '@jho406/breezy'
import { connect } from 'react-redux'
import BaseScreen from 'components/BaseScreen'

class PostsIndex extends BaseScreen {
  static defaultProps = {
    posts: []
  }

  render () {
    const postItems = this.props.posts.map((post, key) => {
      return (
        <tr key={post.id}>
          <td>{post.body}</td>
          <td><a onClick={ e => this.visit(post.post_path)}>Show</a></td>
          <td><a onClick={ e => this.visit(post.edit_post_path)}>Edit</a></td>
          <td><a onClick={ e => this.visit(post.post_path, {method: 'DELETE'})}>Delete</a></td>
        </tr>
      )
    })

    return (
      <div>
        <p id="notice">{this.props.flash && this.props.flash.notice}</p>

        <h1>Posts</h1>

        <table>
          <thead>
            <tr><th>Body</th></tr>
            <tr>
              <th colSpan="3"></th>
            </tr>
          </thead>

          <tbody>
            {postItems}
          </tbody>
        </table>
        <br />
        <a onClick={ e => this.visit(this.props.new_post_path)}>New Post</a>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsIndex)

