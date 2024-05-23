const mongoose = require("mongoose")

const bcrypt = require('bcrypt')



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
});
//we are hashing the password

newSchema.pre('save', async function (next) {
    // This line specifies that this middleware should be executed before the 'save' event of a document.

    if (this.isModified('password')) {
        // This condition checks if the 'password' field of the document is being modified.

        this.password = await bcrypt.hash(this.password, 12);
        // If the 'password' field is being modified, it hashes the plain-text password using bcrypt with a salt round of 12.

        


    }
    next();
    // Calls the next middleware in the stack. If this middleware function doesn't call next(), the save operation will not continue.
});

const collection = mongoose.model("collection", newSchema)

module.exports = collection