const Koa=require('koa');
const views=require('koa-views');
const path=require('path');
const static = require('koa-static')

const app=new Koa();


const staticPath = './static'
 
app.use(static(
  path.join( __dirname,  staticPath)
))

app.use(views(path.join(__dirname,'./view'),{
    extension:'ejs'//views使用的模板引擎
}))

app.use(async(ctx)=>{
    let title='hello Jacky!';
    await ctx.render('index',{title})
})
app.listen(3000,()=>{
    console.log('demo is starting ap port 3000')
})