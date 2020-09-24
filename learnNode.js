const Express = require('express');
const Db = require('mongodb/lib/db');
const MongoClient=require('mongodb').MongoClient;
let DB_CONN_STR = 'mongodb://localhost:27017/test'
MongoClient.connect(DB_CONN_STR,(err,client)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('数据库连接成功！');
 //   console.log(client);
    client.db('test').collection('staff').find().toArray((err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    });
    client.close();
})
const app = Express();
app.get('/',(req,res)=>{
    res.send({
        name:'梁荷东',
        gender:'女'
    })
})
app.listen(3000,function(err){
    console.log('server run at 192.168.64.129:3000')
})