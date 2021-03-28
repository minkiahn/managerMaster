const path = require('path') //  파일이나 디렉터리 경로를 다루기 위한 NodeJS 기본 모듈
const { VueLoaderPlugin } = require('vue-loader')
// const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')

module.exports = (env, opts) => {
  const config = {
    resolve: {
      extensions: ['.js', '.vue'],
      // 절대 경로 별칭 설정
      alias: {
        '~': path.resolve(__dirname), // E.g. `import '~/components/TodoApp'` in script tag
        'scss': path.resolve(__dirname, './scss/') // E.g. `import "scss/style";` in style tag
      }
    },
    entry: {
      app: path.join(__dirname, 'main.js')
    },
    // 결과물(번들)을 반환하는 설정
    // `[name]`은 `entry`의 Key 이름, `app`
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, './resources/static/js')
      // path: path.join(__dirname, '/dist')
    },
    // 모듈 처리 방식을 설정
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        // this will apply to both plain `.js` files
        // AND `<script>` blocks in `.vue` files
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        // this will apply to both plain `.css` files
        // AND `<style>` blocks in `.vue` files
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
            // 'postcss-loader' // 순서가 중요함
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader', // 1st
            'css-loader', // 2nd
            // 'postcss-loader', // 3rd, 순서가 중요함
            'sass-loader' // 4th
          ]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
  }

  if (opts.mode === 'development') {
    return merge(config, {
      // 빌드 시간이 적고, 디버깅이 가능한 방식
      devtool: 'eval',
      devServer: {
        // 자동으로 기본 브라우저를 오픈합니다
        open: true,
        // HMR, https://webpack.js.org/concepts/hot-module-replacement/
        hot: true,
        publicPath: '/resources/static/js/', // 경로 미설정시 js 파일 찾지 못함, 수행 후 wds｣: webpack output is served from /resources/static/js/
        port: 8090,
        proxy: { // proxyTable 설정
          '/api': { // api 로 시작하는 소스 는 traget으로 잡아준다.
            target: 'http://127.0.0.1:8080', // www.xxx.com
            changeOrigin: true
          }
        }
      }
    })

  // opts.mode === 'production'
  } else {
    return merge(config, {
      // 용량이 적은 방식
      devtool: 'cheap-module-source-map',
      plugins: [
        // 빌드(build) 직전 `output.path`(`dist` 디렉터리) 내 기존 모든 파일 삭제
        new CleanWebpackPlugin()
      ]
    })
  }
}
