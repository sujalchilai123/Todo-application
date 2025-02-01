export function Todos({ todos }) {
    return < div >
        {todos.map(function (todos) {
            return <div>
                <h1 style={{
                    color: "black"
                }}>{todos.title}</h1>
                <h2>{todos.description}</h2>
                <button>{todos.completed == true ? "Completed" : "Marks as complete"}</button>
            </div>
        })}
    </div >
}