const mongoose=require('mongoose')
const connectDatabase=()=>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
       dbName:'agileV10'
    }).then(con=>{
        console.log(`Mongodb database connected with HOST:${con.connection.host}`)
    })
}
module.exports=connectDatabase