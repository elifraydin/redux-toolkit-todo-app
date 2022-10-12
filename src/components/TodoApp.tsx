import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/store';
import { add, remove, toggleComplated } from '../features/todoSlice';


const TodoApp = () => {

    const todos=useAppSelector(state=>state.todos)
    const [title, setTitle] = useState("");

    const dispatch = useAppDispatch();

    const onSave = () => {
        dispatch(add(title))
        setTitle("")//input değeri boşalt
    }


    const onDelete=(id:string)=>{
        dispatch(remove(id))
    }

    const toggle=(id:string)=>{
        dispatch(toggleComplated(id))
    }


    return (
        <div>
            <input name="title" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
            <button onClick={onSave}>Save</button>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <button onClick={()=>toggle(todo.id)}>{todo.complated ? "Tamamlanmadı" : "Tamamlandı"}</button>
                        <span>{todo.title}</span>
                        <button onClick={()=>onDelete(todo.id)}>Delete</button>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp
