const data = require('./src/assets/data/citylist.json');
const citylist = data.city; 
module.exports = {
			 baseUrl: './',
		  // 输出文件目录
		  outputDir: 'dist',
		  // webpack-dev-server 相关配置
		  devServer: {
		    port: 8080,
		  },
		  
    devServer: {
        before(app) {
            app.get('/api/citylist', function (req, res) {
                // errno 状态码,真实开发中可以根据状态码
                // 判断用户当前是否有权限获取数据,或者是是否请求成功,或者是没有数据返回错误原因
                res.json({data: citylist, errno: 0});
            });},
        proxy: {
            '/api': { //这里是我配置的名字
                target: 'http://m.maoyan.com/', //设置你调用的接口域名和端口号 
                changeOrigin: true,//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {	//这里重写路径运行后就代理到对应地址
                    '^/api': ''
                }
            },

        }
    }

}