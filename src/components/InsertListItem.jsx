import ManageListItem from "./ManageListItem";

export default function InsertListItem({ item, handleList }) {
	return (
		<>
			<div className="flex flex-wrap items-center justify-between bg-slate-600 p-1.5 m-1 w-full rounded">
				<ManageListItem item={item} handleList={handleList} description />

				<div className="flex gap-1 ml-auto">
					<ManageListItem item={item} handleList={handleList} edit />
					<ManageListItem item={item} handleList={handleList} remove />
				</div>
			</div>
		</>
	);
}
