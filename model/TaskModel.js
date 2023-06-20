const mongoose = require("mongoose");


const TaskSchema = mongoose.Schema(
    {
        title: { type: String },
        description: { type: String },
        status: { type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo' },
        subtask: [{ type: ObjectId, ref: 'Subtask' }]
    }, {
    versionKey: false
}
)

const TaskModel = mongoose.model("board", TaskSchema)

module.exports = { TaskModel }