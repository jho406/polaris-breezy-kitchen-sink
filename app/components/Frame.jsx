import {Frame} from '@shopify/polaris'

export default class extends Frame {
  cancelLoading() {
    this.setState({
      loadingStack: 0
    })
  }

  getChildContext(){
    const {frame} = super.getChildContext()
    return {
      frame: {
        ...frame,
        cancelLoading: this.cancelLoading,
      },
    }
  }
}
