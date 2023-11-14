import { v4 as uuidv4 } from "uuid";

export default function InsertListForm({ handleList }) {
    function submitTodoItem(e) {
        if (!e.target.value.length || e.key !== "Enter") return;

        const description = e.target.value;

        handleList((prevState) => [
            ...prevState,
            { id: uuidv4(), description: description, isEditing: false },
        ]);

        e.target.value = "";
    }

    return (
        <>
            <div className="flex bg-slate-800 p-1.5 m-1 w-[50%] rounded">
                <input
                    className="bg-slate-600 text-slate-900 font-light text-center p-1.5 m-1 w-full rounded outline-none placeholder:text-slate-900 selection:bg-slate-800 selection:text-slate-600"
                    placeholder="Write your new todo task here..."
                    onKeyDown={submitTodoItem}
                    name="insert-item-description"
                ></input>
            </div>
        </>
    );
}
