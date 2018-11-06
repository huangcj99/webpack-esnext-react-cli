import detect from './detect'

export default {
  $os: detect.os(),
  $browser: detect.browser()
}