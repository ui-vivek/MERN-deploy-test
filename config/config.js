const mongoose=require('mongoose')
const chalk=require('chalk')

const ConnectDb=async ()=>{

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(chalk.green.inverse(`Connected to DataBase - ${mongoose.connection.host}`))
        
    } catch (error) {
        console.log(chalk.red.inverse("Failed to Connet with DataBase" , error))
    }

}

module.exports=ConnectDb;