import dva from 'dva'
import createLoading from 'dva-loading'
import routerConfig from './router'
// 创建dva程序
let app = dva({
    // initialState:{},
    onStateChange(fn){
        // console.log(JSON.stringify(fn))
        // console.log('state changed')
    },
    onError(e) {
        console.error(e.message, /* duration */3);
    },
    // onAction(){
    //     return ()=>{}
    // }
})
app.use(createLoading())

// 注册dva路由
app.router(routerConfig)

// 启动dva
app.start('#root')
