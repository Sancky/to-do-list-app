import { useState } from "react";
import InsertListForm from "./components/InsertListForm";
import ShowList from "./components/ShowList";

export default function App() {
    const [todoList, setTodoList] = useState([]);

    return (
        <>
            <div className="flex flex-col flex-wrap justify-center items-center p-8">
                <h1 className="text-slate-950 font-light text-5xl text-center mb-3 select-none">
                    To-Do List
                </h1>

                <ShowList list={todoList} handleList={setTodoList} />
                <InsertListForm handleList={setTodoList} />
            </div>
        </>
    );
}
