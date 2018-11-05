/**
 * 构造匹配chunk的函数
 */
const createRegExp = (regExps) => {
  return (chunk) => {
    let chunkPath = chunk.nameForCondition()
    /**
     * 将该chunk的路径与regExps中的正则进行匹配
     * 匹配到则将其打包到vendor中
     */
    for (let lib in regExps) {
      if (regExps[lib].test(chunkPath)) {
        return true
      }
    }

    return false
  }
}

/**
 * 判断是否是需要打包进vendor的库
 */
const isVendorLib = createRegExp({
  // react
  'react': /node_modules\/react/g,
  'react-dom': /node_modules\/react-dom/g,
  'classnames': /node_modules\/classnames/g,
  'provider': /src\/provider/g,
  // babel-polyfill
  'core-js': /node_modules\/core-js/g,
  'regenerator-runtime': /node_modules\/regenerator-runtime/g
})

const splitChunksConfig = {
  // 项目基础包
  'vendor': {
    test: isVendorLib,
    name: 'vendor',
    chunks: 'all',
    enforce: true,
    priority: 2
  },
  // 单页面需要引入vue-router，这里单独分割出来
  // 'spa-vendor': {
  //   test: /node_modules\/vue-router/g,
  //   name: 'spa-vendor',
  //   chunks: 'all',
  //   enforce: true,
  //   priority: 10
  // },
  // 剩余chunk自动分割
  'commons': {
    name: 'commons',
    minChunks: 2, 
    minSize: 0,
    chunks: 'all',
    enforce: true, // 设置成true，避免入口通过独立分割后，不再复用commons代码，而是将剩余代码包含在业务文件中
    priority: 1
  }
}

// 入口默认加载的chunk
const defaultAssetsConfig = {
  chunks: [
    'manifest',
    'vendor', 
    'commons'
  ]
}

module.exports = {
  splitChunksConfig,
  defaultAssetsConfig
}
