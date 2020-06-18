/**
 * sessionStorage 封装
 * mall:{"user":{"userName":"gunner"},"order":{}}
 */
const STORAGE_KEY = 'mall'
export default {
  setItem (key, value, name) {
    if (name) {
      let val = this.getItem(name)
      val[key] = value
      this.setItem(name, val)
    } else {
      let val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  getItem (key, name) {
    if (name) {
      let val = this.getItem(name)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  clear (key, name) {
    let val = this.getStorage()
    if (name) {
      if (!val[name]) return
      delete val[name][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
