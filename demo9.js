const Koa=require('koa');
const Router=require('koa-router');

const app=new Koa();
const router=new Router();

router.get('/',function(ctx,next){
    ctx.body=ctx.query.name;
})

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('server is starting at port 3000!')
})