const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://portal:e4CSBanWDZUETTaH@cluster0.ms6ceft.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {console.log("Connection successful")
}).catch((e) => { console.log(`No Connection ${e}`) })
