// service
import dateFormat from 'service/format/date-format'

// 顶层需要注入的方法
export let servicesConfig = Object.assign(
  {},
  dateFormat
)

export let storeConfig = {
  time: new Date().getTime(),
  person: {
    name: 'chen',
    age: 29
  }
}