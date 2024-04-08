const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_LOCAL_URI, {
            dbName: 'agileprojectv1', // Set the database name
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });

        console.log(`Mongodb database connected with HOST: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDatabase;
