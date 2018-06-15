const Koa = require('koa');
const app = new Koa();
const bodyparser=require('koa-bodyparser');

app.use(bodyparser());
app.use(async ctx => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        let html = `
            <h1>Koa2 request post demo</h1>
            <form method="post"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>Age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        let propsData=ctx.request.body;
        ctx.body=propsData; 
    } else {
        ctx.body='<h1>404!</h1>';
    }
})

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})