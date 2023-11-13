import InsertListItem from "./InsertListItem";

export default function ShowList({ list, handleList }) {
    if (!list.length) return null;

    return (
        <>
            <div className="flex flex-col flex-wrap content-center bg-slate-800 rounded-md p-2 m-6 w-[50%]">
                {list.map((element, index) => (
                    <InsertListItem item={element} handleList={handleList} key={index} />
                ))}
            </div>
        </>
    );
}
