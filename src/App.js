import { useState } from 'react';
import styles from './App.module.scss'

function App() {

    const [item, setItem] = useState({ text: '' })
    const [task, setTask] = useState([])

    const onChangeInput = (e) => {
        const { value } = e.target
        setItem({ ...item, text: value })
    }

    const handlerClickAdd = () => {
        if(item.text !== '') {
            setTask([...task, item])
        }
        setItem({ text: '' })
    }

    const deleteTask = (index) => {
        setTask(task.filter((item, i) => i !== index))
    }


    return (
        <form className={styles.form}>
            <h1>Todo</h1>
            <div className={styles.headContainer}>
                <input type="text" value={item.text} placeholder="Введите задачу" onChange={onChangeInput} />
                <button type="button" onClick={handlerClickAdd}>Добавить</button>
            </div>
            <h2>Задачи</h2>
            <div className={styles.addTasks}>
                {task.length === 0 && 'Список задач пуст'}
                <ul className={styles.tasksList}>
                    {task && task.map((task, index) => (
                        <li key={index} className={styles.task}>
                            <div>{task.text}</div>
                            <span onClick={() => deleteTask(index)} className={styles.changeTask}>
                                <svg focusable="false" viewBox="0 0 24 24" fill='#0000008a' aria-hidden="true" data-testid="DeleteIcon"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    );
}



export default App;
