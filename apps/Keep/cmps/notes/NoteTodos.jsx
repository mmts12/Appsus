export function NoteTodos({ info }) {
    return (
        <div className="todo-card">
            <h1>{info.title}</h1>
            <ul>
                {info.todos.map((todo, idx) => {
                    return <li key={idx}>
                        {todo.txt}
                    </li>
                })}
            </ul>
        </div>
    )
}
