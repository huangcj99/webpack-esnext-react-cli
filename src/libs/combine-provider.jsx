/**
 * 
 * @param {class} RootComponent 第一个参数必须为组件类
 * 
 * 可传入多个provider
 */
export const combineProvider = function () {
  let args = Array.from(arguments); 
  let RealRootComponent = args.shift(); // 将根组件提取出数组并返回
  let argsLen = args.length

  if (argsLen === 0) {
    return <RealRootComponent />
  }

  RealRootComponent = argsLen === 1
    ? args[0](RealRootComponent)
    : args.reduce((preProvider, afterProvider) => {
      return afterProvider(preProvider(RealRootComponent))
    })

  return RealRootComponent
}