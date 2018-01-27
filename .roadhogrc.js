export default{
  "entry": "src/index.js",
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime"
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime"
      ]
    }
  },
  // "proxy": {
  //   "/api": {
  //     "target": "http://127.0.0.1:3002/",
  //     "changeOrigin": true
  //   },
  //   "/public": {
  //     "target": "http://127.0.0.1:3002/",
  //     "changeOrigin": true
  //   }
  // },
  extraBabelPlugins: [
    'transform-runtime',
    ['import', {
      libraryName: 'antd-mobile',
      style: true
    }]
  ],
}
