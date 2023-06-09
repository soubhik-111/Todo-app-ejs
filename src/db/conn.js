require('dotenv/config');
const { connect } = require('mongoose');

const mongoUrl = process.env.DB_URL

connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 30000, // set the timeout to 30 seconds
})
.then(()=>console.log("Connected to the database"))
.catch((error)=>console.log("Error connecting to the database:", error))
