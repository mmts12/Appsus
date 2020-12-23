export function NoteTodos({ info }) {
    return (
        <ul>
            {info.todos.map((todo, idx) => {
                return <li key={idx}>
                    {todo.txt}
                </li>
            })}
        </ul>
    )
}
