import React from 'react'
import {mapStateToProps, mapDispatchToProps} from '@jho406/breezy'
import {connect} from 'react-redux'
import BaseScreen from 'components/BaseScreen'
import PostsForm from 'components/PostsForm'

class PostsNew extends BaseScreen {
  formRef = React.createRef()

  handleSubmit = (values, {setSubmitting}) => {
    this.props.delInPage({pageKey: this.props.pageKey, keypath: 'errors'})

    const options = {
      method:'POST',
      body: JSON.stringify(values),
    }

    this.visit(this.props.posts_path, options).then( rsp => {
      setSubmitting(false)
      if (this.props.errors) {
        this.formRef.current.setErrors(this.props.errors)
      }
    })
  }

  render () {
    return (
      <div>
        <PostsForm
          onSubmit={this.handleSubmit}
          ref={this.formRef}
        />
        <a onClick={ e => this.visit(this.props.posts_path)}>Back</a>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsNew)

