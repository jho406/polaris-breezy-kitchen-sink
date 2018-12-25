import React from 'react'
import {mapStateToProps, mapDispatchToProps} from '@jho406/breezy'
import {connect} from 'react-redux'
import BaseScreen from 'components/BaseScreen'
import {
  Banner,
  Link,
  Card,
  ContextualSaveBar,
  Toast,
  Page,
  Layout,
} from '@shopify/polaris'
import PostsForm from 'components/PostsForm'
import LayoutForForms from 'components/LayoutForForms'
import * as applicationActionCreators from 'javascript/packs/action_creators'

class PostsEdit extends BaseScreen {
  state = {
    isDirty: false,
  }

  formRef = React.createRef()

  handleSubmit = (id) => (values, {setSubmitting}) => {
    this.props.clearSubmissionErrors(this.props.pageKey)
    this.props.updateAllPostFragments(id, values.body)

    this.setState({
      isDirty: false,
    })

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

  handleAnyFieldChange = () => {
    this.setState({
      isDirty: true,
    })
  }

  handleDiscard = () => {
    this.setState({
      isDirty: false,
    })
    this.formRef.current.resetForm()
  }

  handleSave = () => {
    this.formRef.current.submitForm()
  }

  render () {
    const {
      isDirty,
    } = this.state

    const {
      title,
      attributesForForm,
      errors,
      toast,
      clearToast,
      layout,
      pageKey,
      id,
    } = this.props

    const bannerMarkup = errors ? <Banner
      title="High risk of fraud detected"
      action={{content: 'Review risk analysis'}}
      status="critical"
    > <p>
        Before fulfilling this order or capturing payment, please{' '}
        <Link url="">review the Risk Analysis</Link> and determine if this order is
        fraudulent.
      </p>
    </Banner> : null

    const toastMarkup = toast ? (
      <Toast
        {...toast}
        onDismiss={() => clearToast(pageKey)} />
    ) : null;

    const pageMarkup = (
      <Page title={title}>
        {bannerMarkup}
        <Layout>
          <Layout.AnnotatedSection
            title="Billing details"
            description="We will use this as your billing information."
          >
            <Card sectioned>
              <PostsForm
                ref={this.formRef}
                initialValues={attributesForForm}
                onAnyFieldChange={this.handleAnyFieldChange}
                onSubmit={this.handleSubmit(id)}
              />
            </Card>
          </Layout.AnnotatedSection>
        </Layout>
        {toastMarkup}
      </Page>
    )

    const contextualSaveBarMarkup = isDirty ? (
      <ContextualSaveBar
        message="Unsaved changes"
        saveAction={{
          onAction: this.handleSave,
        }}
        discardAction={{
          onAction: this.handleDiscard,
        }}
      />
    ) : null

    return (
      <LayoutForForms {...layout} remote={this.props.remote}>
        {contextualSaveBarMarkup}
        {pageMarkup}
      </LayoutForForms>
    )
  }
}

export default connect(
  mapStateToProps,
  {...mapDispatchToProps, ...applicationActionCreators},
)(PostsEdit)


