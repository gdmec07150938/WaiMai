function parseJson (json) {
  const ERR_OK = 0
  if (json.error === ERR_OK) {
    return json.data
  } else {
    console.log('请求失败')
  }
}
function isEmptyObject (e) {
  var t
  for (t in e) {
    return !1
  }
  return !0
}

/**
 *
 * @return Object
 * "?id=001&name=hkhkkh/"
 * ?或&开头
 */
function parentUrl () {
  let url = window.location.search
  let reg = /[&|?][\w]+=[\w\s]+/g
  let array = url.match(reg)
  let object = {}
  if (array) {
    array.forEach((item) => {
      let tempArray = item.substring(1).split('=')
      let key = decodeURIComponent(tempArray[0])
      let value = decodeURIComponent(tempArray[1])
      object[key] = value
    })
  }
  return object
}

export {parseJson, isEmptyObject, parentUrl}
