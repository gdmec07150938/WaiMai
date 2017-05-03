function parseJson (json) {
  const ERR_OK = 0
  if (json.error === ERR_OK) {
    return json.data
  } else {
    console.log('请求失败')
  }
}
export {parseJson}
