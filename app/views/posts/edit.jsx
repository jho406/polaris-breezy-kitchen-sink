import React from 'react'
import {mapStateToProps, mapDispatchToProps} from '@jho406/breezy'
import {connect} from 'react-redux'
import BaseScreen from 'components/BaseScreen'
import PostsForm from 'components/PostsForm'

class PostsEdit extends BaseScreen {
  formRef = React.createRef()

  handleSubmit = (values, {setSubmitting}) => {
    this.props.delInPage({pageKey: this.props.pageKey, keypath: 'errors'})

    const options = {
      method:'PUT',
      body: JSON.stringify(values),
    }

    this.visit(this.props.post, options).then( rsp => {
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
          initialValues={this.props.attributes_for_form}
          ref={this.formRef}
        />
        <a onClick={ e => this.visit(this.props.post_path)}>Show</a>
        <a onClick={ e => this.visit(this.props.posts_path)}>Back</a>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsEdit)


