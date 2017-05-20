/**
 * Created by lupin on 17-5-7.
 */
const ORDER_STORE = {
  debug: true,
  state: {
    order: {}
  },
  setOrderAction (newValue) {
    this.debug && console.log('setOrderAction triggered with', newValue)
    this.state.order = newValue
  }
}
export {ORDER_STORE}
