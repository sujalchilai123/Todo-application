const mongoose = require("mongoose");
const { string, boolean } = require("zod");

mongoose.connect("mongodb+srv://admin:kzPolTtuQzPAccqp@cluster0.4tvqeyj.mongodb.net/Todo");

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', TodoSchema);

module.exports = {
    todo
}