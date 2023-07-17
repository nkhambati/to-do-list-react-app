// Form using which a TodoItem is added
import React, {useState} from 'react'

const TodoForm = ({onSubmit}) => {
    const [inputText, setInputText] = useState("");
    const [idCounter, setIDCounter] = useState(0);

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        //console.log(inputText);
        setInputText("");
        setIDCounter(idCounter + 1);
        
        // This goes back to whichever one passed in the submit value: TodoList or Todo
        onSubmit({id: idCounter, text: inputText, strikeout: false});
    }

    return (
        <div>
            <input className="todoInput" onChange={handleChange} value={inputText}></input>
            <button type="btn" className="addButton" onClick={handleClick}>Add</button>
        </div>
    );
};

export default TodoForm;