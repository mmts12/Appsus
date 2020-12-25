export function NoteTodos({ info }) {
    return (
        <div className="todo-card">
            <h1>{info.title}</h1>
                {info.todos.map((todo, idx) => {
                    return <li key={idx} className="clean-list">
                        {todo}
                    </li>
                })}
        </div>
    )
}
