const px2rem = require('postcss-px2rem')
const path = require('path')
// 配置postcs-px2rem
const postcss = px2rem({
    remUnit: 37.5   //基准大小 baseSize
})


module.exports = {
    runtimeCompiler: false,
    lintOnSave: false,
    css: { // 添加postcss配置
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },

    configureWebpack: { // 内部写webpack原生配置
        resolve: {
            extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
            alias: { // 路径别名(简写方式)
                // 'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配   带vue编译器
                '@': path.resolve(__dirname, 'src'),
                '@components': path.resolve(__dirname, 'src1111111/components'),
            }
        }
    },

    devServer: {
        proxy: {
            // 处理以/api开头路径的请求
            '/api': {
                target: 'http://localhost:4000', // 转发的目标地址
                pathRewrite: {
                    '^/api': ''  // 转发请求时去除路径前面的/api
                },
                changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
            },
        }
    },

    pluginOptions: {
        i18n: {
            locale: 'zh_CN',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false
        }
    }
}
