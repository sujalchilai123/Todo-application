const express = require('express')
const app = express()
const port = 3000
const { createTodo, updateTodo } = require("./types")
const { todo } = require("./db");
const cors = require("cors");
app.use(express.json())
app.use(cors());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs"
        })
        return
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.status(200).json({
        msg: "todo Added"
    })

})

app.get("/todos", async function (req, res) {
    const response = await todo.find({})
    res.json({
        todos: response
    })
})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs"
        })
        return
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.status(200).json({
        msg: "todo marked as done"
    })
})

app.listen(port)