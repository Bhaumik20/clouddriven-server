// Import express
let express = require('express');
// Initialise the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes");
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
const cors = require('cors');
// Configure bodyparser to handle post requests
app.use(cors())
app.use(bodyParser.urlencoded({
   extended: true
}));app.use(bodyParser.json());
var mongo_uri=process.env.MONGODB_URI;
if(mongo_uri==null || mongo_uri==""){
    mongo_uri='PASTE MONGO URI HERE';
    //mongo_uri="mongodb://localhost/Clouddriven"
}
// Connect to Mongoose and set connection variable
mongoose.connect(mongo_uri, 
{ useNewUrlParser: true,useUnifiedTopology:true})
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

//Setup server port
var port = process.env.PORT;
if(port==null || port==""){
    port = 3000;
}

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running Clouddriven on port " + port);
});