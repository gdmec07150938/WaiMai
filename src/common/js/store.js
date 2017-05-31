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

/**
 * Created by lupin on 17-4-23.
 */
export {saveToLocal, readToLocal}
function saveToLocal (id, key, value) {
  let seller = window.localStorage._seller
  if (!seller) {
    seller = {}   //  seller不存在，创建seller对象
    seller[id] = {}
  } else {
    seller = JSON.parse(seller)
    if (!seller[id]) {
      seller[id] = {}
    }
  }
  seller[id][key] = value
  window.localStorage._seller = JSON.stringify(seller)
}

function readToLocal (id, key, def) {
  let seller = window.localStorage._seller
  if (!seller) {
    return def
  }
  seller = JSON.parse(seller)
  if (!seller[id] || !seller[id][key]) {
    return def
  }
  return seller[id][key]
}
