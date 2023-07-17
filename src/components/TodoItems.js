// Each Todo Item displayed

const TodoItems = ({todos, addTodo, deleteTodo, strikeoutTodo}) => {

    return todos.map((todo, index) => (
        <div className="todoItems">
            <span className={todo.strikeout ? "todoItemStrikeout" : "todoItem"} key={todo.id} onClick={() => strikeoutTodo(todo)}>{todo.text}</span>
        </div>
    ));
    
};

export default TodoItems;