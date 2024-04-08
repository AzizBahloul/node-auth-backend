const Product=require('../models/product')
const dotenv=require('dotenv')
const connectDatabase=require('../config/database');
const products=require('../data/product')
//setting dotenv file
dotenv.config({path:'backend/config/config.env'})
//connecting to our database
connectDatabase()
const seedProducts=async()=>{
    try{
        await Product.deleteMany()
        console.log('Products are deleted')
        await Product.insertMany(products)
        console.log('all products are added')
process.exit()
    } catch(error){
console.log(error.message)
process.exit()
    }
}
seedProducts()