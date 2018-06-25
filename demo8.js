const Koa=require('koa');
const app=new Koa();
const Router=require('koa-router');

let home=new Router();
home.get('jacky',async(ctx)=>{
    ctx.body='Home jacky'
}).get('/todo',async(ctx)=>{
    ctx.body='Home todo';
})

let page=new Router();
page.get('/jacky',async(ctx)=>{
    ctx.body='page Jacky'
}).get('/todo',async(ctx)=>{
    ctx.body='page Todo'
})

//装载路由
let router=new Router();
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());

//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000,()=>{
    console.log(`[demo] server is starting at port 3000`)
})