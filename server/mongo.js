const mongoose = require("mongoose")
const URI = process.env.DATABASE;

mongoose.connect("mongodb+srv://pratyush:Poiu123@pratyush.v7o29hk.mongodb.net/?retryWrites=true&w=majority&appName=Pratyush")
// mongoose.connect(URI)
    .then(() => {
        console.log("mongodb connected");
    })
    .catch((err) => console.log(`no connection:${err}`))


const newSchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: true
    },
     email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection