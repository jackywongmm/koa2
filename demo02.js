const Koa=require('koa');
const app=new Koa();
app.use(async(ctx)=>{
    let url=ctx.url;

    //request中接受
    let request=ctx.request;
    let req_query=request.query;
    let req_querystring=request.querystring;
    //context上下文中接受

    let ctx_query=ctx.query;
    let ctx_querystring=ctx.querystring;
    let ctx_body=ctx.request.body;

    ctx.body={
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring,
        ctx_body
        
    }
})
app.listen(3000,()=>{
    console.log('demo is starting ap port 3000')
})