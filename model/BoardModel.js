const mongoose = require("mongoose");


const BoardSchema = mongoose.Schema(
    {
        name: {type:String},
        tasks: [{ type: ObjectId, ref: 'Task' }]
    }, {
    versionKey: false
}
)

const BoardModel = mongoose.model("board", BoardSchema)

module.exports = { BoardModel }