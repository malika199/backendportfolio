 const dotenv =  require('dotenv')

dotenv.config()
const  app =  require("./services/server.service.js");
const  mongoService =  require("./services/mongoose.service.js");

mongoService.dbConnect();
app.start();