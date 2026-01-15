// postcss.config.js
import postcssPxToRem from 'postcss-pxtorem'

export default {
  plugins: [
    postcssPxToRem({
      rootValue: 37.5,
      unitPrecision:3,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      include: /src|vant/i,
    })
  ]
}