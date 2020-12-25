export function NoteTodos({ info, onDone }) {


    return (
        <div className="todo-card">
            <h1>{info.title}</h1>
            {info.todos.map((todo, idx) => {
                return <li key={idx} className="clean-list" onClick={() => onDone(todo, info)}>
                    {todo}
                </li>
            })}
        </div>
    )
}

// export class NoteTodos extends React.Component {

//     state = {
//         checked: 'none',
//         todosClasses: [],
//     }

//     componentDidMount() {
//         this.loadTodos();
//     }


//     loadTodos = () => {
//         const { todos } = this.props.info;
//         const todoClasses = [];
//         var classes = todos.map((todo, idx) => {
//             return todoClasses[idx] = 'clean-list';
//         })
//         // console.log('classes', classes);
//         this.setState({ todoClasses: classes });
//     }

//     isDone = () => {
//         const { checked } = this.state;
//         if (checked === 'none') this.setState({ checked: 'line-through' });
//         else this.setState({ checked: 'none' })
//     }


//     render() {
//         const { info, onDone } = this.props;
//         const { todoClasses } = this.state;
//         return (
//             <div className="todo-card">
//                 <h1>{info.title}</h1>
//                 {info.todos.map((todo, idx) => {
//                     console.log('classes', this.state.todosClasses);
//                     // return <li key={idx} className="clean-list" onClick={() => onDone(todo, info)}>
//                     return <li key={idx} className={idx + ' ' + 'clean-list'} style={{ textDecoration: this.state.checked }} onClick={this.isDone}>
//                         {todo}
//                     </li>
//                 })}
//             </div>

//         )
//     }
// }
