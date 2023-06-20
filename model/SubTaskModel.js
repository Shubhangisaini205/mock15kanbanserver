const mongoose = require("mongoose");


const SubTaskSchema = mongoose.Schema(
    {
        status : {type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo'},
	subtask : [{ type: ObjectId, ref: 'Subtask'}]
    }, {
    versionKey: false
}
)

const SubTaskModel = mongoose.model("board", SubTaskSchema)

module.exports = { SubTaskModel }