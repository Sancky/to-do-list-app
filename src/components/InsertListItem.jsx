import ManageListItem from "./ManageListItem";

export default function InsertListItem({ item, handleList }) {
    return (
        <>
            <div className="flex items-center bg-slate-600 p-1.5 m-1 w-full rounded">
                <ManageListItem item={item} handleList={handleList} descriptionRender />

                <div className="flex gap-1 ml-auto">
                    <ManageListItem item={item} handleList={handleList} editAction />
                    <ManageListItem item={item} handleList={handleList} removeAction />
                </div>
            </div>
        </>
    );
}
